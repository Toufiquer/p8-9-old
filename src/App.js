import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";
import Users from "./component/Users/Users";
export const ThemeMode = createContext("dark");
export const ThemeData = createContext({});
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [themeData, setThemeData] = useState({});
  return (
    <ThemeMode.Provider value={[currentTheme, setCurrentTheme]}>
      <ThemeData.Provider value={[themeData, setThemeData]}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
        </Routes>
      </ThemeData.Provider>
    </ThemeMode.Provider>
  );
}

export default App;
