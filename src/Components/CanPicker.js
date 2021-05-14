import React from "react";

export default function CanPicker({ selectCan }) {
  return (
    <>
      <h2>Select A Can to get Started!</h2>
      <button onClick={() => selectCan(1234)}>🥫</button>
      <button onClick={() => selectCan(4321)}>🗑</button>
    </>
  );
}
