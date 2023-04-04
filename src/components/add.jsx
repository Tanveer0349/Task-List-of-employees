import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions";
import axios from "axios";
const Add = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = async () => {
    try {
      await axios.post("https://641b1f8e1f5d999a445bf904.mockapi.io/Employee", {
        name: input,
        id:new Date
      });

      dispatch(addEmployee(input),setInput(''));
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add an Employee</button>
    </>
  );
};

export default Add;
