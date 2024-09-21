import React from 'react';
import './styles/chatBodyStyle.css'

// const ChatBody: React.FC = () => {
//     return (
//         <div className="chat-container">
//             <div className="chat-box">
//                 <div className="chat-header">
//                     <h3>Chat CANE</h3>
//                     <div className="chat-topic">
//                         การปลูกอ้อยเบื้องต้น
//                     </div>
//                 </div>
//                 <div className="chat-content">
//                     <p>
//                         การปลูกอ้อยเป็นกระบวนการที่มีขั้นตอนหลายขั้นตอนและต้องอาศัยความรู้และความเข้าใจเกี่ยวกับลักษณะของพันธุ์ การดูแลรักษา และสภาพแวดล้อมที่เหมาะสม ในบทความนี้เรามาเรียนรู้วิธีการปลูกอ้อยเบื้องต้น รวมถึงเคล็ดลับต่าง ๆ เพื่อให้ได้ผลผลิตที่ดี
//                     </p>
//                 </div>

{/* <div className="chat-footer">
                    <input type="text" placeholder="Try Message To ChatCANE" className="chat-input" />
                    <button className="send-button">ENTER</button>
                </div> */}
//             </div>
//         </div>
//     );
// };
export default function ChatBody() {
    return (
        
        <div className="chat-container">
            <div className="chat-box">
                <div className="chat-header">
                    <h3>Chat CANE</h3>
                    <div className="chat-topic">
                        การปลูกอ้อยเบื้องต้น
                    </div>
                </div>
                <div className="chat-content">
                    <p>
                        การปลูกอ้อยเป็นกระบวนการที่มีขั้นตอนหลายขั้นตอนและต้องอาศัยความรู้และความเข้าใจเกี่ยวกับลักษณะของพันธุ์ การดูแลรักษา และสภาพแวดล้อมที่เหมาะสม ในบทความนี้เรามาเรียนรู้วิธีการปลูกอ้อยเบื้องต้น รวมถึงเคล็ดลับต่าง ๆ เพื่อให้ได้ผลผลิตที่ดี
                    </p>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Try Message To ChatCANE" className="user-input" />
                    <button className="enter-btn">ENTER</button>
                    <script src="libs\index.js"></script>
                </div>
            </div>
        </div>
    );
}
// export default ChatBody;