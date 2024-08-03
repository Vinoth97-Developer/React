import React, { useState, useEffect } from "react";
import Apple from '../Assets/apple.png';
import FirstChildPic from '../Assets/firstChild.png';
const FirstChild = ({ apple, sendBackToDad }) => {
    const [appleFromDad, setAppleFormDad] = useState(0);


    const giveBackToDad = () => {
        const toParent = {
            name: "firstChild",
            apples: 1,
        }
        if (appleFromDad > 0) {
            sendBackToDad(toParent);
        } else {
            window.alert('YOU HAVE NO APPLES TO GIVE')
        }

    };

    useEffect(() => {
        setAppleFormDad(apple);
    }, [apple]);
    return (
        <div style={{ textAlign: "center" }}>
            <h2>First Child</h2>
            <div style={{ display: "flex", marginLeft: "25px" }}>

                <div style={{ height: "250px" }}>
                    <img src={FirstChildPic} alt="" style={{ height: "100%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "100px" }}>
                            <img src={Apple} alt="" style={{ height: "100%" }} />
                        </div>
                        <h1>{appleFromDad}</h1>
                    </div>
                    <button className="to-parent-btn" style={{ marginTop: "1em" }} onClick={giveBackToDad}>Give back to dad</button>
                </div>


            </div>

        </div>
    );
};

export default FirstChild;