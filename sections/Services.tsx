import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    chapter: "Service 01",
    title: "AI Voice Agent",
    bullets: ["24/7 call handling", "Lead qualification", "Auto appointment booking"],
    result: "Saves 15+ hrs/week",
  },
  {
    chapter: "Service 02",
    title: "AI Chatbot",
    bullets: ["Website & WhatsApp ready", "Trained on your business", "Zero wait time"],
    result: "3x conversion rate",
  },
  {
    chapter: "Service 03",
    title: "Lead Automation",
    bullets: ["Auto lead scoring", "Multi-channel follow-up", "CRM integration"],
    result: "Zero leads lost",
  },
  {
    chapter: "Service 04",
    title: "Workflow Automation",
    bullets: ["Tool-to-tool integration", "Trigger-based flows", "Zero manual effort"],
    result: "40+ hrs saved/month",
  },
  {
    chapter: "Service 05",
    title: "AI Customer Support",
    bullets: ["Instant ticket resolution", "Multi-language support", "Human escalation fallback"],
    result: "80% tickets auto-resolved",
  },
  {
    chapter: "Service 06",
    title: "Custom AI Solutions",
    bullets: ["Fully custom-built", "Deep business integration", "Ongoing optimisation"],
    result: "Built for your exact needs",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll(".service-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#0C0C1E", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 28 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <span className="label-small" style={{ color: "#4B0000" }}>
            WHAT WE BUILD
          </span>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: 0, whiteSpace: "pre-line" }}>
            Six AI Systems.
            One Unstoppable Business.
          </h2>
          <div style={{ width: 48, height: 2, background: "#4B0000" }} />
        </div>
        <div
          ref={containerRef}
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {services.map((service) => (
            <GlassCard
              key={service.title}
              className="service-card motion-hidden"
              style={{ padding: "2rem", transition: "all 0.9s ease" }}
            >
              <div style={{ display: "grid", gap: 18 }}>
                <span className="label-small" style={{ color: "#4B0000" }}>
                  {service.chapter}
                </span>
                <h3 className="display-heading" style={{ fontSize: "2rem", margin: 0, lineHeight: 1.05 }}>
                  {service.title}
                </h3>
                <div style={{ width: 24, height: 1, background: "#4B0000" }} />
                <div style={{ display: "grid", gap: 10 }}>
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(75,0,0,0.15)",
                        color: "#F3E3E2",
                        padding: "10px 14px",
                        borderRadius: 999,
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                      }}
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "rgba(75,0,0,0.3)",
                    color: "#F3E3E2",
                    fontSize: 12,
                  }}
                >
                  {service.result}
                </span>
                <a
                  href="#contact"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "rgba(243,227,226,0.7)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(event) => {
                    (event.currentTarget as HTMLElement).style.color = "#F3E3E2";
                  }}
                  onMouseLeave={(event) => {
                    (event.currentTarget as HTMLElement).style.color = "rgba(243,227,226,0.7)";
                  }}
                >
                  Get Started →
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
