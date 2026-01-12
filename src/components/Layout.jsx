import { Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

export default function Layout({ children }) {
  const { volume, setVolume, brightness, setBrightness } = useSettings();
  const name = localStorage.getItem("sangeeth_name");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
          borderBottom: "1px solid #ddd",
          background: "#fff",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* App name */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#222",
            fontSize: "20px",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          🎵 Sangeeth
        </Link>

        {/* Right side controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {name && (
            <span style={{ color: "#555", whiteSpace: "nowrap" }}>
              Welcome, {name}
            </span>
          )}

          {/* Volume */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            🔊
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </label>

          {/* Brightness */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            ☀️
            <input
              type="range"
              min="0.6"
              max="1.2"
              step="0.05"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
            />
          </label>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "24px" }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #ddd",
          padding: "16px",
          background: "#fafafa",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={{ color: "#555", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/learn" style={{ color: "#555", textDecoration: "none" }}>
          Learn
        </Link>
        <Link to="/play" style={{ color: "#555", textDecoration: "none" }}>
          Play
        </Link>
        <Link to="/info" style={{ color: "#555", textDecoration: "none" }}>
          Info
        </Link>
      </footer>
    </div>
  );
}
