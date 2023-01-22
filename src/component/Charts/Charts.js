import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeData } from "../../App";
import ChartsList from "./ChartsList";
import ChartsOutlet from "./ChartsOutlet";
const Charts = () => {
  const navigate = useNavigate();
  const [charts, setCharts] = useState({});
  useEffect(() => {
    axios.get("charts.json").then((data) => setCharts(data.data));
  }, []);
  const handleCharts = (id) => {
    navigate(`${id}`);
    console.log(id);
  };
  const [themeData] = useContext(ThemeData);
  const { background, backgroundI, text, border } = themeData;
  return (
    <div className={`${background} ${text} min-h-screen p-4 pt-16`}>
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] ">
        <div className={`${backgroundI} min-h-screen p-2`}>
          <ChartsList handleCharts={handleCharts} charts={charts}></ChartsList>
        </div>
        <div className={`${border} mx-2 p-2`}>
          <ChartsOutlet></ChartsOutlet>
        </div>
      </div>
    </div>
  );
};

export default Charts;
