import { AnimatePresence, motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Frame } from "@/config/frames";

interface FrameTextProps {
  frame: Frame;
  visible: boolean;
}

export function FrameText({ frame, visible }: FrameTextProps) {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={frame.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <GlassCard className="max-w-[300px] p-[28px]">
            <div style={{ display: "grid", gap: 16 }}>
              {frame.chapter ? (
                <span
                  className="label-small"
                  style={{ color: "#4B0000", letterSpacing: "0.35em" }}
                >
                  {frame.chapter}
                </span>
              ) : null}
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "#4B0000",
                  margin: "10px 0",
                }}
              />
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(24px, 2.5vw, 40px)", margin: 0 }}
              >
                {frame.title}
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "rgba(243,227,226,0.6)",
                  margin: 0,
                }}
              >
                {frame.subtitle}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
