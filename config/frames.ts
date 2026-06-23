export interface Frame {
  id: string;
  title: string;
  subtitle: string;
  chapter?: string;
  bullets?: string[];
  result?: string | null;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export const frames: Frame[] = [
  {
    id: "intro-circle",
    chapter: "Welcome",
    title: "Your Business. Automated.",
    subtitle:
      "AI that works 24/7 so you don't have to. Scroll to discover what Voltex AI can build for you.",
    result: null,
  },
  {
    id: "audio-waveform",
    chapter: "Service 01",
    title: "AI Voice Agent",
    subtitle:
      "Never miss a call again. Our AI answers, qualifies leads and books appointments around the clock — without a single human touch.",
    result: "Saves 15+ hrs/week",
    bullets: ["24/7 call handling", "Lead qualification", "Auto appointment booking"],
    ctaPrimary: "Deploy a Voice Agent →",
    ctaSecondary: "See how it works",
  },
  {
    id: "chat-interface",
    chapter: "Service 02",
    title: "AI Chatbot",
    subtitle:
      "Instant replies on your website or WhatsApp. Convert visitors into paying clients while you sleep.",
    result: "3x conversion rate",
    bullets: ["Website & WhatsApp ready", "Trained on your business", "Zero wait time"],
    ctaPrimary: "Build My Chatbot →",
    ctaSecondary: "See how it works",
  },
  {
    id: "neural-tunnel",
    chapter: "Service 03",
    title: "Lead Automation",
    subtitle:
      "Capture, score and nurture every lead on autopilot. No lead left behind, no follow-up forgotten.",
    result: "Zero leads lost",
    bullets: ["Auto lead scoring", "Multi-channel follow-up", "CRM integration"],
    ctaPrimary: "Automate My Leads →",
    ctaSecondary: "See how it works",
  },
  {
    id: "electric-gears",
    chapter: "Service 04",
    title: "Workflow Automation",
    subtitle:
      "Eliminate the repetitive. Connect your tools, remove bottlenecks and let your business run itself.",
    result: "40+ hrs saved/month",
    bullets: ["Tool-to-tool integration", "Trigger-based flows", "Zero manual effort"],
    ctaPrimary: "Automate My Workflows →",
    ctaSecondary: "See how it works",
  },
  {
    id: "orbiting-head",
    chapter: "Service 05",
    title: "AI Customer Support",
    subtitle:
      "Handle 80% of support tickets automatically. 24/7, instant, always on-brand — no extra headcount needed.",
    result: "80% tickets auto-resolved",
    bullets: ["Instant ticket resolution", "Multi-language support", "Human escalation fallback"],
    ctaPrimary: "Build My Support AI →",
    ctaSecondary: "See how it works",
  },
  {
    id: "pulsing-brain",
    chapter: "Service 06",
    title: "Custom AI Solutions",
    subtitle:
      "Got a unique problem? We engineer bespoke AI systems built exactly around your business model.",
    result: "Built for your exact needs",
    bullets: ["Fully custom-built", "Deep business integration", "Ongoing optimisation"],
    ctaPrimary: "Let's Build Together →",
    ctaSecondary: "Book a free call",
  },
  {
    id: "outro-circle",
    chapter: "The Beginning",
    title: "Ready to Automate?",
    subtitle:
      "You have seen what is possible. Now let us build it for your business.",
    result: null,
    ctaPrimary: "Book Your Free Audit →",
  },
];

export const SEGMENTS = [
  {
    id: "intro-circle",
    frameId: "intro-circle",
    transitionStart: 0.0,
    transitionEnd: 0.0,
    loopStart: 0.0,
    loopEnd: 2.5,
    scrollResume: 3.0,
    loopable: true,
    loopMode: "hard",
  },
  {
    id: "audio-waveform",
    frameId: "audio-waveform",
    transitionStart: 3.0,
    transitionEnd: 6.0,
    loopStart: 6.0,
    loopEnd: 9.0,
    scrollResume: 10.0,
    loopable: true,
    loopMode: "crossfade",
  },
  {
    id: "chat-interface",
    frameId: "chat-interface",
    transitionStart: 10.0,
    transitionEnd: 14.0,
    loopStart: 14.0,
    loopEnd: 17.0,
    scrollResume: 18.0,
    loopable: true,
    loopMode: "hard",
  },
  {
    id: "neural-tunnel",
    frameId: "neural-tunnel",
    transitionStart: 18.0,
    transitionEnd: 22.0,
    loopStart: 22.0,
    loopEnd: 25.0,
    scrollResume: 26.0,
    loopable: true,
    loopMode: "crossfade",
  },
  {
    id: "electric-gears",
    frameId: "electric-gears",
    transitionStart: 26.5,
    transitionEnd: 28.0,
    loopStart: 28.0,
    loopEnd: 33.0,
    scrollResume: 34.0,
    loopable: true,
    loopMode: "hard",
  },
  {
    id: "orbiting-head",
    frameId: "orbiting-head",
    transitionStart: 34.0,
    transitionEnd: 39.0,
    loopStart: 39.0,
    loopEnd: 41.5,
    scrollResume: 42.0,
    loopable: true,
    loopMode: "hard",
  },
  {
    id: "pulsing-brain",
    frameId: "pulsing-brain",
    transitionStart: 42.0,
    transitionEnd: 47.0,
    loopStart: 47.0,
    loopEnd: 51.0,
    scrollResume: 52.0,
    loopable: true,
    loopMode: "hard",
  },
  {
    id: "outro-circle",
    frameId: "outro-circle",
    transitionStart: 52.0,
    transitionEnd: 54.0,
    loopStart: 54.0,
    loopEnd: 55.0,
    scrollResume: 55.0,
    loopable: true,
    loopMode: "hard",
  },
];

export const TOTAL_VIDEO_DURATION = 55;
export const PX_PER_SECOND = 220;
export const TOTAL_SCROLL_PX = TOTAL_VIDEO_DURATION * PX_PER_SECOND;
export const NO_PANEL_FRAMES = new Set(["intro-circle", "outro-circle"]);
