import ContentDropdown from "../../components/ContentDropdown";

export default function AIResearch() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fafaf8", color: "#0d0d1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: 64,
        background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg viewBox="0 0 816.954 567.512" width="32" height="22" aria-hidden="true">
            <path fill="#1F3C89" d="M409.578 0 L327.727 141.773 L489.176 141.703 L652.891 425.262 L816.578 425.262 L571.063 0.012 L423.035 0 Z"/>
            <path fill="#232856" d="M245.867 0.012 L164.027 141.77 L245.844 283.477 L409.57 0.012 Z"/>
            <path fill="#1F3C89" d="M0.328 141.766 L245.852 567.02 L407.336 567.023 L489.188 425.25 L327.738 425.324 L164.023 141.766 Z"/>
            <path fill="#232856" d="M407.344 567.016 L571.043 567.016 L652.891 425.258 L571.07 283.551 Z"/>
          </svg>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#0d0d1a", textTransform: "uppercase" }}>
            Emerging
          </span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Home", "/"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: "#0d0d1a", textTransform: "uppercase",
            }}>{label}</a>
          ))}
          <ContentDropdown dark={false} />
          {[["Events", "/events"], ["Membership", "https://criteriosevcf.carrd.co/"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: "#0d0d1a", textTransform: "uppercase",
              ...(label === "Membership" ? {
                background: "#1F3C89", color: "#fff",
                padding: "8px 20px", borderRadius: 2,
              } : {})
            }}>{label}{label === "Membership" ? " →" : ""}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 64, minHeight: 420,
        background: "#0e1f4a",
        display: "flex", alignItems: "flex-end",
        position: "relative", overflow: "hidden",
      }}>
        {/* Subtle hex pattern background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to bottom, transparent, #0e1f4a)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, padding: "4rem 2.5rem 4rem", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <a href="/community" style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
              Community
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
            <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontWeight: 600 }}>
              AI Research
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em",
            margin: "0 0 1.25rem",
          }}>
            AI in Venture Capital<br />
            <span style={{ color: "#4a9eda", fontStyle: "italic", fontWeight: 700 }}>From tools to systems</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            How leading VC funds are building integrated AI infrastructure for investment decisions — not just using AI as a point solution.
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              A new kind of infrastructure.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The conversation has shifted. It's no longer "Should we use AI?" but "How do we build systems that make AI central to how we operate?"
            </p>
            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              This research maps that transition: how funds are structuring teams and decision processes around AI, where it's already effective, and where human judgment remains irreplaceable.
            </p>
            <a
              href="https://evcf-ai-research.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1F3C89", color: "#fff",
                padding: "14px 28px", borderRadius: 2,
                textDecoration: "none", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Read the full report
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "#e8e8e3", border: "1.5px solid #e8e8e3", borderRadius: 4, overflow: "hidden" }}>
            {[
              { n: "4", label: "Maturity levels", sub: "From intuitive to AI-augmented" },
              { n: "∞", label: "Real cases", sub: "Point Nine, EQT Ventures, Earlybird" },
              { n: "Free", label: "Access", sub: "Open to the ecosystem" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "#fff", padding: "1.75rem 2rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1F3C89", letterSpacing: "-0.02em", minWidth: 80 }}>
                  {stat.n}
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0d0d1a", marginBottom: 2 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#777", lineHeight: 1.5 }}>
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATURITY LEVELS ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fff", borderTop: "1px solid #efefea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", lineHeight: 1.1 }}>
            Four levels of maturity.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5px", background: "#e8e8e3",
            border: "1.5px solid #e8e8e3", borderRadius: 4, overflow: "hidden",
          }}>
            {[
              { n: "01", title: "Intuitive", body: "Decisions driven by relationships and experience, no structured data. The traditional VC model." },
              { n: "02", title: "Data-aware", body: "CRM systems in place, but analysis remains manual. Data exists but isn't leveraged by AI yet." },
              { n: "03", title: "Data-driven", body: "LLMs connected via MCP, organizing context. Investor makes final call. Example: Point Nine." },
              { n: "04", title: "AI-augmented", body: "Custom AI infrastructure. Covers 95%+ of opportunities. Examples: EQT Ventures, Earlybird." },
            ].map((card) => (
              <div key={card.n} style={{ background: "#fff", padding: "2.5rem 2rem" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#1F3C89", marginBottom: "1rem", textTransform: "uppercase" }}>
                  {card.n} — {card.title}
                </div>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FINDINGS ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", lineHeight: 1.1 }}>
            Key findings.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
          }}>
            {[
              { title: "Most funds are still at the beginning", body: "The majority use AI tactically, without deep process integration. Advanced maturity is still the exception." },
              { title: "Where AI excels", body: "Sourcing, screening, and portfolio monitoring. AI shines at filtering signals from noise." },
              { title: "Where humans stay central", body: "Founder assessment, negotiation, and LP trust-building. The irreducible human element." },
            ].map((item) => (
              <div key={item.title}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", color: "#0d0d1a" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section style={{ padding: "3.5rem 2.5rem", background: "#fff", borderTop: "1px solid #efefea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#aaa", textTransform: "uppercase", fontWeight: 600, marginBottom: "1.5rem", textAlign: "center" }}>
            Research partners
          </div>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            {["Emerging VC Fellows", "ABVCAP", "AWS", "FM/Derraik"].map((name) => (
              <span key={name} style={{ fontSize: "0.9rem", fontWeight: 700, color: "#bbb", letterSpacing: "0.06em" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "3rem 2.5rem", background: "#0a0f2e", color: "rgba(255,255,255,0.45)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg viewBox="0 0 816.954 567.512" width="24" height="17" style={{ opacity: 0.6 }} aria-hidden="true">
              <path fill="#1F3C89" d="M409.578 0 L327.727 141.773 L489.176 141.703 L652.891 425.262 L816.578 425.262 L571.063 0.012 L423.035 0 Z"/>
              <path fill="#fff" d="M245.867 0.012 L164.027 141.77 L245.844 283.477 L409.57 0.012 Z"/>
              <path fill="#1F3C89" d="M0.328 141.766 L245.852 567.02 L407.336 567.023 L489.188 425.25 L327.738 425.324 L164.023 141.766 Z"/>
              <path fill="#fff" d="M407.344 567.016 L571.043 567.016 L652.891 425.258 L571.07 283.551 Z"/>
            </svg>
            <span style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
              Emerging Venture Capital Fellows
            </span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: 12 }}>
            {[["LinkedIn", "https://www.linkedin.com/company/emerging-venture-capital-fellows"], ["Instagram", "https://www.instagram.com/emergingvcfellows/"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <div style={{ fontSize: 12 }}>© 2026 EVCF · São Paulo, Brazil</div>
        </div>
      </footer>

    </div>
  );
}
