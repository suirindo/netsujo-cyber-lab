import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Netsujo Cyber Lab - Web3・業務システムのセキュリティ診断";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0a1628 100%)",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "20%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
            transform: "translate(50%, -50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                Netsujo Cyber Lab
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "#93c5fd",
                  letterSpacing: "0.05em",
                }}
              >
                Security Research & Consulting
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                color: "#e2e8f0",
                textAlign: "center",
                maxWidth: "900px",
                lineHeight: 1.4,
              }}
            >
              元警視庁警察官 × Web3セキュリティ専門家による
            </span>
            <span
              style={{
                fontSize: "28px",
                background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              「攻撃者の目線」で守るセキュリティ設計
            </span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "48px",
            }}
          >
            {["リスクアセスメント", "脆弱性診断", "セキュリティ顧問"].map((text) => (
              <div
                key={text}
                style={{
                  padding: "12px 24px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "8px",
                  color: "#93c5fd",
                  fontSize: "18px",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4, #10b981)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

