import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeData } from "../../App";
import { filterByIds } from "../utilities/filterByIds";
import { getItem, removeUser, saveUser } from "../utilities/manageDB";
import UsersCart from "./UsersCart";
import UsersContainer from "./UsersContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [cartUsers, setCartUsers] = useState([]);
  useEffect(() => {
    axios.get("usersData.json").then((data) => {
      setUsers(data.data);
      const cartData = [...data.data];
      cartData.length = 4;
    });
  }, []);
  useEffect(() => {
    const storedCard = getItem("UsersData");
    const cartsUsers = filterByIds(storedCard, users);
    setCartUsers(cartsUsers);
  }, [users]);
  const [themeData] = useContext(ThemeData);
  const { background, text } = themeData;
  const handleAdd = (id) => {
    saveUser(id);
    const ifExist = cartUsers.find((curr) => curr.id === +id);
    if (!ifExist) {
      const newUser = users.find((curr) => curr.id === +id);
      setCartUsers([...cartUsers, newUser]);
    }
  };
  const handleRemove = (id) => {
    removeUser(id);
    const otherUsers = cartUsers.filter((curr) => curr.id !== +id);
    setCartUsers(otherUsers);
  };
  return (
    <div className={`${background} min-h-screen p-4 pt-16 grid grid-cols-1 md:grid-cols-[1fr_360px] ${text} gap-2`}>
      <UsersContainer users={users} handleAdd={handleAdd} handleRemove={handleRemove}></UsersContainer>
      <div className="min-h-screen relative">
        <UsersCart users={cartUsers} handleRemove={handleRemove}></UsersCart>
      </div>
    </div>
  );
};

export default Users;
