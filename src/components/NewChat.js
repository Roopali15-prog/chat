import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

function NewChat({ onIcebreaker, aiOutput }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Start New Chat</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-box"
      />
      <button className="btn" onClick={onIcebreaker}>Generate Icebreaker</button>
      {aiOutput && <div className="ai-output">{aiOutput}</div>}
      <button className="btn" onClick={() => navigate("/")}>Back to Chats</button>
    </div>
  );
}

export default NewChat;
