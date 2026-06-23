import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { frames, SEGMENTS, TOTAL_SCROLL_PX, TOTAL_VIDEO_DURATION, NO_PANEL_FRAMES } from "@/config/frames";
import { FrameText } from "@/components/FrameText";
import { ServiceCard } from "@/components/ServiceCard";

const VIDEO_URL = "https://res.cloudinary.com/dxb8cbqld/video/upload/v1782113188/0622_vodfor.mp4";
const LERP_FACTOR = 0.08;
const SEEK_INTERVAL_MS = 1000 / 24;
const SEEK_THRESHOLD = 0.04;
const READYSTATE_MIN = 2;
const SCROLL_STOP_THRESHOLD = 0.0008;
const LOOP_TRIGGER_DELAY_MS = 550;

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const expVidRef = useRef<HTMLVideoElement | null>(null);
  const expVidRefB = useRef<HTMLVideoElement | null>(null);
  const modeRef = useRef<"IDLE" | "SCRUB" | "LOOP">("IDLE");
  const segmentRef = useRef<typeof SEGMENTS[0]>(SEGMENTS[0]);
  const lastProgressRef = useRef(0);
  const lastProgressMsRef = useRef(Date.now());
  const isResettingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastSeekMsRef = useRef(0);
  const targetTimeRef = useRef(0);
  const smoothedTimeRef = useRef(0);
  const crossfadeOpacityRef = useRef(0);
  const [mode, setMode] = useState<"IDLE" | "SCRUB" | "LOOP">("IDLE");
  const [currentFrame, setCurrentFrame] = useState(frames[0]);
  const [isIdle, setIsIdle] = useState(true);

  const showPanels = useMemo(() => !NO_PANEL_FRAMES.has(currentFrame.id), [currentFrame.id]);

  useEffect(() => {
    let ScrollTrigger: any;
    let gsap: any;
    let scrollTriggerInstance: any;
    let resizeObserver: ResizeObserver;

    const initialize = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerMod = await import("gsap/dist/ScrollTrigger");
      const ScrollToPlugin = await import("gsap/dist/ScrollToPlugin");
      gsap = gsapModule.default;
      ScrollTrigger = ScrollTriggerMod.default;
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin.default);
      gsap.ticker.lagSmoothing(0);

      const videoA = expVidRef.current;
      const videoB = expVidRefB.current;

      if (videoA && videoB) {
        const configureVideo = (video: HTMLVideoElement) => {
          video.src = VIDEO_URL;
          video.loop = false;
          video.muted = true;
          video.autoplay = true;
          video.playsInline = true;
          video.crossOrigin = "anonymous";
          video.preload = "auto";
          video.currentTime = 0;
          video.load();
          video.oncanplay = () => {
            video.play().catch(() => {
              // Some browsers may block autoplay; muted playback usually succeeds.
            });
          };
        };

        configureVideo(videoA);
        configureVideo(videoB);
      }

      const updateVideoFrame = () => {
        const now = Date.now();
        const target = targetTimeRef.current;
        const smoothedDiff = target - smoothedTimeRef.current;
        if (Math.abs(smoothedDiff) > 0.0005) {
          smoothedTimeRef.current += smoothedDiff * LERP_FACTOR;
        }
        const currentVideo = modeRef.current === "LOOP" && segmentRef.current.loopMode === "crossfade" ? expVidRefB.current : expVidRef.current;
        if (currentVideo && now - lastSeekMsRef.current >= SEEK_INTERVAL_MS && currentVideo.readyState >= READYSTATE_MIN) {
          if (Math.abs(smoothedTimeRef.current - currentVideo.currentTime) > SEEK_THRESHOLD) {
            currentVideo.currentTime = smoothedTimeRef.current;
            lastSeekMsRef.current = now;
          }
        }

        if (modeRef.current === "LOOP" && segmentRef.current.loopable && currentVideo) {
          const current = currentVideo.currentTime;
          const { loopEnd, loopStart, loopMode } = segmentRef.current;
          if (loopMode === "hard") {
            if (current >= loopEnd) {
              currentVideo.currentTime = loopStart;
            }
          } else {
            if (current >= loopEnd - 0.5) {
              crossfadeOpacityRef.current += 0.05;
              if (expVidRef.current && expVidRefB.current) {
                expVidRef.current.style.opacity = `${1 - crossfadeOpacityRef.current}`;
                expVidRefB.current.style.opacity = `${crossfadeOpacityRef.current}`;
                if (crossfadeOpacityRef.current >= 1) {
                  const temp = expVidRef.current?.currentTime ?? 0;
                  if (expVidRefB.current) {
                    expVidRefB.current.currentTime = loopStart;
                    expVidRefB.current.style.opacity = "1";
                  }
                  if (expVidRef.current) {
                    expVidRef.current.style.opacity = "0";
                  }
                  crossfadeOpacityRef.current = 0;
                  modeRef.current = "LOOP";
                }
              }
            }
          }
        }

        rafRef.current = requestAnimationFrame(updateVideoFrame);
      }

      rafRef.current = requestAnimationFrame(updateVideoFrame);

      if (heroRef.current && stageRef.current) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: `+=${TOTAL_SCROLL_PX}`,
          pin: stageRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate(self: any) {
            const progress = self.progress;
            if (Math.abs(progress - lastProgressRef.current) > SCROLL_STOP_THRESHOLD) {
              lastProgressMsRef.current = Date.now();
              lastProgressRef.current = progress;
            }

            if (progress < 0.004) {
              modeRef.current = "IDLE";
              setMode("IDLE");
              setIsIdle(true);
              if (expVidRef.current) {
                expVidRef.current.pause();
                expVidRef.current.currentTime = 0;
              }
              if (expVidRefB.current) {
                expVidRefB.current.pause();
                expVidRefB.current.currentTime = 0;
              }
              setCurrentFrame(frames[0]);
              return;
            }

            if (modeRef.current === "IDLE") {
              setIsIdle(false);
              setMode("SCRUB");
              modeRef.current = "SCRUB";
              expVidRef.current?.pause();
              expVidRefB.current?.pause();
            }

            if (modeRef.current === "LOOP") {
              targetTimeRef.current = segmentRef.current.scrollResume;
              if (expVidRef.current) {
                expVidRef.current.currentTime = segmentRef.current.scrollResume;
              }
            }

            let next = progress * TOTAL_VIDEO_DURATION;
            let segment = SEGMENTS[SEGMENTS.length - 1];
            for (const candidate of SEGMENTS) {
              if (next >= candidate.transitionStart) {
                segment = candidate;
              }
            }
            if (next < segment.transitionStart) {
              next = segment.transitionStart;
            }
            if (next > segment.scrollResume) {
              next = segment.scrollResume;
            }
            targetTimeRef.current = next;
            segmentRef.current = segment;
            setCurrentFrame(frames.find((frame) => frame.id === segment.frameId) ?? frames[0]);

            if (progress > 0.98) {
              modeRef.current = "IDLE";
              setMode("IDLE");
              setIsIdle(true);
            }
          },
        });
      }
    };

    initialize();

    resizeObserver = new ResizeObserver(() => {
      if (window.innerWidth < 768) {
        if (stageRef.current) stageRef.current.style.height = "100vh";
      }
    });
    resizeObserver.observe(document.body);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        background: "#0C0C1E",
        minHeight: `calc(100vh + ${TOTAL_SCROLL_PX}px)`,
      }}
    >
      <div
        ref={stageRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          ref={expVidRef}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <video
          ref={expVidRefB}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            opacity: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(12,12,30,0.65) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            zIndex: 3,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(75,0,0,0.3) 0%, transparent 100%)",
          }}
        />
        <AnimatePresence>
          {isIdle && (
            <motion.div
              key="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                bottom: 36,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 44,
                  background:
                    "linear-gradient(to bottom, transparent, #F3E3E2)",
                  animation: "scrollLine 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "rgba(243,227,226,0.6)",
                }}
              >
                Scroll
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        {showPanels && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 4,
              display: "grid",
              gridTemplateColumns:
                "minmax(280px,1fr) 2.4fr minmax(280px,1fr)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "80px 20px 80px 44px",
                pointerEvents: "auto",
              }}
            >
              <FrameText frame={currentFrame} visible={true} />
            </div>
            <div />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "80px 44px 80px 20px",
                pointerEvents: "auto",
              }}
            >
              <ServiceCard frame={currentFrame} />
            </div>
          </div>
        )}
        {!isIdle && (
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 6,
              display: "flex",
              gap: 8,
            }}
          >
            {SEGMENTS.filter(
              (segment) => segment.id !== "intro-circle" && segment.id !== "outro-circle",
            ).map((segment) => (
              <div
                key={segment.id}
                style={{
                  width: currentFrame.id === segment.frameId ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  background:
                    currentFrame.id === segment.frameId
                      ? "#F3E3E2"
                      : "rgba(243,227,226,0.2)",
                  transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
