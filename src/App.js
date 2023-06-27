import React, { useState } from "react";
import ChatBox from "./ChatBox";
import "./App.css";

const App = () => {
  const [chatBoxes, setChatBoxes] = useState([[]]);

  const handleAddChatBox = () => {
    setChatBoxes([...chatBoxes, []]);
  };

  const handleSetMessages = (index, updatedMessages) => {
    const updatedChatBoxes = chatBoxes.map((chatBox, chatBoxIndex) =>
      chatBoxIndex === index ? updatedMessages : chatBox
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
    <div>
      <button className="add-button" onClick={handleAddChatBox}>
        Add Chat Box
      </button>
      <div className="boxes">
        {chatBoxes.map((messages, index) => (
          <ChatBox
            key={index}
            messages={messages}
            setMessages={(updatedMessages) =>
              handleSetMessages(index, updatedMessages)
            }
            onClose={() => handleCloseChatBox(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
