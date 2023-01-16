import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FetchData = ({ setProgress }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setProgress(10);
    try {
      const res = await fetch(
        "https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube"
      );
      setProgress(30);
      const response = await res.json();
      setProgress(50);
      setData(response);
      console.log("this is data", response);
    } catch (error) {
      console.log(error);
    }
    setProgress(100);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // delete data
  const handleDelete = async (id) => {
    try {
      const URL = `https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`;
      const res = await fetch(URL, {
        method: "DELETE",
      });
      const newResponse = res.json();
      console.log(newResponse);
    } catch (error) {
      console.log(error);
    }
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <>
      {data.map((items) => {
        return (
          <div
            key={items.id}
            style={{ marginTop: "1rem", display: "flex", gap: "2rem" }}
          >
            <h3>{items.name}</h3>
            <Link to={`/editData/${items.id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(items.id)}>Delete</button>
          </div>
        );
      })}
      ;
    </>
  );
};
export default FetchData;
