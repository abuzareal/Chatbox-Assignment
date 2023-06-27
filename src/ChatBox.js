import React, { useState } from "react";
import "./ChatBox.css";

const ChatBox = ({ messages, setMessages, onClose }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [
        ...messages,
        { content: newMessage, isSelf: true },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-box">
      <div className="header">
        <span className="close-button" onClick={onClose}>
          &#10006;
        </span>
      </div>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            className={`message ${
              message.isSelf ? "self-message" : "other-message"
            }`}
            key={index}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          className="message-input"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
