
import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [volume, setVolume] = useState(0.6);
    const [brightness, setBrightness] = useState(1);

    // Load settings on First Mount
    useEffect(() => {
        const storedVolume = localStorage.getItem("sangeeth_volume");
        const storedBrightness = localStorage.getItem("sangeeth_brightness");

        if(storedVolume !== null) setVolume(Number(storedVolume));
        if(storedBrightness !== null) setBrightness(Number(storedBrightness));

    }, []);

    // Persist settings
    useEffect(() => {
        localStorage.setItem("sangeeth_volume", volume);
    }, [volume]);

    useEffect(() => {
        localStorage.setItem("sangeeth_brightness", brightness);
    }, [brightness]);

    return (
        <SettingsContext.Provider
            value={{
                volume,
                setVolume,
                brightness,
                setBrightness
            }}
        >
            {children}
        </SettingsContext.Provider>
    );

}

export function useSettings(){
    return useContext(SettingsContext);
}