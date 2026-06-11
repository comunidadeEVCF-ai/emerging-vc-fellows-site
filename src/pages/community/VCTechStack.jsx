const NAV_LINKS = [["Home", "/"], ["Community", "/community"], ["Events", "/events"], ["Membership", "https://criteriosevcf.carrd.co/"]];

const Logo = () => (
  <svg viewBox="0 0 816.954 567.512" width="32" height="22" aria-hidden="true">
    <path fill="#1F3C89" d="M409.578 0 L327.727 141.773 L489.176 141.703 L652.891 425.262 L816.578 425.262 L571.063 0.012 L423.035 0 Z"/>
    <path fill="#232856" d="M245.867 0.012 L164.027 141.77 L245.844 283.477 L409.57 0.012 Z"/>
    <path fill="#1F3C89" d="M0.328 141.766 L245.852 567.02 L407.336 567.023 L489.188 425.25 L327.738 425.324 L164.023 141.766 Z"/>
    <path fill="#232856" d="M407.344 567.016 L571.043 567.016 L652.891 425.258 L571.07 283.551 Z"/>
  </svg>
);

const FooterLogo = () => (
  <svg viewBox="0 0 816.954 567.512" width="24" height="17" style={{ opacity: 0.6 }} aria-hidden="true">
    <path fill="#1F3C89" d="M409.578 0 L327.727 141.773 L489.176 141.703 L652.891 425.262 L816.578 425.262 L571.063 0.012 L423.035 0 Z"/>
    <path fill="#fff" d="M245.867 0.012 L164.027 141.77 L245.844 283.477 L409.57 0.012 Z"/>
    <path fill="#1F3C89" d="M0.328 141.766 L245.852 567.02 L407.336 567.023 L489.188 425.25 L327.738 425.324 L164.023 141.766 Z"/>
    <path fill="#fff" d="M407.344 567.016 L571.043 567.016 L652.891 425.258 L571.07 283.551 Z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function VCTechStack() {
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
          <Logo />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#0d0d1a", textTransform: "uppercase" }}>
            Emerging
          </span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: "#0d0d1a", textTransform: "uppercase",
              ...(label === "Membership" ? { background: "#1F3C89", color: "#fff", padding: "8px 20px", borderRadius: 2 } : {})
            }}>{label}{label === "Membership" ? " →" : ""}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 64, minHeight: 420,
        background: "#0d2233",
        display: "flex", alignItems: "flex-end",
        position: "relative", overflow: "hidden",
      }}>
        {/* Teal hex pattern — distinct from VC Radar blue */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%2300bcd4' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }} />
        {/* Large teal hex accent top-right, echoing the cover */}
        <div style={{
          position: "absolute", top: -60, right: -60, width: 340, height: 340,
          background: "rgba(0,150,180,0.12)", borderRadius: "50%",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to bottom, transparent, #0d2233)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "relative", zIndex: 2,
          padding: "4rem 2.5rem 4rem", maxWidth: 1100, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "flex-end",
        }}>
          <div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem" }}>
              <a href="/community" style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
                Community
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
              <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontWeight: 600 }}>
                VC Tech Stack
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em",
              margin: "0 0 1.25rem",
            }}>
              VC Tech Stack<br />
              <span style={{ color: "#3db8cc", fontStyle: "italic", fontWeight: 700 }}>Venture Capital</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
              Mapping the tools and technologies that power Brazil's leading venture capital firms —
              from deal flow to portfolio management.
            </p>
          </div>

          {/* Cover mockup */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/assets/capa_mockup.png"
              alt="VC Tech Stack Report Cover"
              style={{
                width: 240, height: "auto", borderRadius: 4,
                boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
                transform: "perspective(800px) rotateY(-6deg) rotateX(3deg)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              What tools are VCs actually using?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The VC Tech Stack Report 2023 is now available for download. Its goal is to identify
              the main tools that make up the tech stack of Brazilian VC managers and evaluate how
              well they align with the processes carried out by each firm.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              From sourcing and due diligence to portfolio monitoring and LP reporting — this report
              maps where technology is being adopted, where gaps exist, and where the industry
              is heading.
            </p>
            <a
              href="https://drive.google.com/file/d/1tpmUSldOstyAXHSRFlrlP2sDHou25mdx/view"
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
              <DownloadIcon />
              Download Report 2023
            </a>
          </div>

          {/* What it covers */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              What the report covers
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "#e8e8e3", border: "1.5px solid #e8e8e3", borderRadius: 4, overflow: "hidden" }}>
              {[
                { icon: "⬡", label: "Deal flow & sourcing", body: "Tools used to identify and track new investment opportunities across the ecosystem." },
                { icon: "⬡", label: "Due diligence", body: "How managers structure research, data rooms, and analysis workflows." },
                { icon: "⬡", label: "Portfolio monitoring", body: "Platforms and processes for tracking portfolio company performance over time." },
                { icon: "⬡", label: "LP communication", body: "Reporting cadence, tools, and formats used for investor relations." },
                { icon: "⬡", label: "Team & operations", body: "Internal tools for collaboration, knowledge management, and decision-making." },
              ].map((item) => (
                <div key={item.label} style={{ background: "#fff", padding: "1.25rem 1.75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", color: "#3db8cc", marginTop: 2, flexShrink: 0 }}>—</span>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0d0d1a", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: "3.5rem 2.5rem", background: "#fff", borderTop: "1px solid #efefea", borderBottom: "1px solid #efefea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#aaa", textTransform: "uppercase", fontWeight: 600, marginBottom: "2rem", textAlign: "center" }}>
            Report partners
          </div>
          <div style={{ display: "flex", gap: "3rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", color: "#bbb", textTransform: "uppercase", marginBottom: 6 }}>Initiative Partner</div>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#03363d", letterSpacing: "-0.01em" }}>Zendesk</span>
            </div>
            <div style={{ width: 1, height: 36, background: "#efefea" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", color: "#bbb", textTransform: "uppercase", marginBottom: 6 }}>Shared Vision Partners</div>
              <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a2e" }}>FM/Derraik</span>
                <span style={{ fontSize: "1rem", fontWeight: 900, color: "#ff6200" }}>aws</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "3rem 2.5rem", background: "#0a0f2e", color: "rgba(255,255,255,0.45)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FooterLogo />
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
