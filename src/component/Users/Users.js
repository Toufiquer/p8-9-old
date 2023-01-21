import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeData } from "../../App";
import UsersCart from "./UsersCart";
import UsersContainer from "./UsersContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("usersData.json").then((data) => setUsers(data.data));
  }, []);
  const [themeData] = useContext(ThemeData);
  const { background, text } = themeData;
  const handleAdd = (id) => {
    console.log(id);
  };
  const handleRemove = (id) => {
    console.log(id);
  };
  return (
    <div className={`${background} min-h-screen p-4 pt-16 grid grid-cols-1 md:grid-cols-[1fr_360px] ${text}`}>
      <UsersContainer users={users} handleAdd={handleAdd} handleRemove={handleRemove}></UsersContainer>
      <UsersCart></UsersCart>
    </div>
  );
};

export default Users;
