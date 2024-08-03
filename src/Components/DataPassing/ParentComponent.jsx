import React, { useState, useEffect } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import Apple from '../Assets/apple.png';
import Parent from '../Assets/Parent.png';


const ParentComponent = ({ data }) => {

    const [apple, setApple] = useState(20);
    const [toFirstChild, setToFirstChild] = useState(0);
    const [toSecondChild, setToSecondChild] = useState(0);

    const sendToFirstChild = () => {
        if (apple === 0) {
            window.alert('YOU HAVE NO APPLES TO GIVE')
        } else {
            setToFirstChild(toFirstChild + 1);
            setApple(apple - 1)
        }

    };

    const sendToSecondChild = () => {
        if (apple === 0) {
            window.alert('YOU HAVE NO APPLES TO GIVE')
        } else {
            setToSecondChild(toSecondChild + 1);
            setApple(apple - 1)
        }
    };

    const getBackFromKids = (fromChild) => {

        if (fromChild.name === 'firstChild') {
            setApple(apple + fromChild.apples);
            setToFirstChild(toFirstChild - 1)
        } else if (fromChild.name === 'secondChild') {
            setApple(apple + fromChild.apples);
            setToSecondChild(toSecondChild - 1)
        }
    };

    useEffect(() => {
        setApple(apple)
    }, [apple]);


    return (
        <div style={{ height: "92vh", display: "flex" }}>
            <div style={{ display: 'flex', width: "50%" }}>
                <div style={{ textAlign: "center" }}>
                    <h2>Parent</h2>
                    <div style={{ height: "400px" }}>
                        <img src={Parent} alt="" style={{ height: "100%" }} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', height: "400px", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ height: "100px" }}><img src={Apple} alt="" style={{ height: "100%" }} /></div>
                        <h1>{apple}</h1>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', marginTop: "2em" }}>
                        <button className="first-btn" onClick={sendToFirstChild}>Give to First Child</button>
                        <button className="second-btn" onClick={sendToSecondChild}>Give to Second Child</button>
                    </div>

                </div>
            </div>
            <div style={{ width: "50%" }}>
                <div>
                    <FirstChild apple={toFirstChild} sendBackToDad={getBackFromKids} />
                </div>
                <div>
                    <SecondChild apple={toSecondChild} sendBackToDad={getBackFromKids} />
                </div>
            </div>

        </div>
    );
};

export default ParentComponent;