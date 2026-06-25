import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ── EVCF Real Logo Icon (extracted from ICON-COLOR.pdf) ──────────────────────
const EVCFIcon = ({ size = 48, opacity = 1, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 816.954 567.512"
    width={size}
    height={size * (567.512 / 816.954)}
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      fill="#1F3C89"
      d="M 409.578125 0 L 327.726562 141.773438 L 489.175781 141.703125 L 652.890625 425.261719 L 816.578125 425.261719 L 571.0625 0.0117188 L 423.035156 0 Z"
    />
    <path
      fill="#232856"
      d="M 245.867188 0.0117188 L 164.027344 141.769531 L 245.84375 283.476562 L 409.570312 0.0117188 Z"
    />
    <path
      fill="#1F3C89"
      d="M 0.328125 141.765625 L 245.851562 567.019531 L 407.335938 567.023438 L 489.1875 425.25 L 327.738281 425.324219 L 164.023438 141.765625 Z"
    />
    <path
      fill="#232856"
      d="M 407.34375 567.015625 L 571.042969 567.015625 L 652.890625 425.257812 L 571.070312 283.550781 Z"
    />
  </svg>
);

// ── Partner logos ─────────────────────────────────────────────────────────────
const AWSLogo = ({ height = 32 }) => (
  <svg height={height} viewBox="0 0 188.72615 125.89004" xmlns="http://www.w3.org/2000/svg" aria-label="Amazon Web Services">
    <g transform="translate(-9.7006735,-78.530852)">
      <path style={{fill:"#ff6200"}} d="m 10.521436,158.58651 c -0.8639499,0.68218 -1.0458582,1.81869 -0.5456504,3.41042 0.4546904,1.40966 1.5232644,3.15991 3.2056994,5.25165 6.774981,8.36685 14.846046,15.32363 24.213078,20.87116 9.367011,5.54757 19.393561,9.63973 30.07919,12.27696 10.730944,2.68292 21.68927,4.02419 32.874997,4.02419 14.32341,0 27.96469,-2.09139 40.92381,-6.27503 12.95911,-4.1379 23.78106,-9.95814 32.46635,-17.46073 3.04626,-2.68254 4.56962,-4.81967 4.56962,-6.41138 0,-0.59114 -0.25004,-1.18228 -0.75013,-1.7734 -0.68217,-0.68173 -1.50071,-0.90913 -2.45559,-0.68173 -0.95487,0.22696 -2.29613,0.79544 -4.02421,1.70499 -8.32111,4.3653 -18.46089,7.84367 -30.41984,10.4356 -11.9132,2.63719 -24.34953,3.9558 -37.30866,3.9558 -16.051079,0 -31.556792,-2.18243 -46.516673,-6.54773 -14.959881,-4.36528 -28.21475,-11.18571 -39.764223,-20.46157 -1.682328,-1.3186 -3.046678,-2.1602 -4.092375,-2.52394 -1.000341,-0.36374 -1.818827,-0.29535 -2.455393,0.20474 z"/>
      <path style={{fill:"#ff6200"}} d="m 162.07277,162.00078 c -0.95486,0.90957 -1.20492,1.86444 -0.75012,2.86499 0.31841,0.72745 0.93222,1.13648 1.84178,1.22752 0.90913,0.13638 2.20509,0.0454 3.88743,-0.27267 2.72824,-0.59113 5.57018,-1.00058 8.52582,-1.22797 2.95565,-0.1816 5.52493,-0.1364 7.70736,0.1364 2.18285,0.31842 3.54677,0.8642 4.0926,1.63697 0.81852,1.22797 0.52274,3.81943 -0.88691,7.77571 -1.36391,3.9558 -3.22837,7.79793 -5.59286,11.52678 -0.90957,1.50025 -1.45496,2.68251 -1.63703,3.54677 -0.18162,0.86382 0.0458,1.5913 0.68214,2.18242 0.40904,0.40906 0.86384,0.61379 1.3639,0.61379 1.31907,0 3.22879,-1.15961 5.72964,-3.47837 4.50166,-3.91052 7.66161,-8.54851 9.48075,-13.91399 1.00017,-2.77399 1.61393,-5.6839 1.84133,-8.73054 0.2274,-3.04617 -0.1137,-5.22904 -1.02325,-6.54765 -0.86383,-1.27329 -2.77356,-2.31919 -5.7292,-3.13728 -2.90991,-0.81853 -5.84292,-1.228 -8.79856,-1.228 -5.77494,0 -11.2541,1.36433 -16.4375,4.0926 -1.9097,1.0459 -3.342,2.02342 -4.29732,2.93255 z"/>
      <path style={{fill:"#161d26"}} d="m 38.073132,137.60541 c -9.649207,0 -16.189218,-6.86166 -16.189218,-17.04692 0,-12.32954 9.649195,-20.0489 24.873493,-20.0489 2.68034,0 4.288537,0.10721 5.575101,0.42885 v -1.286561 c 0,-7.076077 -2.465907,-10.399692 -7.612154,-10.399692 -4.074104,0 -6.968866,2.358694 -8.040998,6.540015 -0.321644,1.28656 -1.072131,1.929836 -2.144263,1.715414 l -9.434784,-1.715414 c -1.286554,-0.214426 -1.82262,-1.072134 -1.500987,-2.358694 2.358696,-9.541988 10.399694,-14.902656 22.085953,-14.902656 13.830522,0 21.121032,7.612148 21.121032,21.871528 v 34.20105 c 0,1.07215 -0.750498,1.82263 -1.715408,1.82263 H 56.19218 c -1.072131,0 -1.715408,-0.64327 -1.92983,-1.82263 l -1.393776,-6.32559 h -0.643287 c -2.573118,6.00396 -7.612144,9.32757 -14.152155,9.32757 z m 5.575091,-10.82855 c 5.682312,0 8.684285,-5.14624 8.684285,-14.68822 v -3.43083 c -1.072142,-0.21443 -2.251485,-0.32165 -3.538049,-0.32165 -7.397721,0 -12.007892,3.9669 -12.007892,10.50691 0,4.8246 2.68034,7.93379 6.861656,7.93379 z"/>
      <path style={{fill:"#161d26"}} d="m 129.74105,79.817412 c -0.7505,0 -1.39378,0.64328 -1.50099,1.28656 l -6.32559,38.275168 h -0.64329 l -7.07607,-38.275168 c -0.10721,-0.64328 -0.75049,-1.28656 -1.50099,-1.28656 h -10.93576 c -0.7505,0 -1.39377,0.64328 -1.50099,1.28656 L 93.074078,119.37914 H 92.430801 L 85.998,81.103972 c -0.107211,-0.64328 -0.750498,-1.28656 -1.500986,-1.28656 h -11.79347 c -1.179353,0 -1.929841,0.857707 -1.608197,2.037054 L 83.746515,135.1395 c 0.214433,0.7505 0.750499,1.28656 1.608209,1.28656 H 98.64918 c 0.750488,0 1.39376,-0.64327 1.50098,-1.28656 l 6.75444,-31.52073 h 0.53606 l 6.75445,31.52073 c 0.10721,0.64329 0.7505,1.28656 1.50098,1.28656 h 13.29446 c 0.85771,0 1.39378,-0.53606 1.6082,-1.28656 l 12.65118,-53.285034 c 0.32164,-1.179347 -0.42886,-2.037054 -1.6082,-2.037054 z"/>
      <path style={{fill:"#161d26"}} d="m 145.03872,119.27192 c -0.10721,-0.96492 0.53606,-1.7154 1.50098,-1.92984 l 9.54199,-1.82262 c 1.07214,-0.21443 1.92984,0.42885 2.03706,1.50099 0.8577,6.11116 3.85967,9.22034 8.89871,9.22034 4.50296,0 7.39772,-2.25147 7.39772,-5.89673 0,-3.2164 -2.03706,-5.46788 -6.32559,-6.4328 l -6.75444,-1.6082 c -10.18528,-2.46591 -15.33151,-7.93379 -15.33151,-16.510858 0,-10.292482 8.36264,-17.26135 20.47775,-17.26135 11.04298,0 18.22627,5.146241 20.79939,15.009869 0.21442,0.857708 -0.42885,1.715414 -1.17935,1.822627 l -10.50691,1.822624 c -0.64327,0.107222 -1.39377,-0.321636 -1.50098,-1.072129 -0.85771,-4.181321 -3.43083,-6.218376 -7.61215,-6.218376 -3.75247,0 -6.43281,2.037055 -6.43281,5.039029 0,2.680331 2.14428,4.717383 6.32559,5.682304 l 7.07609,1.71542 c 10.18526,2.46591 15.00987,7.82658 15.00987,16.72528 0,10.72134 -9.00592,18.54791 -21.33546,18.54791 -12.43675,0 -20.90661,-7.18329 -22.08595,-18.33349 z"/>
    </g>
  </svg>
);

// ABVCAP has not provided a logo file yet — text placeholder until one is uploaded to public/assets
const ABVCAPLogo = ({ height = 36 }) => (
  <div style={{ height, display: "flex", alignItems: "center" }}>
    <span style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: height * 0.5,
      fontWeight: 700,
      letterSpacing: "0.02em",
      color: "#1a1a2e",
    }}>ABVCAP</span>
  </div>
);

