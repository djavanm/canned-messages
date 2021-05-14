import React from "react";
import CannedMessage from "./CannedMessage";

export default function CannedMessagesContainer({ messages }) {
  return (
    <div className="messages-container">
      {messages.map(({ id, text, userId }) => (
        <CannedMessage key={id} text={text} userId={userId} />
      ))}
    </div>
  );
}
