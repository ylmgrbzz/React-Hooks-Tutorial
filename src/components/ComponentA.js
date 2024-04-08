import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return <div>Component A - {countContext.countState}</div>;
};

export default ComponentA;
