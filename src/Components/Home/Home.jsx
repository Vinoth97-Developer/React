import React from "react";
import GidyImage from '../Assets/image3.png'

const Home = () => {
    
    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: "column",height:"92vh" }}>
            <div style={{ height: "200px", width: "200px" }}>
                <img src={GidyImage} alt="" style={{ height: "100%", width: "100%" }} />
            </div>
            <div>
                <h2>Welcome To Home page </h2>
            </div>

        </div>
    );
};

export default Home;