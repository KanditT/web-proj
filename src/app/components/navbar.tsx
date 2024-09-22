'use client';  // Ensure this is marked as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';  // Use next/navigation instead of next/router
import '../styles/navbarStyle.css';

const Navbar: React.FC = () => {
    const router = useRouter();  // Correctly initialize useRouter

    const handleLoginClick = () => {
        router.push('/chat');  // Push to /chat when the button is clicked
    };

    const handleTitleClick = () => {
        router.push('/');  // Push to /chat when the button is clicked
    };

    return (
        <nav className="navbar">
            <h1 className="title" onClick={handleTitleClick}>
                <span className="chat">Chat</span> <span className="cane">CANE</span>
            </h1>
            <button className="loginButton" onClick={handleLoginClick}>
                Log In
            </button>
        </nav>
    );
};

export default Navbar;
