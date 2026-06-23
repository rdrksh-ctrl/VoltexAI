import { useEffect, useState } from "react";

const links = [
  {
    title: "Services",
    items: [
      { label: "AI Voice Agent", href: "#services" },
      { label: "AI Chatbot", href: "#services" },
      { label: "Lead Automation", href: "#services" },
      { label: "Workflow Automation", href: "#services" },
      { label: "AI Support", href: "#services" },
      { label: "Custom AI", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Results", href: "#results" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Book a Call", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms of Service", href: "/privacy-policy" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      {
        label: "WhatsApp",
        href: "https://wa.me/917300918679?text=Hi%20Voltex%20AI%2C%20I%27d%20like%20a%20free%20automation%20audit.",
      },
      { label: "hello@voltexai.in", href: "mailto:hello@voltexai.in" },
    ],
  },
];

export default function Footer() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setShowWhatsApp(window.scrollY > total * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer style={{ background: "#0C0C1E", padding: "5rem 2rem 3rem", color: "#F3E3E2" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 36 }}>
        <div style={{ display: "grid", gap: 18, alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "grid", gap: 6, placeItems: "center" }}>
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
            <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}>
              <span style={{ color: "#F3E3E2" }}>VOLTEX</span>
              <span style={{ color: "#4B0000" }}>AI</span>
            </div>
            <p style={{ margin: 0, color: "rgba(138,155,171,0.9)", fontSize: "0.75rem" }}>
              Automate. Scale. Dominate.
            </p>
          </div>
          <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(243,227,226,0.15), rgba(75,0,0,0.4), rgba(243,227,226,0.15), transparent)" }} />
          <div style={{ display: "grid", gap: 12 }}>
            <p style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", lineHeight: 1.05 }}>
              Ready to automate your business?
            </p>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: "1.4rem", color: "#F3E3E2" }}>
              Book your free audit.
            </p>
            <a
              href="https://wa.me/917300918679?text=Hi%20Voltex%20AI%2C%20I%27d%20like%20a%20free%20automation%20audit."
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 220,
                padding: "14px 18px",
                borderRadius: 999,
                background: "#4B0000",
                color: "#F3E3E2",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                animation: "pulseGlow 3s infinite",
              }}
            >
              Book a Free Call →
            </a>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "rgba(138,155,171,0.9)" }}>
              hello@voltexai.in | +91 73009 18679
            </p>
          </div>
          <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(243,227,226,0.15), rgba(75,0,0,0.4), rgba(243,227,226,0.15), transparent)" }} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {links.map((column) => (
            <div key={column.title} style={{ display: "grid", gap: 14 }}>
              <h4 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#F3E3E2" }}>
                {column.title}
              </h4>
              <div style={{ display: "grid", gap: 10 }}>
                {column.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "rgba(243,227,226,0.75)" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(138,155,171,0.9)" }}>
          <span>© 2025 Voltex AI. All rights reserved.</span>
          <span>Built with AI ⚡</span>
        </div>
      </div>
      {showWhatsApp ? (
        <a
          href="https://wa.me/917300918679?text=Hi%20Voltex%20AI%2C%20I%27d%20like%20a%20free%20automation%20audit."
          style={{
            position: "fixed",
            right: 24,
            bottom: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 18px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "#fff",
            boxShadow: "0 0 40px rgba(37,211,102,0.4)",
            zIndex: 60,
            animation: "pulseGlow 3s infinite",
          }}
        >
          Book a Free Call
        </a>
      ) : null}
    </footer>
  );
}
