"use client";

import { useEffect, useRef, useState } from "react";

const USECASES = [
  {
    emoji: "🏢",
    title: "Enterprise",
    desc: "Track how employees navigate tools and workflows. Identify bottlenecks, reduce context switching, and improve productivity without monitoring individuals.",
  },
  {
    emoji: "🎓",
    title: "EduTech",
    desc: "Track lesson completion, time on content, and session patterns. Find drop-off points and improve course retention with engagement insights.",
  },
  {
    emoji: "💻",
    title: "Digital Platforms",
    desc: "See how users split time across features. Use behaviour patterns to tune algorithms, reduce churn, and keep users engaged — without invasive data collection.",
  },
  {
    emoji: "🏥",
    title: "Healthcare",
    desc: "Understand how clinicians interact with patient management systems. Reduce administrative friction and surface workflow inefficiencies without exposing sensitive data.",
  },
];

function AnimatedCard({ u, index }: { u: typeof USECASES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        border: "1px solid rgba(55,48,163,0.09)",
        borderRadius: 18,
        padding: "28px 26px",
        transition: `
          opacity 0.6s ease ${index * 0.12}s,
          transform 0.6s ease ${index * 0.12}s,
          box-shadow 0.25s,
          border-color 0.25s
        `,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(55,48,163,0.11)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "rgba(55,48,163,0.22)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(28px)";
        e.currentTarget.style.borderColor = "rgba(55,48,163,0.09)";
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: "rgba(55,48,163,0.07)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.3rem", marginBottom: 18,
      }}>
        {u.emoji}
      </div>

      <h3 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1E1B4B", marginBottom: 8 }}>
        {u.title}
      </h3>

      <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.75 }}>
        {u.desc}
      </p>
    </div>
  );
}

export default function Usecase() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: headingVisible ? 1 : 0,
    transform: headingVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section
      id="Usecase"
      style={{
        background: "#F5F4FF",
        padding: "100px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: -50, left: -50,
        width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(55,48,163,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Heading block — animates when scrolled into view */}
        <div ref={headingRef}>
          <p style={{
            textAlign: "center",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#3730A3", marginBottom: 14,
            ...fadeUp(0),
          }}>
            Use Cases
          </p>

          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
            fontWeight: 400, lineHeight: 1.15,
            color: "#0F0A1E", textAlign: "center", marginBottom: 12,
            ...fadeUp(0.1),
          }}>
            One platform. Every industry.
          </h2>

          <p style={{
            textAlign: "center", color: "#6B7280", fontSize: "1rem",
            lineHeight: 1.7, maxWidth: 460, margin: "0 auto 56px",
            ...fadeUp(0.2),
          }}>
            Zero compromises on privacy, regardless of the sector or scale.
          </p>
        </div>

        {/* Grid — each card animates independently */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
          className="usecase-grid"
        >
          {USECASES.map((u, i) => (
            <AnimatedCard key={i} u={u} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .usecase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}