import React, { useContext } from "react";
import { ThemeData } from "../../App";
import CartUser from "./CartUser";

const UsersCart = ({ users, handleRemove }) => {
  const [themeData] = useContext(ThemeData);
  const { border, background } = themeData;
  const maxUsers = [...users];
  if (maxUsers.length >= 4) {
    maxUsers.length = 4;
  }
  return (
    <div className={`${border} p-2 text-center text-2xl ${background} z-10`}>
      <h2>Users Carts</h2>
      {users.length === 0 && <h2 className={`${border} p-1 m-1`}>Please Add First</h2>}
      {maxUsers.map((curr) => (
        <CartUser key={curr.id} user={curr} handleRemove={handleRemove}></CartUser>
      ))}
      {users.length >= 5 && <h2 className={`${border} p-1 m-1`}>You Have {users.length - 4} More Users</h2>}
    </div>
  );
};

export default UsersCart;
