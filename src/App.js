import React, { useState } from "react";
import ChatBox from "./ChatBox";
import "./App.css";

const App = () => {
  const [chatBoxes, setChatBoxes] = useState([{ messages: [] }]);

  const handleAddChatBox = () => {
    setChatBoxes([...chatBoxes, { messages: [] }]);
  };

  const handleSetMessages = (index, updatedMessages) => {
    const updatedChatBoxes = chatBoxes.map((chatBox, chatBoxIndex) =>
      chatBoxIndex === index ? { messages: updatedMessages } : chatBox
    );
    setChatBoxes(updatedChatBoxes);
  };

  const handleCloseChatBox = (index) => {
    const updatedChatBoxes = chatBoxes.filter(
      (_, chatBoxIndex) => chatBoxIndex !== index
    );
    setChatBoxes(updatedChatBoxes);
  };

  return (
    <div className="app-container">
      <button className="add-button" onClick={handleAddChatBox}>
        Add Chat Box
      </button>
      {chatBoxes.map((chatBox, index) => (
        <ChatBox
          key={index}
          messages={chatBox.messages}
          setMessages={(updatedMessages) =>
            handleSetMessages(index, updatedMessages)
          }
          onClose={() => handleCloseChatBox(index)}
        />
      ))}
    </div>
  );
};

export default App;
