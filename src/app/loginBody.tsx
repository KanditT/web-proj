import React from 'react';
import './styles/loginBodyStyle.css'; // Ensure this path is correct

const LoginBody: React.FC = () => {
    return (
        <main>
            <h1 className="main-title">Chat CANE</h1>
            <div className="main-content">
                <div className="content-1">
                    <p className="description">
                        Web-app that welcomes everybody who wants to learn & explore about sugarcane
                    </p>
                    <button className="sign-in-btn">Sign In</button>
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
                <input type="text" placeholder="Try Message To ChatCANE" className="chat-input" />
                <button className="enter-btn">ENTER</button>
            </div>
        </main>
    );
};

export default LoginBody;