const MarcusValverdeLogo = ({ height = 36 }) => (
  <img
    src="/assets/marcus_valverde_sociedade_de_advogados_logo (1).jpeg"
    alt="Marcus Valverde Sociedade de Advogados"
    height={height}
    style={{ objectFit: "contain" }}
  />
);

// DM Derraik text-based logo (no image provided)
const DMDeraikLogo = ({ height = 36 }) => (
  <div style={{ height, display: "flex", alignItems: "center" }}>
    <span style={{
      fontFamily: "'Georgia', serif",
      fontSize: height * 0.55,
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: "#1a1a2e",
    }}>DM/Derraik</span>
  </div>
);

// ── Resource card with hover reveal ────────────────────────────────────────────
const ResourceCard = ({ to, eyebrow, title, body, img }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", display: "block", textDecoration: "none",
        borderRadius: 4, overflow: "hidden", aspectRatio: "16/10",
        border: "1px solid #e8e8e3",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(10,15,46,0.9) 0%, rgba(10,15,46,0.55) 45%, rgba(10,15,46,0.15) 100%)",
      }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: 6 }}>
          {eyebrow}
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>
          {title}
        </div>
        <p style={{
          fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "0 0 0.75rem",
          maxWidth: 420,
        }}>
          {body}
        </p>
        <span style={{
          fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase",
          opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}>
          View {title} →
        </span>
      </div>
    </Link>
  );
};

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Index() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.setProperty("--parallax-y", `${y * 0.3}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <EVCFIcon size={36} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>
            Emerging
          </span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Home", "/"], ["Community", "/community"], ["Events", "/events"], ["Membership", "https://criteriosevcf.carrd.co/"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
              ...(label === "Membership" ? {
                border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
                padding: "7px 18px", borderRadius: 20,
              } : {})
            }}>{label}{label === "Membership" ? " →" : ""}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", position: "relative", overflow: "hidden",
        paddingTop: 64,
        background: "#0a0f2e",
      }}>
        {/* Background: real EVCF icon, large, faded */}
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
          transform: "translateY(var(--parallax-y, 0))",
          pointerEvents: "none",
        }}>
          <EVCFIcon
            size={Math.min(900, typeof window !== "undefined" ? window.innerWidth * 1.1 : 900)}
            opacity={0.07}
          />
        </div>

        {/* Gradient overlay bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
          background: "linear-gradient(to bottom, transparent, #0a0f2e)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 2.5rem 5rem", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          {/* Eyebrow */}
          <div style={{
            display: "flex", gap: "1rem", marginBottom: "2rem",
            fontSize: 11, letterSpacing: "0.16em", fontWeight: 600,
            color: "rgba(255,255,255,0.45)", textTransform: "uppercase",
          }}>
            <span>Fellowship</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span>Brazil</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span>Latam</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em",
            margin: "0 0 1.5rem",
          }}>
            The VC community<br />in Brazil.
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            maxWidth: 560, lineHeight: 1.7, margin: "0 0 2.5rem",
          }}>
            A curated community for venture capital professionals — built around real conversations,
            high-quality events, and a network that reflects the best of the ecosystem.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://criteriosevcf.carrd.co/" style={{
              background: "#1F3C89", color: "#fff",
              padding: "14px 32px", borderRadius: 2,
              textDecoration: "none", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>Apply for Membership →</a>
            <a href="#community" style={{
              border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)",
              padding: "14px 32px", borderRadius: 2,
              textDecoration: "none", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>How it works</a>
          </div>
        </div>
      </section>

      {/* ── 01 FELLOWSHIP ── */}
      <section id="community" style={{ padding: "7rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600 }}>
              01 — The Fellowship
            </span>
            <span style={{ fontSize: 11, color: "#ccc" }}>EST. SÃO PAULO</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}>
            How the community works.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: 600, lineHeight: 1.7, marginBottom: "4rem" }}>
            Real networking, deep conversations, and access to the Managing Partners shaping VC in Brazil —
            through a curated quarterly agenda of in-person and online events.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5px", background: "#e8e8e3",
            border: "1.5px solid #e8e8e3", borderRadius: 4, overflow: "hidden",
          }}>
            {[
              {
                n: "01", title: "Real networking",
                body: "Meaningful relationships with professionals who live VC full time — people who understand the work, the pace, and the stakes.",
              },
              {
                n: "02", title: "Deep conversations",
                body: "From the path to Partner to liquidity scenarios — no surface-level talk. Discussions that sharpen your thinking on what actually matters in the industry.",
              },
              {
                n: "03", title: "Access to big names",
                body: "Close interaction with Managing Partners of Brazil's most relevant funds, plus exclusive 1:1 mentorship sessions with senior leaders in the ecosystem.",
              },
              {
                n: "04", title: "Exclusive agenda",
                body: "Quarterly events built around learning, inspiration, and strategic connection — presential and online, designed around your professional development.",
              },
            ].map((card) => (
              <div key={card.n} style={{ background: "#fff", padding: "2.5rem 2rem" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#1F3C89", marginBottom: "1rem", textTransform: "uppercase" }}>
                  {card.n}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 COMMUNITY TOOLS ── */}
      <section style={{ padding: "0 2.5rem 7rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
            02 — Community Tools
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}>
            Resources built for the community.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: 600, lineHeight: 1.7, marginBottom: "3rem" }}>
            Two living resources curated by Emerging members — explore the tools VCs actually use and who's investing in what.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <ResourceCard
              to="/community/vc-tech-stack"
              eyebrow="Resource"
              title="VC Tech Stack"
              body="A curated map of the tools and platforms VC teams in Brazil rely on day to day."
              img="/assets/capa_mockup (1).png"
            />
            <ResourceCard
              to="/community/vc-radar"
              eyebrow="Resource"
              title="VC Radar"
              body="A live radar of who's investing in what across the Brazilian and Latam ecosystem."
              img="/assets/capa-radarvc (1).png"
            />
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ── */}
      <section style={{ padding: "5rem 2.5rem", background: "#f0f0eb", color: "#0d0d1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>
              Who can join
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              A selective fit.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7 }}>
              Applications open for professionals who are already doing the work — not aspiring to it.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              "Works full time at a VC or CVC firm",
              "Analyst, Associate, or Principal — 3 to 10 years in the ecosystem",
              "Selected by profile — quality over volume",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "#1F3C89", fontWeight: 700, fontSize: "1.1rem", marginTop: 2 }}>—</span>
                <span style={{ fontSize: "1rem", color: "#333", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: "1rem" }}>
              <a href="https://criteriosevcf.carrd.co/" style={{
                display: "inline-block", background: "#1F3C89", color: "#fff",
                padding: "14px 32px", borderRadius: 2,
                textDecoration: "none", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>Apply now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS / SPEAKERS ── */}
      <section style={{ padding: "7rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
            03 — Past Events
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1 }}>
            Who has been through Emerging.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#666", maxWidth: 520, lineHeight: 1.7, marginBottom: "3.5rem" }}>
            The speakers say more about the community than any description could.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Rafael Serson", role: "Partner", fund: "Cloud 9", quarter: "Q1 · 2026", img: "/assets/01_rafael_serson.jpg" },
              { name: "Shu Nyatta", role: "Managing Partner", fund: "Bicycle Capital", quarter: "Q1 · 2026", img: "/assets/02_shu_nyatta.jpg" },
              { name: "Eric Acher", role: "Founding Partner", fund: "Monashees", quarter: "Q4 · 2025", img: "/assets/03_eric_acher.jpg" },
              { name: "Luca Tajra", role: "Vice President", fund: "Warburg Pincus", quarter: "Q2 · 2026", img: "/assets/04_luca_tajra.jpg" },
              { name: "Florian Hagenbuch", role: "Co-founder & Partner", fund: "Monashees", quarter: "Q4 · 2025", img: "/assets/05_florian_hagenbuch.jpg" },
            ].map((speaker) => (
              <div key={speaker.name} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: 2 }}>
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,15,46,0.92) 0%, transparent 55%)",
                }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.25rem 1rem" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 6 }}>
                    {speaker.quarter}
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 3 }}>
                    {speaker.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
                    {speaker.role} · {speaker.fund}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff", borderTop: "1px solid #efefea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
            04 — Partners
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1 }}>
            Our partners.
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", maxWidth: 480, lineHeight: 1.7, marginBottom: "3rem" }}>
            Organizations that believe in the value of a curated VC community.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1px", background: "#efefea",
            border: "1px solid #efefea", borderRadius: 4, overflow: "hidden",
            marginBottom: "3rem",
          }}>
            {[
              { label: "FM/Derraik", node: <img src="/assets/FM_Derraik (1).png" alt="FM/Derraik" height={28} style={{ objectFit: "contain" }} /> },
              { label: "ABVCAP", node: <ABVCAPLogo height={28} /> },
              { label: "AWS", node: <AWSLogo height={28} /> },
              { label: "Marcus Valverde", node: <MarcusValverdeLogo height={34} /> },
            ].map(({ label, node }) => (
              <div key={label} style={{
                background: "#fff", padding: "2.5rem 2rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: 100,
              }}>
                {node}
              </div>
            ))}
          </div>

          <div style={{
            borderTop: "1px solid #efefea", paddingTop: "2rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
          }}>
            <p style={{ fontSize: "0.95rem", color: "#666", maxWidth: 420, lineHeight: 1.6, margin: 0 }}>
              Want to reach Brazil's VC professionals? Learn how a partnership with Emerging works.
            </p>
            <a href="mailto:comunidade@emergingvcfellows.com" style={{
              border: "1px solid #0a0f2e", color: "#0a0f2e",
              padding: "12px 28px", borderRadius: 2,
              textDecoration: "none", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>Become a partner →</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "3rem 2.5rem", background: "#0a0f2e", color: "rgba(255,255,255,0.45)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <EVCFIcon size={28} opacity={0.7} />
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
