import React from "react";
import Product from "./Product";

const ProductsContainer = ({ products, handleAdd, handleRemove, handleDecrease }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 `}>{products?.length === 0 ? <h2>Ops! Nothing Was Found</h2> : products.map((curr) => <Product handleAdd={handleAdd} handleRemove={handleRemove} handleDecrease={handleDecrease} product={curr} key={curr.id}></Product>)}</div>;
};

export default ProductsContainer;
