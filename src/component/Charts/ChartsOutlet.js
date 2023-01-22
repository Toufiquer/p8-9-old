import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeData } from "../../App";
import Chart1 from "./SingleChart/Chart1";
import Chart2 from "./SingleChart/Chart2";
import Chart3 from "./SingleChart/Chart3";
import Chart4 from "./SingleChart/Chart4";
import Chart5 from "./SingleChart/Chart5";
import Chart6 from "./SingleChart/Chart6";
import Chart7 from "./SingleChart/Chart7";

const ChartsOutlet = ({ data }) => {
  const [themeData] = useContext(ThemeData);
  const { text } = themeData;
  const id = useParams();
  if (!id.id) {
    return <h2 className={`h-full w-full flex items-center justify-center text-3xl font-thin`}>Please Select A Chart to Display</h2>;
  } else if (id.id === "1") {
    return <Chart1 text={text} data={data}></Chart1>;
  } else if (id.id === "2") {
    return (
      <div>
        <Chart2 text={text} data={data}></Chart2>;
      </div>
    );
  } else if (id.id === "3") {
    return (
      <div>
        <Chart3 text={text} data={data}></Chart3>;
      </div>
    );
  } else if (id.id === "4") {
    return (
      <div>
        <Chart4 text={text} data={data}></Chart4>;
      </div>
    );
  } else if (id.id === "5") {
    return (
      <div>
        <Chart5 text={text} data={data}></Chart5>;
      </div>
    );
  } else if (id.id === "6") {
    return (
      <div>
        <Chart6 text={text} data={data}></Chart6>;
      </div>
    );
  } else if (id.id === "7") {
    return (
      <div>
        <Chart7 text={text} data={data}></Chart7>;
      </div>
    );
  }
};

export default ChartsOutlet;
