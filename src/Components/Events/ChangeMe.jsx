import React, { useState,useEffect } from "react";

const ChangeMe = ({myData}) => {

    const [myName,setMyName] = useState('');

    const newInputFun = (event) => {
        setMyName(event.target.value);
    };

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const callUser =()=>{
        console.log('vinoth');
    }

    useEffect(() => { 
       callUser()
       
      });

    //   useEffect(() => { 
    //     console.log('it will run only once'); 
       
    //   }, []);

      useEffect(() => { 
        console.log('my Name changed',myName); 
       
      }, [myName]);
    


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", }}>
            <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>onChange Event</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", borderRadius: "10px", }}>
                <label htmlFor="inputField" style={{ marginBottom: "10px", fontSize: "18px", color: "#555" }}>Type something...</label>
                <input
                    id="inputField"
                    type="text"
                    placeholder="Enter text here"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ padding: "8px", fontSize: "16px", borderRadius: "5px", outline: "none", border: "1px solid lightgray",width:"300px",height:"30px", }}
                />
                <br/>
                <input
                    id="inputField"
                    type="text"
                    placeholder="new input"
                    value={myName}
                    onChange={newInputFun}
                    style={{ padding: "8px", fontSize: "16px", borderRadius: "5px", outline: "none", border: "1px solid lightgray",width:"300px",height:"30px", }}
                />
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "18px", color: "#333", fontWeight: "600" }}>
                        Current value: 
                        <span style={{ fontWeight: "600", color: "#666", marginLeft: "5px" }}>{inputValue}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChangeMe;
