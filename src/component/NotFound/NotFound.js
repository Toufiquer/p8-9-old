import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { ThemeData } from "../../App";

const NotFound = () => {
  const [themeData] = useContext(ThemeData);
  const { background, text, deleteI } = themeData;
  return (
    <div className={`${background} ${text} min-h-screen p-4 flex items-center justify-center`}>
      <div className={`text-center`}>
        <ExclamationTriangleIcon className={`h-18 w-16 ${deleteI}`} />
        <h2 className="p-4 text-6xl">Ops! Nothing Was Found </h2>
        <p className="text-sm">Please Try Again or Go Home</p>
      </div>
    </div>
  );
};

export default NotFound;
