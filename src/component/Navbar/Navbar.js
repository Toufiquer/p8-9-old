import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { ThemeData } from "../../App";
import Theme from "../Theme/Theme";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [themeData] = useContext(ThemeData);
  const { backgroundI, hoverBackgroundI, text, hoverText, textI, hoverTextI, textII, hoverTextII } = themeData;
  const iconClass = ` h-6 w-6 ${textII} ${hoverTextII} cursor-pointer`;
  return (
    <div className={`pb-3 pt-2 ${backgroundI} ${text} text-xl ${hoverBackgroundI} text-center  duration-1000 fixed w-full`}>
      <header className={`flex justify-between items-center container mx-auto flex-col md:flex-row`}>
        <h2 className={`flex justify-between items-center ${textI} ${hoverTextI} text-semibold text-left md:w-auto w-full px-4`}>
          Toufiquer{" "}
          <span className={`md:hidden block`} onClick={() => setToggle(!toggle)}>
            {toggle ? <Bars3Icon className={`${iconClass}`}></Bars3Icon> : <XMarkIcon className={`${iconClass}`}></XMarkIcon>}
          </span>
        </h2>
        <nav className={`flex gap-4 flex-col md:flex-row mt-2 md:mt-0 ${!toggle ? "block" : "hidden"} md:flex`}>
          <ul className={`flex gap-4 flex-col md:flex-row `}>
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
