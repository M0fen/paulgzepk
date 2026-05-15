import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PaulGZ — Reggaetón & Dancehall · Belén // Medellín";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, #1a0000 0%, #000 65%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "#C0C0C0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 48,
            fontSize: 18,
            letterSpacing: 8,
            color: "#666",
            display: "flex",
          }}
        >
          // EPK 2026 — IDENTITY_PROFILE-GZ
        </div>

        <div
          style={{
            position: "absolute",
            top: 40,
            right: 48,
            fontSize: 18,
            letterSpacing: 6,
            color: "#FF0000",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#FF0000",
              boxShadow: "0 0 12px #FF0000",
            }}
          />
          ONLINE
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 220,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>PAUL</span>
          <span
            style={{
              color: "#FF0000",
              textShadow: "0 0 40px rgba(255,0,0,0.7)",
            }}
          >
            GZ
          </span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 36,
            letterSpacing: 18,
            color: "#FFFFFF",
            fontWeight: 700,
          }}
        >
          BELÉN // MEDELLÍN
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 20,
            letterSpacing: 8,
            color: "#888",
          }}
        >
          REGGAETÓN · DANCEHALL
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 48,
            fontSize: 16,
            letterSpacing: 6,
            color: "#666",
            display: "flex",
          }}
        >
          LAT: 06.23°N // LON: -75.62°W // ALT: 1,495m
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 48,
            fontSize: 16,
            letterSpacing: 6,
            color: "#666",
            display: "flex",
          }}
        >
          paulgz.com
        </div>
      </div>
    ),
    { ...size }
  );
}
