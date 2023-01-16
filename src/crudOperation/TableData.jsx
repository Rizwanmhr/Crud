import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TableData = ({ setProgress }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(10);
    try {
      const URL = "https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube";
      setProgress(30);
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          name: text,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const newResponse = await res.json();
      console.log(newResponse);
    } catch (error) {
      console.log(error);
    }
    setProgress(100);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <button onClick={() => navigate("/fetchdata")}>Api Data</button>
    </>
  );
};

export default TableData;
