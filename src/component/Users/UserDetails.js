import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeData } from "../../App";

const UserDetails = () => {
  const id = useParams();
  const [themeData] = useContext(ThemeData);
  const { background } = themeData;
  return <div className={`${background} min-h-screen p-4 pt-16`}>You are looking for (id no): {id.id}</div>;
};

export default UserDetails;
