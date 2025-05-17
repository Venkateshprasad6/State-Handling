import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../Slice/userSlice";

const About = () => {
  const users = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();
  console.log("Redux users:", users);

  //To delete thr user
  const deleteUserInfo = (index) => {
    dispatch(deleteUsers(index));
  };
  return (
    <div>
      {users?.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
          <h3>{user.email}</h3>
          <h4>{user.contact}</h4>
          <button onClick={() => deleteUserInfo(index)} >Delete </button>
        </div>
      ))}
    </div>
  );
};

export default About;
