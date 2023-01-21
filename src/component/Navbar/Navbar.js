import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeData } from "../../App";
import Theme from "../Theme/Theme";

const Navbar = () => {
  const [themeData] = useContext(ThemeData);
  const { backgroundI, text, textI, hoverText, hoverTextI } = themeData;
  return (
    <div className={`pb-3 pt-2 ${backgroundI} ${text} text-xl `}>
      <header className={`flex justify-between items-center container mx-auto`}>
        <span className={`flex justify-between items-center ${textI} ${hoverTextI} text-semibold`}>Toufiquer</span>
        <nav className={`flex gap-4`}>
          <ul className={`flex gap-4`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li></li>
          </ul>
          <Theme></Theme>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
