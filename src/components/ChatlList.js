import React from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

function ChatlList({ chats }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Chats</h2>
      {chats.map((chat) => (
        <div key={chat.id} className="card" onClick={() => navigate(`/chat/${chat.id}`)}>
          <div className="card-title">{chat.name}</div>
          <div className="card-subtitle">{chat.lastMessage}</div>
          <div className="card-time">{chat.time}</div>
        </div>
      ))}
      <button className="btn" onClick={() => navigate("/new")}>
        New Chat
      </button>
    </div>
  );
}

export default ChatlList;
