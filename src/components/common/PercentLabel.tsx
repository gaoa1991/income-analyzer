import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { string } from "prop-types";

export interface PercentLabelProps {
  precision: number;
  value: number | string;
}

const PercentLabel: React.FC<PercentLabelProps> = props => {
  if (typeof props.value === "string") {
  }

  const [val, updateVal] = useState();

  let iconValue = "";
  let textColor = "stat-percent font-bold text-primary";

  if (props.value > 0) {
    iconValue = "fa  fa-level-up";
    textColor = "stat-percent font-bold text-info";
  } else if (props.value < 0) {
    iconValue = "fa fa-level-down";
    textColor = "stat-percent font-bold text-danger";
  }

  return (
    <>
      <div className={textColor}>
        {props.value}%<i className={iconValue} />
      </div>
    </>
  );
};

export default PercentLabel;
