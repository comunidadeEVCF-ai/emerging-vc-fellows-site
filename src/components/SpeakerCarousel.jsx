import { useState } from "react";

export default function SpeakerCarousel({ speakers }) {
  const [paused, setPaused] = useState(false);
  const items = [...speakers, ...speakers];

  return (
    <div style={{ overflow: "hidden" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <style>{`
        @keyframes speaker-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: "flex", gap: "1.5rem", width: "max-content",
        animation: "speaker-marquee 36s linear infinite",
        animationPlayState: paused ? "paused" : "running",
      }}>
        {items.map((speaker, i) => (
          <div key={`${speaker.name}-${i}`} style={{ width: 220, flexShrink: 0, position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: 2 }}>
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
  );
}
