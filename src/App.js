import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Products from "./component/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
    </Routes>
  );
}

export default App;
