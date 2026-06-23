import Head from "next/head";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("../components/CustomCursor").then((mod) => mod.default as any),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../sections/Hero").then((mod) => mod.default as any),
  { ssr: false }
);
const Services = dynamic(
  () => import("../sections/Services").then((mod) => mod.default as any),
  { ssr: false }
);
const HowItWorks = dynamic(
  () => import("../sections/HowItWorks").then((mod) => mod.default as any),
  { ssr: false }
);
const Results = dynamic(
  () => import("../sections/Results").then((mod) => mod.default as any),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("../sections/Testimonials").then((mod) => mod.default as any),
  { ssr: false }
);
const Contact = dynamic(
  () => import("../sections/Contact").then((mod) => mod.default as any),
  { ssr: false }
);
const Footer = dynamic(
  () => import("../sections/Footer").then((mod) => mod.default as any),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Voltex AI — Automate. Scale. Dominate.</title>
        <meta
          name="description"
          content="Voltex AI is a premium AI automation agency that builds AI systems to save time, multiply revenue and automate workflows."
        />
      </Head>
      <CustomCursor />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
