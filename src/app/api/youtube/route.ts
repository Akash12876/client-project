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

type YouTubeOEmbedResponse = {
  title?: string;
  author_name?: string;
};

function extractVideoIds(html: string): string[] {
  const matches = html.matchAll(/"videoId":"([^"]+)"/g);
  const ids: string[] = [];
  const seenIds = new Set<string>();

  for (const match of matches) {
    const videoId = match[1];

    if (!videoId || seenIds.has(videoId)) {
      continue;
    }

    seenIds.add(videoId);
    ids.push(videoId);

    if (ids.length >= MAX_RESULTS) {
      break;
    }
  }

  return ids;
}

async function fetchVideoMeta(videoId: string): Promise<YouTubeApiItem | null> {
  const oEmbedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&format=json`;

  const response = await fetch(oEmbedUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      Accept: "application/json,text/plain,*/*",
    },
    next: { revalidate },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as YouTubeOEmbedResponse;

  return {
    id: { videoId },
    snippet: {
      title: data.title || "Untitled video",
      channelTitle: data.author_name || FALLBACK_CHANNEL_TITLE,
    },
  };
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
    const videoIds = extractVideoIds(html);

    if (videoIds.length === 0) {
      return NextResponse.json({ error: "Unable to parse YouTube channel data." }, { status: 502 });
    }

    const results = await Promise.all(videoIds.map((videoId) => fetchVideoMeta(videoId)));
    const items = results.filter((item): item is YouTubeApiItem => Boolean(item));

    if (items.length === 0) {
      return NextResponse.json({ error: "No YouTube videos found." }, { status: 404 });
    }

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "Failed to load YouTube videos." }, { status: 500 });
  }
}