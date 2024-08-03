import React, { useState, useEffect } from "react";
import Off from '../Assets/image5.png';
import On from '../Assets/image6.png';


const ClickMe = () => {

    const [turnOn, setTurnOn] = useState(false);

    const handleButtonClick = () => {
        setTurnOn(!turnOn);
    };


    return (
        <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "80vh" }}>
            <h1>onClick Event </h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "80vh" }}>
            <div style={{ height: "200px", width: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {turnOn ?
                    <img src={On} alt="On" style={{ height: "100%", }} />
                    :
                    <img src={Off} alt="off" style={{ height: "100%", }} />
                }

            </div>

            <div>
                <button className={turnOn ? "toggleButton on" : "toggleButton off"} onClick={handleButtonClick}>{turnOn ? "Turn Off" : "Turn On"}</button>
            </div>


        </div>
        </div>
    );
};

export default ClickMe;