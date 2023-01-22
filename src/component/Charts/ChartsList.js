import React from "react";
import { useContext } from "react";
import { ThemeData } from "../../App";

const ChartsList = ({ charts, handleCharts }) => {
  const [themeData] = useContext(ThemeData);
  const { border, hoverBackgroundI } = themeData;
  return (
    <div className={`text-2xl text-center`}>
      Charts List
      {Object.keys(charts).map((chart) => (
        <h2 title="Click for more..." onClick={() => handleCharts(charts[chart][0].id)} key={charts[chart][0].id} className={`${border} p-1 m-1 cursor-pointer ${hoverBackgroundI}`}>
          {charts[chart][0].name}
        </h2>
      ))}
    </div>
  );
};

export default ChartsList;
