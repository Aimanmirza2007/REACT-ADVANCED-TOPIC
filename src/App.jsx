import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // TWO WAY BINDING

  const [username, setUser] = useState("");

  const submitform = (event) => {
    event.preventDefault();
    console.log(username);
    setUser("");
  };
  // TWO WAY BINDING
  return (
    <>
      {/* TWO WAY BINDING */}
      <form
        onSubmit={(event) => {
          submitform(event);
        }}
      >
        <p className="text-xl m-10">Enter your name</p>
        <input
          type="text"
          className="px-4 py-3 border-2 m-10"
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="border-2 p-3 cursor-pointer">Submit name</button>
      </form>
      {/* TWO WAY BINDING */}
    </>
  );
}

export default App;
