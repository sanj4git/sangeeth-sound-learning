import { Link } from "react-router-dom";
import { instruments } from "../data/instruments";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Hero */}
      <h1 style={{ marginBottom: "8px" }}>
        Welcome to Sangeeth
      </h1>

      <p
        style={{
          marginTop: 0,
          color: "#555",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Sangeeth is a calm learning space to explore musical instruments
        through sound. There are no wrong answers — learn at your own pace.
      </p>

      {/* Instrument images */}
      <div
        style={{
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "16px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {instruments.map((inst) => (
          <div
            key={inst.id}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <img
              src={inst.image}
              alt={inst.name}
              style={{
                height: "70px",
                marginBottom: "8px",
                objectFit: "contain",
              }}
            />
            <div style={{ fontSize: "14px", color: "#444" }}>
              {inst.name}
            </div>
          </div>
        ))}
      </div>

      {/* Primary actions */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/learn">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
            }}
          >
            Learn Instruments
          </button>
        </Link>

        <Link to="/play">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
            }}
          >
            Play & Guess
          </button>
        </Link>
      </div>

      {/* Info link */}
      <p
        style={{
          marginTop: "28px",
          color: "#666",
        }}
      >
        Want to know how Sangeeth is designed for learning?{" "}
        <Link to="/info" style={{ color: "#222" }}>
          Learn more
        </Link>
      </p>

      {/* Reassurance */}
      <p
        style={{
          marginTop: "16px",
          color: "#666",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        You can replay sounds as many times as you like and adjust volume or
        brightness anytime using the settings.
      </p>
    </div>
  );
}
