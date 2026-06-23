import { useState } from "react";
import type { FormEvent } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const contactItems = [
  { label: "Email", value: "hello@voltexai.in" },
  { label: "WhatsApp", value: "+91 73009 18679" },
  { label: "Location", value: "India (Remote-first)" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnjkaqyb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        setMessage("✅ Message sent! We will contact you within 24 hours.");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setStatus("error");
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" style={{ background: "#0C0C1E", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 28 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <span className="label-small" style={{ color: "#4B0000" }}>
            GET STARTED
          </span>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: 0, whiteSpace: "pre-line" }}>
            Let's Automate
            Your Business.
          </h2>
          <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.75)" }}>
            Fill in your details and we will get back to you within 24 hours.
          </p>
        </div>
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1.1fr 1fr" }}>
          <div style={{ display: "grid", gap: 20 }}>
            {contactItems.map((item) => (
              <GlassCard key={item.label} className="p-[28px]">
                <div style={{ display: "grid", gap: 12 }}>
                  <span className="label-small" style={{ color: "#4B0000" }}>
                    {item.label}
                  </span>
                  <p style={{ margin: 0, color: "#F3E3E2", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
                    {item.value}
                  </p>
                </div>
              </GlassCard>
            ))}
            <GlassCard className="p-[28px]">
              <div style={{ display: "grid", gap: 14 }}>
                <span className="label-small" style={{ color: "#4B0000" }}>
                  Free Automation Audit Included
                </span>
                <p style={{ margin: 0, color: "#F3E3E2", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
                  Book a free audit with our team and discover the highest-impact AI systems for your business.
                </p>
              </div>
            </GlassCard>
          </div>
          <GlassCard className="p-[32px]">
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18 }}>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  Phone Number
                </label>
                <input
                  name="phone"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  Business Type
                </label>
                <select
                  name="businessType"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                  }}
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Marketing Agency">Marketing Agency</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  Biggest Challenge
                </label>
                <textarea
                  name="challenge"
                  rows={4}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                    resize: "vertical",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,227,226,0.7)" }}>
                  How did you hear about us
                </label>
                <select
                  name="referral"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(243,227,226,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#F3E3E2",
                  }}
                >
                  <option value="Google">Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(243,227,226,0.25)",
                  background: "rgba(75,0,0,0.5)",
                  color: "#F3E3E2",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  animation: "pulseGlow 3s infinite",
                }}
                onMouseEnter={(event) => {
                  (event.currentTarget as HTMLElement).style.background = "rgba(75,0,0,0.85)";
                }}
                onMouseLeave={(event) => {
                  (event.currentTarget as HTMLElement).style.background = status === "loading" ? "rgba(75,0,0,0.5)" : "rgba(75,0,0,0.5)";
                }}
              >
                {status === "loading" ? "Sending..." : "Send Message & Get Free Audit →"}
              </button>
              {message ? (
                <p
                  style={{
                    margin: 0,
                    color: status === "success" ? "#A8F1A4" : "#F2A1A1",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                  }}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
