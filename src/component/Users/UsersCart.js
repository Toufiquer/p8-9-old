import React, { useContext } from "react";
import { ThemeData } from "../../App";
import CartUser from "./CartUser";

const UsersCart = ({ users, handleRemove }) => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  return (
    <div className={`${border} p-2 text-center text-2xl`}>
      <h2>Users Carts</h2>
      {users.length === 0 ? <h2 className={`${border} p-1 m-1`}>Please Add First</h2> : users.map((curr) => <CartUser key={curr.id} user={curr} handleRemove={handleRemove}></CartUser>)}
      
    </div>
  );
};

export default UsersCart;
