"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[92vh] flex items-center justify-center bg-white"
    >
      {/* Corner glow blobs — dark blue + purple, very subtle */}
      {/* Top-left */}
      <div style={{
        position: "absolute", top: -80, left: -80,
        width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,55,163,0.13) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Top-right */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom-left */}
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom-right */}
      <div style={{
        position: "absolute", bottom: -80, right: -80,
        width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,55,163,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl mx-auto">

        {/* Eyebrow badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "rgba(76,29,149,0.05)",
          border: "1px solid rgba(76,29,149,0.15)",
          borderRadius: 100, padding: "4px 14px 4px 8px",
          fontSize: 11, fontWeight: 600, color: "#4C1D95",
          marginBottom: 28, letterSpacing: "0.06em",
          marginTop:28,
          textTransform: "uppercase" as const,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#6D28D9", display: "inline-block",
          }} />
          Now accepting pilot requests
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.06] tracking-tight text-[#0F0A1E] mt-6 mb-6"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Understand behaviour.{" "}
          <span style={{ color: "#4C1D95" }}>Respect privacy.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-lg mb-10">
          Enabling organisations to understand engagement without compromising
          user privacy. Analytics built on trust.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#Contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #3730A3, #4C1D95)" }}
          >
            Request Pilot
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#Solution"
            className="inline-block px-7 py-3.5 rounded-xl text-sm font-normal transition-all duration-200"
            style={{
              color: "#4C1D95",
              border: "1px solid rgba(76,29,149,0.2)",
              background: "transparent",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(76,29,149,0.45)";
              e.currentTarget.style.background = "rgba(76,29,149,0.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(76,29,149,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See how it works
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-xs text-slate-400 tracking-wide">
          Zero raw data exposed &nbsp;·&nbsp; 256-bit local encryption &nbsp;·&nbsp; DPDP-compliant
        </p>
      </div>
    </section>
  );
}