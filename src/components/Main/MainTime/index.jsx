import React, { useState } from "react";

import { TimePicker } from "react-datetime-range-super-picker";
import "react-datetime-range-super-picker/dist/index.css";
import CircularTimespanpicker from "./Timespanpicker";

const MainTime = () => {
  return (
    <CircularTimespanpicker
      outerRadius="150"
      interval="60"
      boundaryHour="0"
      onClick={console.log}
      showResults
    />
  );
};

export default MainTime;
