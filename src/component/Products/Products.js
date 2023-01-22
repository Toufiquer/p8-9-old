import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeData } from "../../App";
import ProductsCart from "./ProductsCart";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((data) => setProducts(data.data));
  }, []);
  const [themeData] = useContext(ThemeData);
  const { background, text } = themeData;
  const handleAdd = (id) => {
    console.log(id);
  };
  const handleRemove = (id) => {
    console.log(id);
  };
  const handleDecrease = (id) => {
    console.log(id);
  };
  return (
    <div className={`${background} min-h-screen p-4 pt-16 ${text}`}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-2">
        <ProductsContainer products={products} handleAdd={handleAdd} handleRemove={handleRemove} handleDecrease={handleDecrease}></ProductsContainer>
        <ProductsCart products={products} handleAdd={handleAdd} handleRemove={handleRemove}></ProductsCart>
      </div>
    </div>
  );
};

export default Products;
