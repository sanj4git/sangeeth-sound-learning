import { useEffect, useState } from "react";
import NamePrompt from "../components/NamePrompt";

export default function Home() {

    const [hasName, setHasName] = useState(false);
    const [name, setName] = useState("");

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

            {/* Buttons come later */}
        </div>
    );

}