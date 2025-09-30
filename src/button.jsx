import { useState } from "react";

function Button() {
  const [message, setMessage] = useState("");
  const [use, setUse] = useState("");

  function print() {
    setUse("Hello");
    console.log(setUse);
  }

  function handleMouseOver() {
    setMessage("Hii, How are you!");
    console.log(setMessage);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={print}>Click me!</button>
      <button onMouseOver={handleMouseOver} style={{ marginLeft: "10px" }}>
        Hover Me!
      </button>
      <br /><br /><br />
      <span>{use}</span> &nbsp;
      <span>{message}</span>
    </div>
  );
}

export default Button;
