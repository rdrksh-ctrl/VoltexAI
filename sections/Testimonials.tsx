import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    quote:
      "Since working with Voltex AI our lead response time went from hours to seconds. We signed 4 extra clients this month alone.",
    name: "Rahul Mehta",
    role: "Real Estate Broker, Mumbai",
    avatar: "RM",
  },
  {
    quote:
      "Our clinic used to miss 15-20 calls a day. Now the AI handles everything — bookings, reminders, follow-ups. Revenue is up 40%.",
    name: "Dr. Priya Sharma",
    role: "Dermatologist, Delhi",
    avatar: "PS",
  },
  {
    quote:
      "Voltex AI automated our client reporting and onboarding. My team saves 3 full days every month. Best investment we have made.",
    name: "Arjun Kapoor",
    role: "Marketing Agency Owner, Bangalore",
    avatar: "AK",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const animate = async () => {
      if (!sectionRef.current) return;
      const gsapModule = await import("gsap");
      const ScrollTriggerMod = await import("gsap/dist/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerMod.default;
      gsap.registerPlugin(ScrollTrigger);
      const items = Array.from(sectionRef.current.querySelectorAll(".testimonial-card"));
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    };

    animate();
  }, []);

  return (
    <section id="testimonials" style={{ background: "#0C0C1E", padding: "8rem 2rem" }} ref={sectionRef}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 28 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <span className="label-small" style={{ color: "#4B0000" }}>
            WHAT CLIENTS SAY
          </span>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: 0, whiteSpace: "pre-line" }}>
            Businesses That
            Automated With Voltex AI
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.name} className="testimonial-card" style={{ padding: "2rem", opacity: 0 }}>
              <div style={{ display: "grid", gap: 18 }}>
                <div style={{ color: "#D4A017", fontSize: "1.1rem" }}>★★★★★</div>
                <p
                  className="body-copy"
                  style={{ margin: 0, color: "rgba(243,227,226,0.9)", fontSize: "1rem" }}
                >
                  {testimonial.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg, rgba(75,0,0,0.9), rgba(75,0,0,0.5))",
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1rem",
                      color: "#F3E3E2",
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div style={{ display: "grid", gap: 4 }}>
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#F3E3E2" }}>
                      {testimonial.name}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "rgba(138,155,171,0.9)" }}>
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
