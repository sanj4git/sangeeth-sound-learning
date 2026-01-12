import { useState } from "react";

export default function NamePrompt({ onDone }) {

    const [name, setName] = useState("");

    function handleContinue(){

        const trimmed = name.trim();

        // User has entered name
        if(trimmed.length > 0){
            localStorage.setItem("sangeeth_name", trimmed);
            onDone(trimmed);
        }

        // User chose not to enter name
        else{
            localStorage.setItem("sangeeth_name", "");
            onDone("");
        }

    }

    return(
        <div
            style={{
                maxWidth : "400px",
                margin : "60px auto",
                padding : "24px",
                border : "1px solid #ddd",
                borderRadius : "8px",
                background : "#fff"
            }}
        >
            <h2 style={{marginTop : 0}}>Welcome</h2>
            <p style={{ marginBottom : "12px" }}>
                What should we call you?
            </p>

            <input type="text"
             value={name} 
             onChange={(e) => setName(e.target.value)}
             placeholder="Enter your name (optional)"
             style={{
                width : "100%",
                padding : "8px",
                marginBottom : "12px",
                fontSize : "16px"
             }}
            />

            <button 
                onClick={handleContinue}
                style={{
                    padding : "8px 16px",
                    fontSize : "16px",
                    cursor : "pointer"
                }}
            >
                Continue
            </button>

        </div>
    );

}