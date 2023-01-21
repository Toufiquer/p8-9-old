import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon } from "@heroicons/react/24/solid";

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
          <MoonIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
