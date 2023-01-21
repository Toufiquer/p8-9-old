import React, { useContext } from "react";
import { ThemeData } from "../../App";

const UsersCart = () => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  return <div className={`${border} p-2 text-center text-2xl`}>Users cArts</div>;
};

export default UsersCart;
