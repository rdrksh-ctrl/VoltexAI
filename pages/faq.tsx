import Head from "next/head";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to set up?",
      answer:
        "Most AI systems are live within 5-7 business days. Complex custom builds may take up to 2 weeks. We give you a precise timeline on your free audit call.",
    },
    {
      question: "Do I need any technical knowledge?",
      answer:
        "Zero. We handle everything from build to integration. You just review, approve and watch it work.",
    },
    {
      question: "What tools do you integrate with?",
      answer:
        "We integrate with WhatsApp, Gmail, Calendly, HubSpot, GoHighLevel, Shopify, Notion, Slack and 100+ other tools via Zapier and Make.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Packages start from ₹15,000 per month for ongoing AI systems. One-time builds start from ₹50,000. We give you an exact quote on your free audit call — no hidden fees.",
    },
    {
      question: "What if the AI makes mistakes?",
      answer:
        "All our systems include human fallback options so nothing critical is missed. We also monitor, test and optimise every system continuously after launch.",
    },
    {
      question: "Is this suitable for small businesses?",
      answer:
        "Absolutely. Most of our clients are small business owners who want to operate like large companies without the overhead. If you are generating leads or handling customers, AI can help you.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. Every system includes 30 days of post-launch support. We also offer monthly retainer packages for ongoing management, optimisation and new automations.",
    },
    {
      question: "Can I see examples of your work?",
      answer:
        "Yes — book a free call and we will walk you through real case studies from real clients including results and timelines.",
    },
    {
      question: "What happens on the free audit call?",
      answer:
        "We spend 30 minutes understanding your business, identify every automation opportunity, show you exactly what we would build and give you a no-obligation proposal.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. All automations are built with data security in mind. We never store sensitive client data and all systems comply with standard data protection practices.",
    },
  ];

  return (
    <>
      <Head>
        <title>Voltex AI — FAQ</title>
        <meta
          name="description"
          content="Frequently asked questions about Voltex AI's automation services and how our process works."
        />
      </Head>
      <main style={{ background: "#0C0C1E", minHeight: "100vh", padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 32 }}>
          <div style={{ display: "grid", gap: 14 }}>
            <span className="label-small" style={{ color: "#4B0000" }}>
              FAQ
            </span>
            <h1 className="display-heading" style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)", margin: 0, whiteSpace: "pre-line" }}>
              Everything You Need
              To Know.
            </h1>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {faqs.map((item) => (
              <details
                key={item.question}
                style={{
                  border: "1px solid rgba(243,227,226,0.12)",
                  borderRadius: 18,
                  padding: "1.6rem",
                  background: "rgba(27,46,60,0.2)",
                }}
              >
                <summary
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.15rem",
                    color: "#F3E3E2",
                    cursor: "pointer",
                    listStyle: "none",
                  }}
                >
                  {item.question}
                </summary>
                <p
                  style={{
                    margin: "1rem 0 0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.9,
                    color: "rgba(243,227,226,0.8)",
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
