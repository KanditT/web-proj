// async function sendMessage(event = null) {
//     // If the function was triggered by a key press, check if it's the Enter key
//     if (event && event.key && event.key !== 'Enter') {
//         return;
//     }
//         const userInput = document.getElementsByClassName('user-input').value;
//         console.log('User input:', userInput);
//         if (userInput) {
//             appendMessage(`คุณ: ${userInput}`);
//             document.getElementByClassName('user-input').value = '';

//             try {
//                 const response = await fetch('/chatbot', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ user_input: userInput })
//                 });

//                 const data = await response.json();
//                 console.log('Chatbot response:', data);
//                 appendMessage(`Chatbot: ${data.response}`);
//             } catch (error) {
//                 console.error('Error fetching response:', error);
//                 appendMessage('Error: Could not contact the chatbot.');
//             }
//         }
//     }
//     function appendMessage(message) {
//         const messages = document.getElementById('messages');
//         const messageElem = document.createElement('div');
//         messageElem.textContent = message;
//         messages.appendChild(messageElem);
//         messages.scrollTop = messages.scrollHeight; // เลื่อนลงไปที่ข้อความล่าสุด
//     }