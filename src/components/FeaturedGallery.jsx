import { useEffect, useRef, useState } from "react";

export default function FeaturedGallery({ photos }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, photos.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, photos.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <button
        onClick={() => setLightboxOpen(true)}
        style={{
          position: "relative", display: "block", width: "100%", border: "none", padding: 0, cursor: "pointer",
          borderRadius: 4, overflow: "hidden", aspectRatio: "16/8", background: "#0a0f2e",
        }}
      >
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.caption}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              opacity: i === active ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          />
        ))}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,46,0.75) 0%, transparent 45%)" }} />
        {photos[active].caption && (
          <div style={{
            position: "absolute", bottom: 18, left: 20,
            fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)",
          }}>
            {photos[active].caption}
          </div>
        )}
      </button>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.75rem" }}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setActive(i)}
            aria-label={`View ${photo.caption || "photo"}`}
            style={{
              flex: 1, border: "none", padding: 0, cursor: "pointer",
              borderRadius: 3, overflow: "hidden", aspectRatio: "4/3",
              opacity: i === active ? 1 : 0.45,
              outline: i === active ? "2px solid #1F3C89" : "none",
              outlineOffset: 2,
              transition: "opacity 0.25s ease",
            }}
          >
            <img src={photo.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(8,13,31,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "3rem",
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", lineHeight: 1 }}
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
            aria-label="Previous"
            style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 40, cursor: "pointer" }}
          >
            ‹
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].caption}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90%", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
            aria-label="Next"
            style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 40, cursor: "pointer" }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
