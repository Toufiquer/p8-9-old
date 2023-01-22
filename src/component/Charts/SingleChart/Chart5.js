import React from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

import useChartsTextColor from "../../../hooks/useChartsTextColor";
const Chart5 = ({ data }) => {
  const colorStyle = useChartsTextColor();
  return (
    <div>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid stroke={colorStyle} />
        <PolarAngleAxis dataKey="subject" stroke={colorStyle} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke={colorStyle} fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke={colorStyle} fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Chart5;
