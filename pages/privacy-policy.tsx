import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Voltex AI — Privacy Policy</title>
        <meta
          name="description"
          content="Read Voltex AI's privacy policy, including how we collect, use and protect your information." 
        />
      </Head>
      <main style={{ background: "#0C0C1E", minHeight: "100vh", padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 28 }}>
          <h1 className="display-heading" style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)", margin: 0 }}>
            Privacy Policy
          </h1>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Introduction
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              Voltex AI ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use and protect your personal information when you visit voltexai.in or contact us.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Information We Collect
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              We collect information you voluntarily provide via our contact form including your name, email address, phone number and business details. We also collect standard website analytics data such as pages visited and time on site.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              How We Use Your Information
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              We use your information solely to respond to your enquiry, provide our services, send relevant updates about Voltex AI (only with your consent) and improve your website experience.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Data Storage and Security
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              Your form submissions are processed via Formspree and stored securely. We do not sell, trade or share your personal data with third parties except where required to deliver our services or comply with the law.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Cookies
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              Our website may use basic cookies for analytics purposes. You can disable cookies in your browser settings at any time.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Your Rights
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              You have the right to access, correct or request deletion of your personal data at any time. To exercise these rights contact us at hello@voltexai.in.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Third-Party Services
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              We use Formspree for form submissions and Cloudinary for video hosting. Both services have their own privacy policies which we recommend you review.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Changes to This Policy
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              We may update this policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>
          <section style={{ display: "grid", gap: 16 }}>
            <h2 style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#F3E3E2" }}>
              Contact
            </h2>
            <p className="body-copy" style={{ margin: 0, color: "rgba(243,227,226,0.82)" }}>
              For any privacy-related questions contact us at hello@voltexai.in or WhatsApp +91 73009 18679.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
