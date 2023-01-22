import { EllipsisHorizontalCircleIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeData } from "../../App";
import { ButtonAdd, ButtonDetails, ButtonRemove } from "../Button/Button";

const Product = ({ product: { id, name, picture, price }, product, handleAdd, handleRemove, handleDecrease }) => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  const navigate = useNavigate();
  return (
    <div className={`${border} p-1`}>
      <div className="flex flex-col">
        <div className="h-[280px] overflow-hidden">
          <img className={`h-[280px] object-cover hover:scale-150 duration-1000`} src={picture} alt={name} />
        </div>
        <div className="flex flex-col h-20 text-2xl text-semibold">
          <h2 title={name}>{name.length >= 22 ? name.slice(0, 22) + "..." : name}</h2>
          <p className={`text-3xl font-thin`}>Price: ${price}</p>
        </div>
        <div className="flex">
          <div className="flex justify-between">
            <div className="flex ml-2 gap-1">
              <ButtonAdd id={id} handler={handleAdd}>
                <div className="flex">
                  Add <ShoppingCartIcon className={`h-6 w-6 ml-2`}></ShoppingCartIcon>
                </div>
              </ButtonAdd>
              <ButtonRemove handler={() => handleRemove(id)}>
                <div className="flex">
                  Remove <TrashIcon className={`h-6 w-6 ml-2`}></TrashIcon>
                </div>
              </ButtonRemove>
            </div>
            <ButtonDetails handler={() => navigate(`/products/${id}`)} name={name}>
              <EllipsisHorizontalCircleIcon className={`h-6 w-6`}></EllipsisHorizontalCircleIcon>
            </ButtonDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
