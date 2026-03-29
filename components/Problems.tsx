"use client";

import { useEffect, useRef, useState } from "react";

const PROBLEMS = [
  {
    num: "01",
    title: "SSR Behaviour",
    body: "Frequent Stay–Switch–Return patterns across applications are invisible to existing analytics tools.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 014-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "No Visibility",
    body: "Organisations lack insight into real digital behaviour — what users actually do, not just what was clicked.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "In-App Blindness",
    body: "Most tools only track within a single app — missing the cross-application context that drives real decisions.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Fragmented Attention",
    body: "Users switch apps constantly, breaking focus mid-task with no way to measure it.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Half the Picture",
    body: "Traditional analytics show what happened — but never how or why it happened.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a10 10 0 010 20"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
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

export default function Problems() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const TOTAL = PROBLEMS.length;

  // Heading scroll trigger
  const { ref: headingRef, visible: headingVisible } = useInView(0.2);

  // Carousel scroll trigger (fires once section enters view)
  const { ref: carouselRef, visible: carouselVisible } = useInView(0.1);

  // Nav scroll trigger
  const { ref: navRef, visible: navVisible } = useInView(0.1);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: headingVisible ? 1 : 0,
    transform: headingVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const startTimer = () => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % TOTAL), 3400);
  };
  const stopTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  useEffect(() => { startTimer(); return stopTimer; }, []);

  const goTo = (i: number) => { stopTimer(); setActive(i); startTimer(); };
  const prev = () => goTo((active - 1 + TOTAL) % TOTAL);
  const next = () => goTo((active + 1) % TOTAL);

  const getStyle = (idx: number): React.CSSProperties => {
    const pos = ((idx - active) + TOTAL) % TOTAL;
    if (pos === 0) return {
      transform: "translateX(0) scale(1)",
      opacity: 1,
      zIndex: 5,
      pointerEvents: "auto",
      boxShadow: "0 20px 60px rgba(55,48,163,0.22), 0 4px 16px rgba(76,29,149,0.12)",
    };
    if (pos === 1) return {
      transform: "translateX(105%) scale(0.9)",
      opacity: 0.45,
      zIndex: 3,
      pointerEvents: "auto",
      boxShadow: "none",
    };
    if (pos === TOTAL - 1) return {
      transform: "translateX(-105%) scale(0.9)",
      opacity: 0.45,
      zIndex: 3,
      pointerEvents: "auto",
      boxShadow: "none",
    };
    return {
      transform: "translateX(0) scale(0.8)",
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  };

  return (
    <section
      id="Problems"
      style={{
        background: "#F8F7FF",
        padding: "100px 0 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(55,48,163,0.07) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* ── Heading — fades in when scrolled into view ── */}
        <div ref={headingRef}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase" as const, color: "#3730A3", marginBottom: 14,
            ...fadeUp(0),
          }}>
            The Problem
          </p>

          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
            fontWeight: 400, lineHeight: 1.15,
            color: "#0F0A1E", marginBottom: 16,
            ...fadeUp(0.1),
          }}>
            The blind spots in digital analytics
          </h2>

          <p style={{
            fontSize: "1rem", color: "#6B7280", lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto 56px",
            ...fadeUp(0.2),
          }}>
            Today's tools measure clicks and events — they don't understand behavioural
            transitions, attention drops, or why users switch contexts.
          </p>
        </div>

        {/* ── Carousel — slides up when scrolled into view ── */}
        <div
          ref={carouselRef}
          style={{
            position: "relative",
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: carouselVisible ? 1 : 0,
            transform: carouselVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                position: "absolute",
                width: 300,
                background: "linear-gradient(150deg, #1E1B4B 0%, #312E81 55%, #3730A3 100%)",
                borderRadius: 20,
                padding: "32px 28px",
                textAlign: "left",
                cursor: "pointer",
                transition: "transform .5s cubic-bezier(.4,0,.2,1), opacity .5s ease, box-shadow .3s",
                border: "1px solid rgba(129,140,248,0.15)",
                ...getStyle(i),
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(129,140,248,0.10)",
                border: "1px solid rgba(129,140,248,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, color: "#A5B4FC",
              }}>
                {p.icon}
              </div>

              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#818CF8", marginBottom: 8 }}>
                {p.num}
              </p>

              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem", color: "#EEF2FF", marginBottom: 10, fontWeight: 400 }}>
                {p.title}
              </h3>

              <p style={{ fontSize: "0.81rem", color: "#C7D2FE", lineHeight: 1.75 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Navigation — fades in just after carousel ── */}
        <div
          ref={navRef}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 12, marginTop: 16,
            opacity: navVisible ? 1 : 0,
            transform: navVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}
        >
          <button
            onClick={prev}
            style={{
              width: 34, height: 34, borderRadius: "50%",
              border: "1.5px solid rgba(55,48,163,0.2)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(55,48,163,0.55)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(55,48,163,0.2)")}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="#3730A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {PROBLEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                borderRadius: 100, border: "none", cursor: "pointer",
                background: i === active ? "#3730A3" : "rgba(55,48,163,0.18)",
                width: i === active ? 20 : 7,
                height: 7,
                transition: "all .3s",
                padding: 0,
              }}
            />
          ))}

          <button
            onClick={next}
            style={{
              width: 34, height: 34, borderRadius: "50%",
              border: "1.5px solid rgba(55,48,163,0.2)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(55,48,163,0.55)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(55,48,163,0.2)")}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="#3730A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}