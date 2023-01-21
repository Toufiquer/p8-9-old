import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";
import Users from "./component/Users/Users";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    </>
  );
}

export default App;
