import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useContext } from "react";
import { ThemeData } from "../../App";

const CartProduct = ({ product: { id, picture, name }, handleRemove }) => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  return (
    <div className={`${border} m-1 p-1`}>
      <div className="flex justify-between w-full">
        <div className="flex">
          <img className={`h-12 w-12 object-cover mr-1`} src={picture} alt={name} />
          <h2 title={name}>{name.length >= 20 ? name.slice(0, 20) + "..." : name}</h2>
        </div>
        <div className="flex items-center justify-center">
          <TrashIcon onClick={() => handleRemove(id)} className={`h-6 w-6 ml-[-5px] text-red-500 hover:text-red-600 cursor-pointer`}></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
