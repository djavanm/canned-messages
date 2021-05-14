import React from "react";

export default function CannedMessage({ text, userId }) {
  const displayClass =
    userId === 1234 ? "canned-message-sent" : "canned-message-received";

  return (
    <div className={displayClass}>
      {userId === 4321 && <p>🗑</p>}
      <p>{text}</p>
      {userId === 1234 && <p>🥫</p>}
    </div>
  );
}
