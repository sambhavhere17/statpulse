import { ImageResponse } from "next/og";

export const alt = "StatPulse Analytics — Turn Data Into Decisions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ alignItems: "center", background: "#FFF6EE", color: "#292C32", display: "flex", height: "100%", justifyContent: "center", padding: 72, width: "100%" }}>
        <div style={{ border: "1px solid #FDDDAA", borderRadius: 32, display: "flex", flexDirection: "column", gap: 22, padding: 64, width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div style={{ alignItems: "flex-end", background: "#30343B", border: "1px solid #454A52", borderRadius: 12, display: "flex", gap: 7, height: 54, padding: 12, width: 54 }}>
              <span style={{ background: "#FF9500", height: 15, width: 7 }} />
              <span style={{ background: "#FF9500", height: 24, width: 7 }} />
              <span style={{ background: "#FF9500", height: 34, width: 7 }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 800 }}>STATPULSE ANALYTICS</span>
          </div>
          <span style={{ color: "#FF9500", fontSize: 22, letterSpacing: 3 }}>TURN DATA INTO DECISIONS</span>
          <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.06 }}>Business intelligence<br />built for clarity.</span>
          <span style={{ color: "#555B66", fontSize: 24 }}>Dashboards · Reporting · KPI Analytics</span>
        </div>
      </div>
    ),
    size,
  );
}
