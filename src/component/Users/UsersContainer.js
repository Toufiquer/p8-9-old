import React from "react";
import User from "./User";

const UsersContainer = ({ users, handleAll, handleRemove, users: { name, email, id } }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-3 gap-1 `}>{users?.length === 0 ? <h2>Ops! Nothing Was Found</h2> : users.map((curr) => <User user={curr} key={curr.id}></User>)}</div>;
};

export default UsersContainer;
