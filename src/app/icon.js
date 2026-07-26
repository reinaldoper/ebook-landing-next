import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="#F97316">
          <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
