import React from "react";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

import useChartsTextColor from "../../../hooks/useChartsTextColor";
const Chart4 = ({ data }) => {
  const colorStyle = useChartsTextColor();
  return (
    <div>
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" stroke={colorStyle} />
        <YAxis stroke={colorStyle} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke={colorStyle} />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Chart4;
