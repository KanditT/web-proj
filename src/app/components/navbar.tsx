import React from 'react';
import '../styles/navbarStyle.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="title">
                <span className="chat">Chat</span> <span className="cane">CANE</span>
            </h1>
            <button className="loginButton">
                Log In
            </button>
            <script src="navbarjs.js"></script>
            
        </nav>
    );
};

export default Navbar;
