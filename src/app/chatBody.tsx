// import React from 'react';
'use client';
import React, { useRef } from 'react';
import './styles/chatBodyStyle.css' // Import your CSS for styling

export default function ChatComponent() {
    const messagesRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const appendMessage = (message: string) => {
        if (messagesRef.current) {
            const messageElem = document.createElement('div');
            messageElem.textContent = message;
            messagesRef.current.appendChild(messageElem);
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight; // Scroll to the latest message
        }
    };

    const sendMessage = async (event?: React.KeyboardEvent | React.MouseEvent) => {
        // Check if it's triggered by pressing the Enter key
        if (event && 'key' in event && event.key !== 'Enter') {
            return;
        }

        const userInput = inputRef.current?.value;
        if (userInput && userInput.trim()) {
            appendMessage(`คุณ: ${userInput}`);

            // Clear the input field
            if (inputRef.current) {
                inputRef.current.value = '';
            }

            try {
                const response = await fetch('/chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_input: userInput }),
                });

                const data = await response.json();
                appendMessage(`Chatbot: ${data.response}`);
            } catch (error) {
                console.error('Error fetching response:', error);
                appendMessage('Error: Could not contact the chatbot.');
            }
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            sendMessage(event);
        }
    };

    return (
        <div>


            <div id="chatbox">
                <div id="chat-cane-title">ChatCANE</div>

                <div id="messages" ref={messagesRef}></div>

                <div id="input-box">
                    <input
                        type="text"
                        id="user-input"
                        placeholder="พิมพ์ข้อความที่นี่..."
                        ref={inputRef}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={sendMessage} id='enterButton'>ENTER</button>
                </div>
            </div>

        </div>
    );
}
