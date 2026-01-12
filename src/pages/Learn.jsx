import { useState } from "react";
import { instruments } from "../data/instruments";
import useAudioPlayer from "../hooks/useAudioPlayer";

export default function Learn() {
  const { playSound, stopSound } = useAudioPlayer();
  const [index, setIndex] = useState(0);

  const instrument = instruments[index];

  function handlePlay() {
    playSound(instrument.sound);
  }

  function goNext() {
    stopSound();
    if (index < instruments.length - 1) {
      setIndex(index + 1);
    }
  }

  function goPrev() {
    stopSound();
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "8px" }}>
        Learn Instruments
      </h1>

      <p style={{ marginTop: 0, color: "#555" }}>
        Tap the instrument to hear how it sounds.
      </p>

      {/* Progress */}
      <p style={{ marginTop: "8px", color: "#666" }}>
        {index + 1} / {instruments.length}
      </p>

      {/* Instrument card */}
      <div
        onClick={handlePlay}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.98)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        style={{
          marginTop: "40px",
          padding: "48px",
          border: "1px solid #ddd",
          borderRadius: "16px",
          background: "#fff",
          cursor: "pointer",
          userSelect: "none",
          transition: "transform 0.15s ease",
        }}
      >
        <img
          src={instrument.image}
          alt={instrument.name}
          style={{
            height: "180px",
            marginBottom: "24px",
            objectFit: "contain",
          }}
        />

        <h2 style={{ marginBottom: "8px" }}>
          {instrument.name}
        </h2>

        <p style={{ marginTop: 0, color: "#666" }}>
          (Tap to hear the sound)
        </p>
      </div>

      {/* Navigation */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <button onClick={goPrev} disabled={index === 0}>
          Previous
        </button>

        <button
          onClick={goNext}
          disabled={index === instruments.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
