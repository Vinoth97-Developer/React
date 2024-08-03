import React, { useState } from 'react';

const SubmitForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            `%cForm Submitted%c\nUsername: ${username}\nEmail: ${email}`,
            'color: white; font-size: 20px; font-weight: bold; background-color: red; padding: 5px; border-radius: 3px;',
            'color: black; font-size: 16px;margin-top:5px;'
          );
    };


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "80vh" }}>
            <h1>Submit Form</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label htmlFor="username" style={{ fontWeight: "600", color: "#808080" }}>Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ padding: "8px", fontSize: "14px", borderRadius: "5px", outline: "none", border: "1px solid lightgray" }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label htmlFor="email" style={{ fontWeight: "600", color: "#808080" }}>Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ padding: "8px", fontSize: "14px", borderRadius: "5px", outline: "none", border: "1px solid lightgray" }}
                    />
                </div>
                <button type="submit" className='submit-btn'>Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;
