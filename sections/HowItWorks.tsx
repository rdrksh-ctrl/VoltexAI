export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      body:
        "We audit your business in 30 minutes, map every automation opportunity and design your custom AI system.",
    },
    {
      number: "02",
      title: "We Build It",
      body:
        "Our team builds and integrates your AI agents and automation flows — 100% done for you. You just approve.",
    },
    {
      number: "03",
      title: "You Scale",
      body:
        "Go live in 7 days. Watch your business run smoother — more leads, more revenue, less stress. Forever.",
    },
  ];

  return (
    <section id="how-it-works" style={{ background: "#0C0C1E", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 28 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <span className="label-small" style={{ color: "#4B0000" }}>
            THE PROCESS
          </span>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: 0, whiteSpace: "pre-line" }}>
            From Zero to Automated
            in 3 Steps.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {steps.map((step) => (
            <div key={step.number} style={{ display: "grid", gap: 18 }}>
              <div
                style={{
                  borderRadius: 24,
                  padding: "2rem",
                  background: "rgba(27,46,60,0.2)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(243,227,226,0.08)",
                }}
              >
                <span
                  className="display-heading"
                  style={{ color: "#4B0000", fontSize: "4rem", margin: 0 }}
                >
                  {step.number}
                </span>
                <h3
                  className="display-heading"
                  style={{ fontSize: "2rem", margin: "16px 0 0" }}
                >
                  {step.title}
                </h3>
                <p
                  className="body-copy"
                  style={{ margin: "16px 0 0", color: "rgba(243,227,226,0.75)" }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
