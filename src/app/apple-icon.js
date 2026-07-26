import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="#F97316">
          <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
