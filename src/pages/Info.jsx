export default function Info() {
    return (
      <>
        <h1 style={{ marginBottom: "8px" }}>About Sangeeth</h1>
        <p style={{ marginTop: 0, color: "#555" }}>
          A calm, inclusive learning experience for exploring musical instruments.
        </p>
  
        <section style={{ marginTop: "32px" }}>
          <h2>What is Sangeeth?</h2>
          <p>
            Sangeeth is a web-based learning application designed to help children,
            especially autistic children, explore and recognize musical
            instruments through sound and interaction.
          </p>
          <p>
            The application focuses on self-paced learning, repetition, and
            sensory control rather than testing or evaluation.
          </p>
        </section>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Design Philosophy</h2>
          <p>
            Many educational tools unintentionally create pressure through timers,
            wrong-answer feedback, or forced progression. Sangeeth avoids these
            patterns.
          </p>
          <ul>
            <li>No time limits or countdowns</li>
            <li>No negative feedback or failure states</li>
            <li>Unlimited replay of sounds</li>
            <li>Predictable and calm interactions</li>
          </ul>
        </section>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Accessibility & Autism-Inclusive Features</h2>
          <ul>
            <li>
              <strong>Volume Control:</strong> Allows immediate adjustment of sound
              levels without interrupting progress.
            </li>
            <li>
              <strong>Brightness Control:</strong> Helps reduce visual discomfort
              and sensory overload.
            </li>
            <li>
              <strong>Guided Play Mode:</strong> Instead of marking answers as
              wrong, the application gently highlights the correct option.
            </li>
            <li>
              <strong>User-Controlled Progress:</strong> The child decides when to
              move to the next activity.
            </li>
          </ul>
        </section>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Learning Modes</h2>
          <p>
            <strong>Learn Mode</strong> allows users to explore instruments one at a
            time and replay sounds freely.
          </p>
          <p>
            <strong>Play Mode</strong> encourages recognition through listening and
            choosing, without introducing stress or competition.
          </p>
        </section>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Technology Used</h2>
          <ul>
            <li>React (Vite)</li>
            <li>Context API for global accessibility settings</li>
            <li>HTML5 Audio API</li>
            <li>LocalStorage for preference persistence</li>
          </ul>
        </section>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Future Improvements</h2>
          <ul>
            <li>Multiple sound variations per instrument</li>
            <li>More visual customization options</li>
            <li>Additional learning categories beyond instruments</li>
            <li>
              Further refinement of round progression logic in Play Mode to improve
              pausing behavior
            </li>
          </ul>
        </section>
      </>
    );
  }
  