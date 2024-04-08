import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { userContext, channelContext } from "../App";

const ComponentE = () => {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div>
      {user} - {channel}
      <ComponentF />
    </div>
  );
};

export default ComponentE;
