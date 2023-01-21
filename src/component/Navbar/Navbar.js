import React, { useContext } from "react";
import { ThemeData } from "../../App";
import Theme from "../Theme/Theme";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [themeData] = useContext(ThemeData);
  const { backgroundI, hoverBackgroundI, text, hoverText, textI, hoverTextI } = themeData;
  return (
    <div className={`pb-3 pt-2 ${backgroundI} ${text} text-xl ${hoverBackgroundI}`}>
      <header className={`flex justify-between items-center container mx-auto`}>
        <span className={`flex justify-between items-center ${textI} ${hoverTextI} text-semibold`}>Toufiquer</span>
        <nav className={`flex gap-4`}>
          <ul className={`flex gap-4`}>
            <li>
              <CustomLink hoverText={hoverText} to="/">
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink hoverText={hoverText} to="/users">
                Users
              </CustomLink>
            </li>
            <li>
              <CustomLink hoverText={hoverText} to="/products">
                Products
              </CustomLink>
            </li>
            <li>
              <CustomLink hoverText={hoverText} to="/charts">
                Charts
              </CustomLink>
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
