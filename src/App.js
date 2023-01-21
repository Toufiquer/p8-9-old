import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";
import Users from "./component/Users/Users";
import { useThemeDetector } from "./hooks/useThemeDetector";
import getThemeVariants from "./component/Theme/getThemeVariants";
export const ThemeMode = createContext("dark");
export const ThemeData = createContext({});
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [themeData, setThemeData] = useState({});
  const getThemeMode = useThemeDetector();
  useEffect(() => {
    console.log(getThemeMode);
    const getVariants = getThemeVariants(getThemeMode);
    setThemeData(getVariants);
    setCurrentTheme(getThemeMode);
  }, [getThemeMode]);
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
