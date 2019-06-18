import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { handleZerosPadding, timeUnits } from "./utils";

const defaultSeparator = ":";
const defaultSeparatorClassName = "separator";
const defaultTimeClassName = "time-part";

const TimePart = ({
  show,
  type,
  value,
  timePartClassName = defaultTimeClassName,
  separatorClassName = defaultSeparatorClassName,
  separator = defaultSeparator
}) =>
  show ? (
    <>
      <span className={timePartClassName}>
        {handleZerosPadding(type, value)}
      </span>
      <span className={separatorClassName}>{separator}</span>
    </>
  ) : null;

TimePart.propTypes = {
  show: PropTypes.bool, // hide/show time part
  type: PropTypes.oneOf(timeUnits), // Type (required to handle zero padding)
  separator: PropTypes.string // Separator char
};

export default React.memo(TimePart);
