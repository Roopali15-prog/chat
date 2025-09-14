import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyChats } from "../data";
import "./Chat.css";

function ChatWindow({ messages, onSummarize, onSmartReply, aiOutput }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const chat = dummyChats.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h2 className="title">Chat with {chat?.name}</h2>
      <div className="message-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="btn-group">
        <button className="btn" onClick={onSummarize}>Summarize Thread</button>
        <button className="btn" onClick={onSmartReply}>Smart Reply Suggestion</button>
      </div>
      {aiOutput && <div className="ai-output">{aiOutput}</div>}
      <button className="btn" onClick={() => navigate("/")}>Back to Chats</button>
    </div>
  );
}

export default ChatWindow;
