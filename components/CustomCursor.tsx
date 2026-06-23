import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number>();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!visible) setVisible(true);
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`;
      }
    };

    const onMouseDown = () => {
      document.body.classList.add("cursor-hovering");
    };

    const onMouseUp = () => {
      document.body.classList.remove("cursor-hovering");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [visible]);

  useEffect(() => {
    const animate = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12;
      ringY.current += (mouseY.current - ringY.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current - 18}px, ${ringY.current - 18}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const onHoverEnter = () => document.body.classList.add("cursor-hovering");
    const onHoverLeave = () => document.body.classList.remove("cursor-hovering");

    const attachHover = (element: Element) => {
      element.addEventListener("mouseenter", onHoverEnter);
      element.addEventListener("mouseleave", onHoverLeave);
    };

    document.querySelectorAll("button, a, input, textarea, select").forEach(attachHover);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            node.querySelectorAll("button, a, input, textarea, select").forEach(attachHover);
            if (["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"].includes(node.tagName)) {
              attachHover(node);
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.querySelectorAll("button, a, input, textarea, select").forEach((element) => {
        element.removeEventListener("mouseenter", onHoverEnter);
        element.removeEventListener("mouseleave", onHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#F3E3E2",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(75,0,0,0.7)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease, border 0.25s ease, width 0.25s ease, height 0.25s ease",
        }}
      />
      <style>{`
        body.cursor-hovering .cursor-dot {
          width: 4px !important;
          height: 4px !important;
        }
        body.cursor-hovering .cursor-ring {
          width: 52px !important;
          height: 52px !important;
          border-color: rgba(75,0,0,1) !important;
        }
      `}</style>
    </>
  );
}
