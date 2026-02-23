import React from "react";

import Trends from "./Trends";
import Watch from "./Watch";
import Tvshow from "./Tvshow";
import Comedy from "./Comedy"

const Tv = () => {
  return (
    <div>
      <Trends/>
      <Watch/>
      <Tvshow/>
      <Comedy/>
    </div>
  );
};

export default Tv;
