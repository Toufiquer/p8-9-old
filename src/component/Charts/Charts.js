import React, { useContext } from "react";
import { ThemeData } from "../../App";
const Charts = () => {
  const [themeData] = useContext(ThemeData);
  const { background } = themeData;
  return <div className={`${background} min-h-screen p-4 pt-16`}>Charts</div>;
};

export default Charts;
