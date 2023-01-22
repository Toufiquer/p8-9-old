import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeData } from "../../App";
import { filterProductsByIds } from "../utilities/filterByIds";
import { decreaseProduct, getItem, removeProduct, saveProduct } from "../utilities/manageDB";
import ProductsCart from "./ProductsCart";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((data) => setProducts(data.data));
  }, []);
  useEffect(() => {
    // One way to update products
    const getStoredProductsCart = getItem("ProductsData");
    const storedProducts = filterProductsByIds(getStoredProductsCart, products);
    setCartProducts(storedProducts);
  }, [products]);
  const updateCart = () => {
    // One way to update products
    const getStoredProductsCart = getItem("ProductsData");
    const storedProducts = filterProductsByIds(getStoredProductsCart, products);
    setCartProducts(storedProducts);
  };
  const [themeData] = useContext(ThemeData);
  const { background, text } = themeData;
  const handleAdd = (id) => {
    saveProduct(id);
    // One way to update products
    updateCart();
  };
  const handleRemove = (id) => {
    removeProduct(id);
    // One way to update products
    updateCart();
  };
  const handleDecrease = (id) => {
    decreaseProduct(id);
    // One way to update products
    updateCart();
  };
  return (
    <div className={`${background} min-h-screen p-4 pt-16 ${text}`}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-2">
        <ProductsContainer products={products} handleAdd={handleAdd} handleRemove={handleRemove} handleDecrease={handleDecrease}></ProductsContainer>
        <ProductsCart products={cartProducts} handleAdd={handleAdd} handleRemove={handleRemove}></ProductsCart>
      </div>
    </div>
  );
};

export default Products;
