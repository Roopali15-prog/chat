import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatlList from "./components/ChatlList";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import { dummyChats, dummyMessages } from "./data";

function App() {
  const [aiOutput, setAiOutput] = useState("");

  const handleSummarize = () => {
    setAiOutput("Summary: This is a quick summary of the conversation.");
  };

  const handleSmartReply = () => {
    setAiOutput("Smart Reply: Sure, let's do it!");
  };

  const handleIcebreaker = () => {
    setAiOutput("Icebreaker: Hi there! How's your day going?");
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ChatlList chats={dummyChats} />} />
          <Route
            path="/chat/:id"
            element={
              <ChatWindow
                messages={dummyMessages}
                onSummarize={handleSummarize}
                onSmartReply={handleSmartReply}
                aiOutput={aiOutput}
              />
            }
          />
          <Route
            path="/new"
            element={
              <NewChat
                onIcebreaker={handleIcebreaker}
                aiOutput={aiOutput}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
