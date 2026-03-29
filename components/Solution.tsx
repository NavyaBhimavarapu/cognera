"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    label: "Local Processing",
    desc: "Behaviour is analysed on-device. Raw data never leaves the user's environment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: "Cross-App Insights",
    desc: "See how users navigate across multiple applications — not just within one.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    label: "Zero Data Brokers",
    desc: "No third-party trackers. No reselling. Your users' trust remains intact.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Attention Patterns",
    desc: "Understand focus, distraction, and context-switching in ways clicks never reveal.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

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

// ── Each pillar row animates independently when scrolled into view ──
function PillarRow({ p, index }: { p: typeof PILLARS[0]; index: number }) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        display: "flex", alignItems: "flex-start", gap: 16,
        background: "#FAFAFA",
        border: "1px solid rgba(55,48,163,0.09)",
        borderRadius: 14, padding: "18px 20px",
        borderLeft: "3px solid #3730A3",
        transition: `
          opacity 0.6s ease ${index * 0.12}s,
          transform 0.6s ease ${index * 0.12}s,
          box-shadow 0.25s,
          border-color 0.25s
        `,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(55,48,163,0.10)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = visible ? "translateY(0)" : "translateY(24px)";
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: "rgba(55,48,163,0.07)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#3730A3",
      }}>
        {p.icon}
      </div>
      <div>
        <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "#1E1B4B", marginBottom: 4 }}>
          {p.label}
        </p>
        <p style={{ fontSize: "0.81rem", color: "#6B7280", lineHeight: 1.7 }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

export default function Solution() {
  // Heading block
  const { ref: headingRef, visible: headingVisible } = useInView(0.2);

  // Editorial (right-side dark card)
  const { ref: editorialRef, visible: editorialVisible } = useInView(0.15);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: headingVisible ? 1 : 0,
    transform: headingVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      id="Solution"
      style={{
        background: "#ffffff",
        padding: "100px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle corner accents */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 280, height: 280, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(55,48,163,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* ── Heading — fades in on scroll ── */}
        <div ref={headingRef}>
          <p style={{
            textAlign: "center",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase" as const, color: "#3730A3", marginBottom: 14,
            ...fadeUp(0),
          }}>
            The Solution
          </p>

          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.9rem)",
            fontWeight: 400, lineHeight: 1.12,
            color: "#0F0A1E", textAlign: "center", marginBottom: 16,
            ...fadeUp(0.1),
          }}>
            Intelligence without exposure —{" "}
            <span style={{ color: "#3730A3" }}>Cognera</span>
          </h2>

          <p style={{
            textAlign: "center", color: "#6B7280", fontSize: "1rem",
            lineHeight: 1.75, maxWidth: 520, margin: "0 auto 64px",
            ...fadeUp(0.2),
          }}>
            Most analytics tools collect everything and ask questions later. Cognera flips
            that model — delivering insights without ever exposing raw user data.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
          className="flex-col-on-mobile"
        >
          {/* Left — each pillar row self-animates */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PILLARS.map((p, i) => (
              <PillarRow key={i} p={p} index={i} />
            ))}
          </div>

          {/* Right — editorial block slides in from right */}
          <div
            ref={editorialRef}
            style={{
              background: "linear-gradient(150deg, #1E1B4B 0%, #312E81 60%, #3730A3 100%)",
              borderRadius: 22, padding: "44px 36px",
              display: "flex", flexDirection: "column", gap: 24,
              border: "1px solid rgba(129,140,248,0.15)",
              opacity: editorialVisible ? 1 : 0,
              transform: editorialVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s",
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "rgba(129,140,248,0.12)",
              border: "1px solid rgba(129,140,248,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#A5B4FC",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#818CF8" }}>
              How it works
            </p>

            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.55rem", fontWeight: 400,
              color: "#EEF2FF", lineHeight: 1.25,
            }}>
              Privacy by architecture, not by policy.
            </h3>

            <p style={{ fontSize: "0.85rem", color: "#C7D2FE", lineHeight: 1.8 }}>
              Cognera processes all behavioural signals locally. Aggregated, anonymised
              patterns reach your dashboard — never the underlying raw events.
            </p>

            <p style={{ fontSize: "0.85rem", color: "#C7D2FE", lineHeight: 1.8 }}>
              No third-party trackers. No data brokers. Just clean, actionable analytics
              built for teams that refuse to compromise on trust.
            </p>

            {/* Mini stat row */}
            <div style={{
              display: "flex", gap: 24, paddingTop: 8,
              borderTop: "1px solid rgba(129,140,248,0.15)",
            }}>
              {[["256-bit", "Encryption"], ["0", "Raw data exposed"], ["DPDP", "Compliant"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#EEF2FF" }}>{val}</p>
                  <p style={{ fontSize: "0.72rem", color: "#818CF8", marginTop: 2 }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flex-col-on-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}