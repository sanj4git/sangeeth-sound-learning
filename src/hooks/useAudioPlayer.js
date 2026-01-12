import { useEffect, useRef } from "react";
import { useSettings } from "../context/SettingsContext";

export default function useAudioPlayer() {
  const audioRef = useRef(null);
  const { volume } = useSettings();

  // Keep volume in sync with settings
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function playSound(src) {
    // Stop any existing sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;

    audio.play();
  }

  function stopSound() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  }

  return {
    playSound,
    stopSound,
  };
}
