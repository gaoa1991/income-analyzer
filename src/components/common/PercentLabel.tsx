import React from "react";

export interface PercentLabelProps {
  precision: number;
  value: number | string;
}

const PercentLabel: React.FC<PercentLabelProps> = props => {
  let innerHtml = "";
  let iconValue = "";
  let textColor = "stat-percent font-bold text-primary";

  if (typeof props.value === "string") {
    innerHtml = props.value; 
  }
  else{
    innerHtml = props.value.toFixed(props.precision) + "%";
  }

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
        {innerHtml}<i className={iconValue} />
      </div>
    </>
  );
};

export default PercentLabel;
