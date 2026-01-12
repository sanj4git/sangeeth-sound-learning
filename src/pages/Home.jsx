import { useEffect, useState } from "react";
import NamePrompt from "../components/NamePrompt";
import SettingsPanel from "../components/SettingsPanel";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { instruments } from "../data/instruments";


export default function Home() {

    const [hasName, setHasName] = useState(false);
    const [name, setName] = useState("");
    const [showSettings, setShowSettings] = useState(false);
    const { playSound } = useAudioPlayer();

    useEffect(() => {
        const storedName = localStorage.getItem("sangeeth_name");

        if(storedName != null){
            setName(storedName);
            setHasName(true);
        }
    }, []);

    if (!hasName) {
        return (
          <NamePrompt
            onDone={(finalName) => {
              setName(finalName);
              setHasName(true);
            }}
          />
        );
      }
      

    return (
        <div>
            <h1>
                {name ? `Welcome, ${name}` : "Welcome"}
            </h1>

            <p>
                Choose a mode to begin
            </p>

            <button onClick = { () => setShowSettings(true)}>
              Settings
            </button>

            { showSettings && (
              <SettingsPanel onClose={ () => setShowSettings(false) } />
            )}


            {/* Buttons come later */}
        </div>
    );

}