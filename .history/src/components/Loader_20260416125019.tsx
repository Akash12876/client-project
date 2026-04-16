"use client";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Loader() {
  const MIN_VISIBLE_MS = 1700;
  const EXIT_MS = 550;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const enteredAtRef = useRef(0);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRouteRenderRef = useRef(true);
  const clickedNavigationRef = useRef(false);

  const primaryBrand = "IPARX";
  const secondaryBrand = " MEDIA";

  const clearTimers = useCallback(() => {
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    exitTimerRef.current = null;
    hideTimerRef.current = null;
  }, []);

  const showLoader = useCallback(() => {
    clearTimers();
    enteredAtRef.current = Date.now();
    setIsExiting(false);
    setIsVisible(true);
    setAnimationKey((prev) => prev + 1);
  }, [clearTimers]);

  const hideLoaderWithMinimumDelay = useCallback(() => {
    const elapsed = Date.now() - enteredAtRef.current;
    const wait = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    exitTimerRef.current = setTimeout(() => setIsExiting(true), wait);
    hideTimerRef.current = setTimeout(() => setIsVisible(false), wait + EXIT_MS);
  }, []);

  useEffect(() => {
    enteredAtRef.current = Date.now();
    hideLoaderWithMinimumDelay();

    return () => {
      clearTimers();
    };
  }, [clearTimers, hideLoaderWithMinimumDelay]);

  useEffect(() => {
    const routeKey = `${pathname}?${searchParams?.toString() ?? ""}`;
    void routeKey;

    if (firstRouteRenderRef.current) {
      firstRouteRenderRef.current = false;
      return;
    }

    let routeTimer: ReturnType<typeof setTimeout> | null = null;

    if (!clickedNavigationRef.current) {
      routeTimer = setTimeout(() => {
        showLoader();
        hideLoaderWithMinimumDelay();
      }, 0);
    } else {
      hideLoaderWithMinimumDelay();
    }

    clickedNavigationRef.current = false;

    return () => {
      if (routeTimer) clearTimeout(routeTimer);
    };
  }, [pathname, searchParams, hideLoaderWithMinimumDelay, showLoader]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const nextUrl = new URL(href, window.location.origin);
      if (nextUrl.origin !== window.location.origin) return;

      const currentPath = `${window.location.pathname}${window.location.search}`;
      const nextPath = `${nextUrl.pathname}${nextUrl.search}`;
      if (currentPath === nextPath) return;

      clickedNavigationRef.current = true;
      showLoader();
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [showLoader]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div key={animationKey}>
        <motion.p
          className="mb-7 text-center font-black tracking-[0.45em] text-white"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
          initial="hidden"
          animate="visible"
        >
          {primaryBrand.split("").map((char, idx) => (
            <motion.span
              key={`${char}-${idx}`}
              className="inline-block"
              style={{ color: "#6f7cff", textShadow: "0 0 18px rgba(111,124,255,0.35)" }}
              variants={{
                hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: idx * 0.07,
                    duration: 0.42,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {secondaryBrand.split("").map((char, idx) => (
            <motion.span
              key={`media-${char}-${idx}`}
              className="inline-block"
              style={{ color: "#ffffff" }}
              variants={{
                hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: (primaryBrand.length + idx) * 0.07,
                    duration: 0.42,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        <div className="h-[2px] w-[220px] overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full bg-indigo-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
