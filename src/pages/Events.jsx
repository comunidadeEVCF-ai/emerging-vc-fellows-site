import ContentDropdown from "../components/ContentDropdown";
import FeaturedGallery from "../components/FeaturedGallery";

const NAV_LINKS_LEFT = [["Home", "/"]];
const NAV_LINKS_RIGHT = [["Events", "/events"], ["Membership", "https://criteriosevcf.carrd.co/"]];

const ARCHIVE_PHOTOS = [
  { src: "/assets/evento (1)- site.png", caption: "Q4 2025 · São Paulo" },
  { src: "/assets/evento(2) site.png", caption: "Q4 2025 · São Paulo" },
  { src: "/assets/05_florian_hagenbuch.jpg", caption: "Florian Hagenbuch" },
  { src: "/assets/evento (4) site.png", caption: "Q1 2026 · São Paulo" },
  { src: "/assets/evento 5 .png", caption: "Q1 2026 · São Paulo" },
];

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

const UPCOMING = [
  {
    type: "SOCIAL",
    filled: false,
    date: "Aug 19",
    day: "WEDNESDAY",
    speaker: null,
    topic: "Bowling with EVCF",
    fund: null,
    location: "São Paulo · Members only",
    register: "https://criteriosevcf.carrd.co/",
  },
  {
    type: "LUNCH",
    filled: false,
    date: "Sep 17",
    day: "THURSDAY",
    speaker: "Allen Taylor",
    topic: "",
    fund: null,
    location: "São Paulo · Members only",
    register: "https://criteriosevcf.carrd.co/",
  },
];

const HEX_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`;
const HEX_PATTERN_DARK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%231F3C89' stroke-width='1.5'/%3E%3C/svg%3E")`;

export default function Events() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fafaf8", color: "#0d0d1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: 64,
        background: "rgba(10,15,46,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Logo />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>
            Emerging
          </span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS_LEFT.map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
            }}>{label}</a>
          ))}
          <ContentDropdown dark />
          {NAV_LINKS_RIGHT.map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: label === "Events" ? "#fff" : "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
              ...(label === "Membership" ? {
                border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
                padding: "7px 18px", borderRadius: 20,
              } : {})
            }}>{label}{label === "Membership" ? " →" : ""}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 64, minHeight: "70vh",
        background: "#080d1f",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: HEX_PATTERN, backgroundSize: "60px 52px",
        }} />

        <div style={{ position: "relative", zIndex: 2, padding: "5rem 2.5rem 0", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <circle cx="7" cy="7" r="2" fill="rgba(255,255,255,0.3)"/>
            </svg>
            <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: 600 }}>
              Agenda · 2026
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.0, letterSpacing: "-0.03em",
            margin: "0 0 1.5rem", maxWidth: 700,
          }}>
            What's coming next.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
            Small group. Real talk.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: "relative", zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 2.5rem",
          display: "flex", justifyContent: "space-between",
          maxWidth: "100%",
        }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", fontWeight: 600 }}>Agenda</span>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", fontWeight: 600 }}>Est. São Paulo</span>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{
        padding: "5rem 2.5rem",
        background: "#f4f4f0",
        position: "relative", overflow: "hidden",
      }}>
        {/* Light hex pattern background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: HEX_PATTERN_DARK, backgroundSize: "60px 52px",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", color: "#1F3C89", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.75rem" }}>
            Q3 · 2026
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 3rem", lineHeight: 1.05 }}>
            Upcoming events this quarter.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {UPCOMING.map((ev) => (
              <div key={ev.date} style={{
                background: "#fff", border: "1px solid #e4e4df",
                borderRadius: 4, padding: "1.75rem",
                display: "flex", flexDirection: "column", gap: 0,
              }}>
                {/* Type badge + icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: ev.filled ? "#fff" : "#1F3C89",
                    background: ev.filled ? "#1F3C89" : "transparent",
                    border: ev.filled ? "none" : "1px solid #1F3C89",
                    padding: "4px 12px", borderRadius: 20,
                  }}>{ev.type}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d0d0cc" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                </div>

                {/* Date */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div style={{ fontSize: "clamp(2.4rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#0a0f2e" }}>
                    {ev.date}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#aaa", textTransform: "uppercase", marginTop: 4 }}>
                    {ev.day}
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #efefea", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
                  {ev.speaker ? (
                    <>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0f2e", marginBottom: 4 }}>{ev.speaker}</div>
                      {(ev.topic || ev.fund) && (
                        <div style={{ fontSize: "0.88rem", color: "#666" }}>{ev.topic}{ev.fund ? ` · ${ev.fund}` : ""}</div>
                      )}
                    </>
                  ) : (
                    <div style={{ fontSize: "0.98rem", color: "#555", lineHeight: 1.6, fontStyle: "italic" }}>
                      {ev.topic}
                    </div>
                  )}
                  <div style={{ fontSize: "0.82rem", color: "#aaa", marginTop: 6 }}>{ev.location}</div>
                </div>

                <a href={ev.register} style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#1F3C89", color: "#fff",
                  padding: "12px 20px", borderRadius: 20,
                  textDecoration: "none", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  alignSelf: "flex-start", marginTop: "auto",
                }}>
                  Register →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHIVE ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
            Archive
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 0.75rem", lineHeight: 1.05 }}>
            From previous editions.
          </h2>
          <p style={{ fontSize: "1rem", color: "#888", margin: "0 0 3rem" }}>
            A look at the conversations that have shaped the community.
          </p>

          <FeaturedGallery photos={ARCHIVE_PHOTOS} />
        </div>
      </section>

      {/* ── CTA ── no Get in Touch button */}
      <section style={{
        padding: "7rem 2.5rem",
        background: "#080d1f",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07,
          backgroundImage: HEX_PATTERN, backgroundSize: "60px 52px",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <h2 style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em",
            margin: "0 0 1.5rem",
          }}>
            Want to join the next event?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: 480 }}>
            Events are open to members and selected guests. Apply for membership to join our quarterly gatherings.
          </p>
          <a href="https://criteriosevcf.carrd.co/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1F3C89", color: "#fff",
            padding: "14px 32px", borderRadius: 20,
            textDecoration: "none", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Apply for Membership →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "3rem 2.5rem", background: "#080d1f", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
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
