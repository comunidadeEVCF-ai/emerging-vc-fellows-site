import { useEffect, useRef } from "react";
import ContentDropdown from "../components/ContentDropdown";

const EVCFIcon = ({ size = 48, opacity = 1, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816.954 567.512"
    width={size} height={size * (567.512 / 816.954)}
    className={className} style={{ opacity }} aria-hidden="true">
    <path fill="#1F3C89" d="M 409.578125 0 L 327.726562 141.773438 L 489.175781 141.703125 L 652.890625 425.261719 L 816.578125 425.261719 L 571.0625 0.0117188 L 423.035156 0 Z"/>
    <path fill="#232856" d="M 245.867188 0.0117188 L 164.027344 141.769531 L 245.84375 283.476562 L 409.570312 0.0117188 Z"/>
    <path fill="#1F3C89" d="M 0.328125 141.765625 L 245.851562 567.019531 L 407.335938 567.023438 L 489.1875 425.25 L 327.738281 425.324219 L 164.023438 141.765625 Z"/>
    <path fill="#232856" d="M 407.34375 567.015625 L 571.042969 567.015625 L 652.890625 425.257812 L 571.070312 283.550781 Z"/>
  </svg>
);

export default function Index() {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => el.style.setProperty("--parallax-y", `${window.scrollY * 0.3}px`);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fafaf8", color: "#0d0d1a" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: 64, background: "rgba(10,15,46,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <EVCFIcon size={36} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>Emerging</span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Home", "/"], ["Community", "/community"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textDecoration: "none", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>{label}</a>
          ))}
          <ContentDropdown dark />
          {[["Events", "/events"], ["Membership", "https://criteriosevcf.carrd.co/"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textDecoration: "none", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", ...(label === "Membership" ? { border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "7px 18px", borderRadius: 20 } : {}) }}>{label}{label === "Membership" ? " →" : ""}</a>
          ))}
        </div>
      </nav>

      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden", paddingTop: 64, background: "#0a0f2e" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", transform: "translateY(var(--parallax-y, 0))", pointerEvents: "none" }}>
          <EVCFIcon size={900} opacity={0.07} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to bottom, transparent, #0a0f2e)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 2.5rem 5rem", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", fontSize: 11, letterSpacing: "0.16em", fontWeight: 600, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
            <span>Fellowship</span><span style={{ color: "rgba(255,255,255,0.2)" }}>·</span><span>Brazil</span><span style={{ color: "rgba(255,255,255,0.2)" }}>·</span><span>Latam</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 1.5rem" }}>The VC community<br />in Brazil.</h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.6)", maxWidth: 560, lineHeight: 1.7, margin: "0 0 2.5rem" }}>A curated community for venture capital professionals — built around real conversations, high-quality events, and a network that reflects the best of the ecosystem.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://criteriosevcf.carrd.co/" style={{ background: "#1F3C89", color: "#fff", padding: "14px 32px", borderRadius: 20, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Apply for Membership →</a>
            <a href="#community" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "14px 32px", borderRadius: 20, textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>How it works</a>
          </div>
        </div>
      </section>

      <section id="community" style={{ padding: "7rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600 }}>01 — The Fellowship</span>
            <span style={{ fontSize: 11, color: "#ccc" }}>EST. SÃO PAULO</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}>How the community works.</h2>
          <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: 600, lineHeight: 1.7, marginBottom: "4rem" }}>Real networking, deep conversations, and access to the Managing Partners shaping VC in Brazil — through a curated quarterly agenda of in-person and online events.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5px", background: "#e8e8e3", border: "1.5px solid #e8e8e3", borderRadius: 4, overflow: "hidden" }}>
            {[
              { n: "01", title: "Real networking", body: "Meaningful relationships with professionals who live VC full time — people who understand the work, the pace, and the stakes." },
              { n: "02", title: "Deep conversations", body: "From the path to Partner to liquidity scenarios — no surface-level talk. Discussions that sharpen your thinking on what actually matters in the industry." },
              { n: "03", title: "Access to big names", body: "Close interaction with Managing Partners of Brazil's most relevant funds, plus exclusive 1:1 mentorship sessions with senior leaders in the ecosystem." },
              { n: "04", title: "Exclusive agenda", body: "Quarterly events built around learning, inspiration, and strategic connection — presential and online, designed around your professional development." },
            ].map((card) => (
              <div key={card.n} style={{ background: "#fff", padding: "2.5rem 2rem" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#1F3C89", marginBottom: "1rem", textTransform: "uppercase" }}>{card.n}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.01em" }}>{card.title}</h3>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.75, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 2.5rem", background: "#f0f0eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>Who can join</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>A selective fit.</h2>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7 }}>Applications open for professionals who are already doing the work — not aspiring to it.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {["Works full time at a VC or CVC firm", "Analyst, Associate, or Principal — 3 to 10 years in the ecosystem", "Selected by profile — quality over volume"].map((item) => (
              <div key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "#1F3C89", fontWeight: 700, fontSize: "1.1rem", marginTop: 2 }}>—</span>
                <span style={{ fontSize: "1rem", color: "#333", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
            <a href="https://criteriosevcf.carrd.co/" style={{ display: "inline-block", background: "#1F3C89", color: "#fff", padding: "14px 32px", borderRadius: 20, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "1rem", alignSelf: "flex-start" }}>Apply now →</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "7rem 2.5rem", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>03 — Past Events</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1 }}>Who has been through Emerging.</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", maxWidth: 520, lineHeight: 1.7, marginBottom: "3.5rem" }}>The speakers say more about the community than any description could.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Rafael Serson", role: "Partner", fund: "Cloud 9", quarter: "Q1 · 2026", img: "/assets/01_rafael_serson.jpg" },
              { name: "Shu Nyatta", role: "Managing Partner", fund: "Bicycle Capital", quarter: "Q1 · 2026", img: "/assets/02_shu_nyatta.jpg" },
              { name: "Eric Acher", role: "Founding Partner", fund: "Monashees", quarter: "Q4 · 2025", img: "/assets/03_eric_acher.jpg" },
              { name: "Luca Tajra", role: "Vice President", fund: "Warburg Pincus", quarter: "Q2 · 2026", img: "/assets/04_luca_tajra.jpg" },
              { name: "Florian Hagenbuch", role: "Co-founder & Partner", fund: "Monashees", quarter: "Q4 · 2025", img: "/assets/05_florian_hagenbuch.jpg" },
            ].map((speaker) => (
              <div key={speaker.name} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: 2 }}>
                <img src={speaker.img} alt={speaker.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,46,0.92) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.25rem 1rem" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 6 }}>{speaker.quarter}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 3 }}>{speaker.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{speaker.role} · {speaker.fund}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", background: "#fff", borderTop: "1px solid #efefea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#888", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>04 — Partners</div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1 }}>Our partners.</h2>
          <p style={{ fontSize: "1rem", color: "#666", maxWidth: 480, lineHeight: 1.7, marginBottom: "3rem" }}>Organizations that believe in the value of a curated VC community.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "#efefea", border: "1px solid #efefea", borderRadius: 4, overflow: "hidden", marginBottom: "3rem" }}>
            {[
              { label: "FM/Derraik", src: "/assets/FM_Derraik (1).png" },
              { label: "ABVCAP", src: "/assets/images.jpg" },
              { label: "AWS", src: "/assets/Descubre-el-Cloud-de-AWS.png" },
              { label: "Marcus Valverde", src: "/assets/marcus_valverde_sociedade_de_advogados_logo (1).jpeg" },
            ].map(({ label, src }) => (
              <div key={label} style={{ background: "#fff", padding: "2.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 100 }}>
                <img src={src} alt={label} height={32} style={{ objectFit: "contain", maxWidth: 140 }} />
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #efefea", paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#666", maxWidth: 420, lineHeight: 1.6, margin: 0 }}>Want to reach Brazil's VC professionals? Learn how a partnership with Emerging works.</p>
            <a href="mailto:comunidade@emergingvcfellows.com" style={{ border: "1px solid #0a0f2e", color: "#0a0f2e", padding: "12px 28px", borderRadius: 20, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Become a partner →</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "3rem 2.5rem", background: "#0a0f2e", color: "rgba(255,255,255,0.45)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <EVCFIcon size={28} opacity={0.7} />
            <span style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Emerging Venture Capital Fellows</span>
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
