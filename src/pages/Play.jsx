import { useEffect, useState } from "react";
import { instruments } from "../data/instruments";
import useAudioPlayer from "../hooks/useAudioPlayer";

/* Utility: shuffle array */
function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function Play() {
  const { playSound, stopSound } = useAudioPlayer();

  // Core state
  const [bag, setBag] = useState([]);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState(null);

  // UX state
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [lastWrongId, setLastWrongId] = useState(null);

  // Progress
  const [completedCount, setCompletedCount] = useState(0);

  /* Initialize bag ONCE */
  useEffect(() => {
    setBag(shuffleArray(instruments));
  }, []);

  /* Setup ONE round — ONLY when explicitly called */
  function setupRound(nextBag) {
    let currentBag = nextBag;

    // Refill bag if empty
    if (currentBag.length === 0) {
      currentBag = shuffleArray(instruments);
      setCompletedCount(0);
    }

    const chosen = currentBag[0];
    const remaining = currentBag.slice(1);

    const distractors = shuffleArray(
      instruments.filter((i) => i.id !== chosen.id)
    ).slice(0, 3);

    setAnswer(chosen);
    setOptions(shuffleArray([...distractors, chosen]));
    setBag(remaining);

    // Reset UX state
    setIsCorrect(false);
    setShowHint(false);
    setLastWrongId(null);
  }

  /* First round only */
  useEffect(() => {
    if (bag.length > 0 && !answer) {
      setupRound(bag);
    }
  }, [bag, answer]);

  function handleChoice(inst) {
    if (!answer || isCorrect) return;

    if (inst.id === answer.id) {
      setIsCorrect(true);
      setCompletedCount((prev) => prev + 1);
    } else {
      setLastWrongId(inst.id);
      setShowHint(true);
      setTimeout(() => setLastWrongId(null), 500);
    }
  }

  function goNext() {
    // IMPORTANT: stop sound explicitly
    stopSound();

    setupRound(bag);
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
        Listen and Choose
      </h1>

      <p style={{ marginTop: 0, color: "#555" }}>
        Tap the instrument that matches the sound.
      </p>

      {/* Progress */}
      <p style={{ marginTop: "8px", color: "#666" }}>
        Progress: {completedCount} / {instruments.length}
      </p>

      {/* Play sound */}
      {answer && (
        <button
          onClick={() => playSound(answer.sound)}
          style={{ margin: "16px 0 24px" }}
        >
          Play Sound
        </button>
      )}

      {/* Options */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}
      >
        {options.map((inst) => (
          <div
            key={inst.id}
            onClick={() => handleChoice(inst)}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            style={{
              padding: "24px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background:
                isCorrect && inst.id === answer.id
                  ? "#e6f7ec" // success
                  : lastWrongId === inst.id
                  ? "#fff3f3" // gentle wrong
                  : showHint && inst.id === answer.id
                  ? "#eef6ff" // hint
                  : "#fff",
              cursor: "pointer",
              userSelect: "none",
              transition: "background 0.3s ease, transform 0.15s ease",
            }}
          >
            <strong>{inst.name}</strong>
          </div>
        ))}
      </div>

      {/* Success feedback */}
      {isCorrect && (
        <>
          <p
            style={{
              marginTop: "24px",
              color: "#2e7d32",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            🌟 Great work!
          </p>

          <button
            onClick={goNext}
            style={{ marginTop: "16px" }}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
