import { useState } from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  { label: "VC Radar", to: "/community/vc-radar" },
  { label: "VC Tech Stack", to: "/community/vc-tech-stack" },
];

export default function ContentDropdown({ dark = true }) {
  const [open, setOpen] = useState(false);
  const textColor = dark ? "rgba(255,255,255,0.6)" : "#0d0d1a";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span style={{
        fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
        color: textColor, textTransform: "uppercase",
        cursor: "default", display: "flex", alignItems: "center", gap: 4,
      }}>
        Conteúdo
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
          paddingTop: 14, zIndex: 200,
        }}>
          <div style={{
            background: "#eceae5", borderRadius: 6, padding: "0.4rem 0",
            minWidth: 190, boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}>
            {ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  display: "block", padding: "0.7rem 1.25rem",
                  fontSize: 14, fontWeight: 500, color: "#0d0d1a",
                  textDecoration: "none", textTransform: "none", letterSpacing: 0,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
