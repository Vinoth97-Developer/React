import React, { useState ,useEffect} from "react";
import On from '../Assets/image3.png';
import Off from '../Assets/image2.png';



const HoverMe = () => {
    const [hovered, setHovered] = useState(false);
    const [count, setCount] = useState(0);



    const handleMouseEnter = () => {
        console.log('hiiii');
        setHovered(true);
        setCount(count + 1)
    };

    const handleMouseLeave = () => {
        console.log('hello');
        setHovered(false);
    };

    useEffect(() => {
        console.log("Mouse Enter Count :", count);
    }, [count]);

    return (
        <div className="custom-cursor" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "80vh" }}>
            <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>Mouse Events</h1>
            <div
                style={{ height: "200px", width: "120px", display: "flex", alignItems: "center", justifyContent: "center",marginTop:"20px" }}

            >
                <img
                    src={hovered ? On : Off}
                    alt={hovered ? "On" : "Off"}
                    style={{
                        height: "100%",
                        width: "auto",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
};

export default HoverMe;
