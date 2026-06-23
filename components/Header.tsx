import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "AI Voice Agent",
  "AI Chatbot",
  "Lead Automation",
  "Workflow Automation",
  "AI Support",
  "Custom AI",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showMenu) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const logo = useMemo(
    () => (
      <Link href="#hero" className="flex items-center gap-4">
        <div style={{ display: "grid", gap: 4 }}>
          <div style={{ position: "relative", width: 52, height: 44 }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 48,
                fontWeight: 400,
                color: "#F3E3E2",
                lineHeight: 0.9,
              }}
            >
              V
            </span>
            <span
              style={{
                position: "absolute",
                left: 18,
                top: 0,
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 48,
                fontWeight: 400,
                color: "#4B0000",
                lineHeight: 0.9,
              }}
            >
              A
            </span>
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F3E3E2",
            }}
          >
            <span style={{ fontWeight: 500 }}>VOLTEX</span>
            <span style={{ marginLeft: 8, color: "#4B0000" }}>AI</span>
          </div>
        </div>
      </Link>
    ),
    [],
  );

  return (
    <header
      className={cn(
        "fixed left-1/2 top-6 z-50 w-[min(92vw,1100px)] -translate-x-1/2 rounded-full border px-6 py-4 transition-all duration-300",
        "backdrop-blur-[24px] border-[rgba(243,227,226,0.07)]",
        isScrolled ? "bg-[rgba(12,12,30,0.92)] shadow-[0_0_0_1px_rgba(243,227,226,0.06)]" : "bg-[rgba(12,12,30,0.45)]",
      )}
    >
      <div className="flex items-center justify-between gap-6">
        {logo}
        <nav className="hidden items-center gap-8 md:flex">
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ position: "relative" }}
          >
            <button
              type="button"
              className="font-medium text-sm"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}
            >
              Services
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "calc(100% + 14px)",
                    width: 240,
                    borderRadius: 16,
                    border: "1px solid rgba(243,227,226,0.08)",
                    background: "rgba(12,12,30,0.96)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    padding: 18,
                    display: "grid",
                    gap: 10,
                    zIndex: 40,
                  }}
                >
                  {services.map((service, index) => (
                    <motion.a
                      key={service}
                      href="#services"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.18 }}
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 14,
                        color: "#F3E3E2",
                        padding: "10px 12px",
                        borderRadius: 12,
                      }}
                      onMouseEnter={(event) => {
                        (event.currentTarget as HTMLElement).style.background = "rgba(75,0,0,0.15)";
                      }}
                      onMouseLeave={(event) => {
                        (event.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {service}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="#how-it-works" className="font-medium text-sm" style={{ color: "#F3E3E2", fontFamily: "Cormorant Garamond, serif" }}>
            How It Works
          </Link>
          <Link href="#results" className="font-medium text-sm" style={{ color: "#F3E3E2", fontFamily: "Cormorant Garamond, serif" }}>
            Results
          </Link>
          <Link href="/faq" className="font-medium text-sm" style={{ color: "#F3E3E2", fontFamily: "Cormorant Garamond, serif" }}>
            FAQ
          </Link>
          <Link href="#contact" className="font-medium text-sm" style={{ color: "#F3E3E2", fontFamily: "Cormorant Garamond, serif" }}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full border px-5 py-2 text-sm font-medium md:inline-flex"
            style={{
              borderColor: "rgba(243,227,226,0.3)",
              color: "#F3E3E2",
              animation: "pulseGlow 3s infinite",
            }}
          >
            Book a Free Call
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setShowMenu((value) => !value)}
            aria-label="Open menu"
          >
            {showMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.2 }}
            style={{
              marginTop: 24,
              borderRadius: 24,
              background: "rgba(12,12,30,0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(243,227,226,0.08)",
              padding: 24,
            }}
          >
            <div className="grid gap-6">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="font-[400] text-[1.2rem]"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}
                  onClick={() => setShowMenu(false)}
                >
                  {service}
                </a>
              ))}
              <a
                href="#how-it-works"
                className="font-[400] text-[1.2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}
                onClick={() => setShowMenu(false)}
              >
                How It Works
              </a>
              <a
                href="#results"
                className="font-[400] text-[1.2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}
                onClick={() => setShowMenu(false)}
              >
                Results
              </a>
              <Link href="/faq" className="font-[400] text-[1.2rem]" onClick={() => setShowMenu(false)} style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}>
                FAQ
              </Link>
              <a
                href="#contact"
                className="font-[400] text-[1.2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3E3E2" }}
                onClick={() => setShowMenu(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
