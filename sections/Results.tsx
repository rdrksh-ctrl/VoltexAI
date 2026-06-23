import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const panels = [
  {
    label: "Why Voltex AI",
    title: "Your competitors are\nalready automated.",
    body:
      "Every hour your team spends on repetitive tasks is an hour a competitor's AI spends on growth. We close that gap — fast. Our systems go live in 7 days and start delivering results from day one.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&auto=format&fit=crop&q=80",
    imageRight: true,
  },
  {
    label: "The Results",
    title: "Real businesses.\nReal numbers.",
    body:
      "From clinics that stopped missing 20 calls a day to real estate agents closing 4 extra deals a month — the businesses that work with Voltex AI don't just save time. They compound it.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80",
    imageRight: false,
  },
];

const stats = [
  { value: "500+", label: "Hours Saved Per Month" },
  { value: "3x", label: "Average Revenue Growth" },
  { value: "7", label: "Days to Go Live" },
  { value: "24/7", label: "AI Never Sleeps" },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let gsap: any;
    let ScrollTrigger: any;

    const animate = async () => {
      if (!sectionRef.current) return;
      const gsapModule = await import("gsap");
      const ScrollTriggerMod = await import("gsap/dist/ScrollTrigger");
      gsap = gsapModule.default;
      ScrollTrigger = ScrollTriggerMod.default;
      gsap.registerPlugin(ScrollTrigger);
      const items = Array.from(sectionRef.current.querySelectorAll(".result-panel"));
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -32 : 32, scale: 1.04 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      const statEls = Array.from(sectionRef.current.querySelectorAll(".stat-value"));
      statEls.forEach((statEl) => {
        const target = parseFloat(statEl.getAttribute("data-target") || "0");
        const counter = { value: 0 };
        gsap.fromTo(
          counter,
          { value: 0 },
          {
            value: target,
            duration: 1.5,
            ease: "power3.out",
            onUpdate() {
              statEl.textContent = Math.round(counter.value).toString();
            },
            scrollTrigger: {
              trigger: statEl,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    };

    animate();
  }, []);

  return (
    <section id="results" style={{ background: "#0C0C1E", padding: "8rem 2rem" }} ref={sectionRef}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 48 }}>
        {panels.map((panel, index) => (
          <div
            key={panel.label}
            className="result-panel"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "4rem",
              alignItems: "center",
              marginBottom: "7rem",
              opacity: 0,
            }}
          >
            {panel.imageRight ? (
              <div />
            ) : null}
            <div style={{ display: "grid", gap: 18 }}>
              <span className="label-small" style={{ color: "#4B0000" }}>
                {panel.label}
              </span>
              <h2 className="display-heading" style={{ fontSize: "clamp(2.8rem, 4vw, 4.2rem)", margin: 0, whiteSpace: "pre-line" }}>
                {panel.title}
              </h2>
              <div style={{ width: 32, height: 2, background: "#4B0000" }} />
              <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.78)" }}>
                {panel.body}
              </p>
            </div>
            <div style={{ position: "relative", minHeight: 420 }}>
              <img
                src={panel.image}
                alt={panel.title}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  borderRadius: 16,
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 40%, rgba(12,12,30,0.65) 100%)",
                  borderRadius: 16,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  color: "rgba(243,227,226,0.75)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                }}
              >
                Image credit: Unsplash
              </span>
            </div>
          </div>
        ))}
        <div style={{ display: "grid", gap: 24, justifyItems: "center" }}>
          <div
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 20,
              textAlign: "center",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="stat-value"
                  data-target={parseFloat(stat.value.replace("+", ""))}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "3rem",
                    color: "#F3E3E2",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(138,155,171,0.9)",
                    marginTop: 10,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: "100%", display: "grid", gap: 16, alignItems: "center" }}>
            <div style={{ height: 1, background: "rgba(243,227,226,0.12)" }} />
            <blockquote
              style={{
                margin: 0,
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.75rem",
                lineHeight: 1.2,
                color: "#F3E3E2",
                textAlign: "center",
              }}
            >
              “The businesses that win this decade will not work harder. They will automate smarter.”
            </blockquote>
            <div style={{ height: 1, background: "rgba(243,227,226,0.12)" }} />
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                color: "rgba(138,155,171,0.9)",
                textAlign: "center",
              }}
            >
              — Voltex AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
