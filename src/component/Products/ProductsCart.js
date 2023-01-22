import React, { useContext } from "react";
import { ThemeData } from "../../App";
import CartProduct from "./CartProduct";

const ProductsCart = ({ products, handleRemove, handleAdd }) => {
  const [themeData] = useContext(ThemeData);
  const { border, background } = themeData;
  const maxProducts = [...products];
  if (maxProducts.length >= 4) {
    maxProducts.length = 4;
  }
  return (
    <div className={`${border} p-2 text-center text-2xl ${background} z-10`}>
      <h2>Products Carts</h2>
      {products?.length === 0 && <h2 className={`${border} p-1 m-1`}>Please Add First</h2>}
      {maxProducts.map((curr) => (
        <CartProduct key={curr.id} product={curr} handleRemove={handleRemove} handleAdd={handleAdd}></CartProduct>
      ))}
      {products.length >= 5 && <h2 className={`${border} p-1 m-1`}>You Have {products.length - 4} More Products</h2>}
    </div>
  );
};

export default ProductsCart;
