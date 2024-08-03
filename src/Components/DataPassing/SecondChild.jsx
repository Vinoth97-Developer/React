import React, { useState, useEffect } from "react";
import Apple from '../Assets/apple.png';
import SecondChildPic from '../Assets/secondChild.png';
const SecondChild = ({ apple, sendBackToDad }) => {
    const [appleFromDad, setAppleFormDad] = useState(0);


    const giveBackToDad = () => {
        const toParent = {
            name: "secondChild",
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
        <div style={{ textAlign: "center",borderTop:"1px solid gray" }}>
        <h2>Second Child</h2>
        <div style={{ display: "flex", marginLeft: "25px" }}>

            <div style={{ height: "250px" }}>
                <img src={SecondChildPic} alt="" style={{ height: "100%" }} />
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

export default SecondChild;
