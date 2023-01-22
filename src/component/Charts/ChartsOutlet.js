import React from "react";
import { useParams } from "react-router-dom";

const ChartsOutlet = () => {
  const id = useParams();
  if (!id.id) {
    return <h2 className={`h-full w-full flex items-center justify-center text-3xl font-thin`}>Please Select A Chart to Display</h2>;
  }
  return (
    <div>
      <h2>The header of outlet {id.id}</h2>
    </div>
  );
};

export default ChartsOutlet;
