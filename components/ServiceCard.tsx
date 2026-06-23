import { AnimatePresence, motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Frame } from "@/config/frames";

interface ServiceCardProps {
  frame: Frame;
}

export function ServiceCard({ frame }: ServiceCardProps) {
  if (!frame.result) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={frame.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 12 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <GlassCard className="max-w-[280px] p-[28px]">
          <div style={{ display: "grid", gap: 18 }}>
            <span
              className="label-small"
              style={{ color: "#4B0000", letterSpacing: "0.35em" }}
            >
              AI SERVICE
            </span>
            <div style={{ width: 32, height: 1, background: "#4B0000" }} />
            <h3
              className="display-heading"
              style={{ fontSize: 26, margin: 0, lineHeight: 1.05 }}
            >
              {frame.title}
            </h3>
            <div style={{ display: "grid", gap: 10 }}>
              {frame.bullets?.map((bullet) => (
                <p
                  key={bullet}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    margin: 0,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    color: "rgba(243,227,226,0.85)",
                  }}
                >
                  <span style={{ color: "#4B0000" }}>▸</span>
                  <span>{bullet}</span>
                </p>
              ))}
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(75,0,0,0.3)",
                border: "1px solid rgba(75,0,0,0.6)",
                color: "#F3E3E2",
                fontSize: 11,
                letterSpacing: "0.08em",
              }}
            >
              {frame.result}
            </span>
            <div style={{ display: "grid", gap: 12 }}>
              {frame.ctaPrimary ? (
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: 999,
                    background: "rgba(75,0,0,0.4)",
                    border: "1px solid rgba(243,227,226,0.25)",
                    color: "#F3E3E2",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    transition: "background 0.25s ease",
                  }}
                  onMouseEnter={(event) => {
                    (event.currentTarget as HTMLElement).style.background = "rgba(75,0,0,0.75)";
                  }}
                  onMouseLeave={(event) => {
                    (event.currentTarget as HTMLElement).style.background = "rgba(75,0,0,0.4)";
                  }}
                >
                  {frame.ctaPrimary}
                </a>
              ) : null}
              {frame.ctaSecondary ? (
                <a
                  href="#contact"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(243,227,226,0.5)",
                    textDecoration: "underline",
                  }}
                  onMouseEnter={(event) => {
                    (event.currentTarget as HTMLElement).style.color = "#F3E3E2";
                  }}
                  onMouseLeave={(event) => {
                    (event.currentTarget as HTMLElement).style.color = "rgba(243,227,226,0.5)";
                  }}
                >
                  {frame.ctaSecondary}
                </a>
              ) : null}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </AnimatePresence>
  );
}
