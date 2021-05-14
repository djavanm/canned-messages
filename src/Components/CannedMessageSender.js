import React from "react";

export default function CannedMessageSender({ addMessage }) {
  const [messageText, setMessageText] = React.useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    addMessage(messageText);
    setMessageText("");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
      ></input>
      <button type="submit">Send Message</button>
    </form>
  );
}
