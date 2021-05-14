import React from "react";
import firebase from "firebase";
import "firebase/firestore";

import CanPicker from "./Components/CanPicker";
import CannedMessagesContainer from "./Components/CannedMessagesContainer";
import CannedMessageSender from "./Components/CannedMessageSender";

import "./App.css";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA4n5bWHDz4b4501hjuhkCzW_7sm29fARE",
  authDomain: "two-cans.firebaseapp.com",
  projectId: "two-cans",
  storageBucket: "two-cans.appspot.com",
  messagingSenderId: "337405766237",
  appId: "1:337405766237:web:10d0b6c0b8ba7c659e3bb4",
});

const firestore = firebase.firestore();

function App() {
  const [userId, setUserId] = React.useState(null);

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const addMessage = async (text) => {
    await messagesRef.add({
      userId,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const selectCan = (id) => {
    setUserId(id);
  };

  const handleLogOut = () => {
    setUserId(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Canned Messages </h1>
        {userId === 1234 && <button onClick={handleLogOut}>Logout 🥫</button>}
        {userId === 4321 && <button onClick={handleLogOut}>Logout 🗑</button>}
      </header>
      {!userId && <CanPicker selectCan={selectCan} />}
      {userId && (
        <>
          <CannedMessagesContainer messages={messages} />
          <CannedMessageSender addMessage={addMessage} />
        </>
      )}
    </div>
  );
}

export default App;
