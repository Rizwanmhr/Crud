import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditData = ({ setProgress }) => {
  const [edit, setEdit] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`
      );
      setProgress(30);
      const newResponse = await res.json();
      setProgress(50);
      console.log(newResponse);
      setEdit(newResponse.name);
    } catch (error) {
      console.log(error);
    }
    setProgress(100);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`;
    const res = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify({
        name: edit,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newResponse = res.json();
    console.log(newResponse);
    navigate("/fetchdata");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write something"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditData;
