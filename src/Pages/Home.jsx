import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Navbar.css";
import { setUsers } from "../Slice/userSlice";

const Home = () => {
  //TO Update the state in the redux
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
    console.log(name, value);
  };

  const addUser = () => {
    dispatch(setUsers(formInput));
  };

  return (
    <>
      <div>
        <form className="sheet">
          <label>Name</label>
          <br />
          <input
            type="text"
            value={formInput.name}
            onChange={handleChange}
            name="name"
          />
          <br />
          <label>Age</label>
          <br />
          <input
            type="number"
            value={formInput.age}
            onChange={handleChange}
            name="age"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            value={formInput.email}
            onChange={handleChange}
            name="email"
          />
          <br />
          <label>Contact</label>
          <br />
          <input
            type="text"
            maxLength={10}
            value={formInput.contact}
            onChange={handleChange}
            name="contact"
          />
          <br />
          <button type="button" onClick={addUser}>
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
