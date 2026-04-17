import { NextResponse } from "next/server";

export const revalidate = 1800;

const CHANNEL_VIDEOS_URL = "https://www.youtube.com/channel/UCYgu3qmmhgovLZtoT1tx00g/videos";
const FALLBACK_CHANNEL_TITLE = "ParasDecodes";
const MAX_RESULTS = 20;

type YouTubeApiItem = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
  };
};

type UnknownRecord = Record<string, unknown>;

function extractInitialData(html: string): string | null {
  const marker = "var ytInitialData = ";
  const markerIndex = html.indexOf(marker);

  if (markerIndex === -1) {
    return null;
  }

  const startIndex = markerIndex + marker.length;
  const firstBraceIndex = html.indexOf("{", startIndex);

  if (firstBraceIndex === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = firstBraceIndex; index < html.length; index += 1) {
    const character = html[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === '"') {
        inString = false;
      }

      continue;
    }

    if (character === '"') {
      inString = true;
      continue;
    }

    if (character === "{") {
      depth += 1;
    } else if (character === "}") {
      depth -= 1;

      if (depth === 0) {
        return html.slice(firstBraceIndex, index + 1);
      }
    }
  }

  return null;
}

function collectVideoRenderers(node: unknown, renderers: UnknownRecord[] = []): UnknownRecord[] {
  if (!node || typeof node !== "object") {
    return renderers;
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectVideoRenderers(item, renderers);
    }

    return renderers;
  }

  const record = node as UnknownRecord;
  const videoRenderer = record.videoRenderer;

  if (videoRenderer && typeof videoRenderer === "object" && !Array.isArray(videoRenderer)) {
    renderers.push(videoRenderer as UnknownRecord);
  }

  for (const value of Object.values(record)) {
    collectVideoRenderers(value, renderers);
  }

  return renderers;
}

function getText(value: unknown): string | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as UnknownRecord;
  const simpleText = record.simpleText;

  if (typeof simpleText === "string" && simpleText.trim()) {
    return simpleText.trim();
  }

  const runs = record.runs;

  if (!Array.isArray(runs)) {
    return null;
  }

  const parts = runs
    .map((run) => {
      if (!run || typeof run !== "object") {
        return "";
      }

      const text = (run as UnknownRecord).text;
      return typeof text === "string" ? text : "";
    })
    .filter(Boolean);

  return parts.length > 0 ? parts.join("").trim() : null;
}

function mapRenderersToItems(renderers: UnknownRecord[]): YouTubeApiItem[] {
  const seenIds = new Set<string>();
  const items: YouTubeApiItem[] = [];

  for (const renderer of renderers) {
    const rawVideoId = renderer.videoId;
    const videoId = typeof rawVideoId === "string" ? rawVideoId : null;

    if (!videoId || seenIds.has(videoId)) {
      continue;
    }

    const title = getText(renderer.title) ?? "Untitled video";
    const channelTitle = getText(renderer.ownerText) ?? getText(renderer.longBylineText) ?? FALLBACK_CHANNEL_TITLE;

    seenIds.add(videoId);
    items.push({
      id: { videoId },
      snippet: {
        title,
        channelTitle,
      },
    });

    if (items.length >= MAX_RESULTS) {
      break;
    }
  }

  return items;
}

export async function GET() {
  try {
    const response = await fetch(CHANNEL_VIDEOS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json({ error: `YouTube source unavailable: ${response.status}` }, { status: 502 });
    }

    const html = await response.text();
    const initialDataJson = extractInitialData(html);

    if (!initialDataJson) {
      return NextResponse.json({ error: "Unable to parse YouTube channel data." }, { status: 502 });
    }

    const initialData = JSON.parse(initialDataJson) as UnknownRecord;
    const renderers = collectVideoRenderers(initialData);
    const items = mapRenderersToItems(renderers);

    if (items.length === 0) {
      return NextResponse.json({ error: "No YouTube videos found." }, { status: 404 });
    }

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "Failed to load YouTube videos." }, { status: 500 });
  }
}