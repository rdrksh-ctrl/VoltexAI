import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      const [{ default: Lenis }, gsapModule] = await Promise.all([import("lenis"), import("gsap")]);
      if (!isMounted) return;
      const gsap = gsapModule.default;
      const ScrollTriggerMod = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = ScrollTriggerMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t: number) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      lenisRef.current = lenis;
    };

    initialize();

    return () => {
      isMounted = false;
      lenisRef.current?.destroy?.();
    };
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
