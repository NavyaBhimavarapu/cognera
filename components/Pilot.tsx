"use client";

import { useEffect, useRef, useState } from "react";

// ── Reusable hook: fires once when element enters viewport ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Pilot() {
  // The outer card scales + fades in
  const { ref: cardRef, visible: cardVisible } = useInView(0.15);

  // Inner content elements stagger after card is visible
  const [contentVisible, setContentVisible] = useState(false);
  useEffect(() => {
    if (cardVisible) {
      // slight delay so card animation starts first
      const t = setTimeout(() => setContentVisible(true), 120);
      return () => clearTimeout(t);
    }
  }, [cardVisible]);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      id="Pilot"
      style={{ background: "#ffffff", padding: "90px 24px", position: "relative", overflow: "hidden" }}
    >
      <div
        ref={cardRef}
        style={{
          maxWidth: 680,
          margin: "0 auto",
          background: "linear-gradient(135deg, #2D1B69 0%, #4C1D95 50%, #5B21B6 100%)",
          borderRadius: 24,
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: cardVisible
            ? "0 24px 60px rgba(109,40,217,0.35)"
            : "0 8px 20px rgba(109,40,217,0.10)",
          // card itself scales + fades up into view
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
          transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.7s ease",
        }}
      >
        {/* Glow blobs inside card */}
        <div style={{
          position: "absolute", top: -60, right: -60, width: 240, height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60, width: 220, height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Eyebrow */}
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase" as const, color: "#C4B5FD", marginBottom: 16,
            ...fadeUp(0),
          }}>
            Get Early Access
          </p>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
            fontWeight: 400, lineHeight: 1.12,
            color: "#ffffff", marginBottom: 18,
            ...fadeUp(0.1),
          }}>
            Ready to understand your users better?
          </h2>

          {/* Subtext */}
          <p style={{
            color: "rgba(255,255,255,0.7)", fontSize: "0.97rem",
            lineHeight: 1.75, maxWidth: 420, margin: "0 auto 40px",
            ...fadeUp(0.2),
          }}>
            Join the pilot programme and be among the first teams to deploy
            privacy-first behavioural analytics.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
            ...fadeUp(0.32),
          }}>
            <a
              href="#Contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#ffffff", color: "#2D1B69",
                padding: "14px 32px", borderRadius: 14,
                fontSize: "0.9rem", fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              Request a pilot
            </a>

            <a
              href="#Contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "#fff",
                padding: "14px 32px", borderRadius: 14,
                fontSize: "0.9rem", fontWeight: 500,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
            >
              Contact the team →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}