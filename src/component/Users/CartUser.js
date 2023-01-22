import { UserMinusIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { ThemeData } from "../../App";

const CartUser = ({ user: { img, name, id }, handleRemove }) => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  return (
    <div className={`${border} m-2 p-1`}>
      <div className="flex justify-between text-left">
        <img className={`mt-[5px]`} src={img} alt={name} />
        <div className="ml-1 flex flex-col w-full pr-2">
          <h2 title={name}>{name.length >= 12 ? name.slice(0, 12) + "..." : name}</h2>
          <div className="flex justify-between">
            <p className={`text-left`}>ID: {id}</p>
            <UserMinusIcon onClick={() => handleRemove(id)} className={`h-6 w-6 ml-2 text-red-500 hover:text-red-600 cursor-pointer`}></UserMinusIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUser;
