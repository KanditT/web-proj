'use client';
import React, { useState } from 'react';
import './styles/loginBodyStyle.css'; // Ensure this path is correct

const LoginBody: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks user login status
    const [inputMessage, setInputMessage] = useState(""); // Tracks the message in the input field
    const [placeholder, setPlaceholder] = useState("Try Message To ChatCANE"); // Placeholder state

    // Handle input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(event.target.value);
    };

    // Handle the ENTER button click or Enter key press
    const handleSubmit = () => {
        if (!isLoggedIn) {
            // If not logged in, replace the placeholder and clear the input
            setInputMessage(""); 
            setPlaceholder("Please login first !!!");
        } else {
            console.log("Message:", inputMessage); // Process the message if logged in
            // Add any further logic you want here
        }
    };

    // Handle the key press (specifically Enter key)
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(); // Trigger the submit function on Enter key press
        }
    };

    return (
        <div className='main'>
            <h1 className="main-title">Chat CANE</h1>
            <div className="main-content">
                <div className="content-1">
                    <p className="description">
                        Web-app that welcomes <br />everybody who wants to learn & explore about sugarcane
                    </p>
                    <button className="sign-in-btn" onClick={() => setIsLoggedIn(true)}>Sign In</button>
                </div>
                <div className="content-2">
                    <img src="/chatcane-logo.png" alt="ChatCane Logo" className="logo-image" />
                </div>
                <div className="content-3">
                    <nav className="menu">
                        <button className="menu-btn">About us</button>
                        <button className="menu-btn">Setting</button>
                        <button className="menu-btn">Help</button>
                    </nav>
                </div>
            </div>
            <div className="chat-section">
                <div className="input-container">
                    <input 
                        type="text" 
                        value={inputMessage} 
                        placeholder={placeholder} 
                        className="user-input" 
                        onChange={handleInputChange} 
                        onKeyDown={handleKeyPress} // Listening for the Enter key
                    />
                    <button className="enter-btn" onClick={handleSubmit}>ENTER</button>
                </div>
            </div>
        </div>
    );
};

export default LoginBody;
