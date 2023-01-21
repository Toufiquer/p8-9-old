import React from "react";
import { Link } from "react-router-dom";
import Theme from "../Theme/Theme";

const Navbar = () => {
  return (
    <div className={`pb-3 pt-2 bg-blue-300 text-xl `}>
      <header className={`flex justify-between items-center container mx-auto`}>
        <span className="flex justify-between items-center ">Toufiquer</span>
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
