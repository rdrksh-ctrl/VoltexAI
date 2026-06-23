import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-[24px] border border-[rgba(243,227,226,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(75,0,0,0.08)]",
        className,
      )}
      style={{ overflow: "hidden", ...style }}
    >
      <div
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "rgba(27,46,60,0.35)",
          inset: 0,
          boxShadow:
            "inset 0 1px 0 rgba(243,227,226,0.07), inset 0 -1px 0 rgba(75,0,0,0.08)",
        }}
        className="w-full h-full p-6"
      >
        {children}
      </div>
    </motion.div>
  );
}
