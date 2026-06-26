import { useEffect, useState } from "react";

export default function ArchiveGallery({ photos }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, photos.length]);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setOpenIndex(i)}
            style={{
              border: "none", padding: 0, cursor: "pointer",
              borderRadius: 3, overflow: "hidden", aspectRatio: "4/3",
              background: "none",
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          onClick={() => setOpenIndex(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(8,13,31,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "3rem",
          }}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            style={{
              position: "absolute", top: 24, right: 24, background: "none", border: "none",
              color: "#fff", fontSize: 28, cursor: "pointer", lineHeight: 1,
            }}
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setOpenIndex((openIndex - 1 + photos.length) % photos.length); }}
            aria-label="Previous"
            style={{
              position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 40, cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].caption}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90%", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setOpenIndex((openIndex + 1) % photos.length); }}
            aria-label="Next"
            style={{
              position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 40, cursor: "pointer",
            }}
          >
            ›
          </button>

          {photos[openIndex].caption && (
            <div style={{
              position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center",
              color: "rgba(255,255,255,0.6)", fontSize: 13, letterSpacing: "0.04em",
            }}>
              {photos[openIndex].caption}
            </div>
          )}
        </div>
      )}
    </>
  );
}
