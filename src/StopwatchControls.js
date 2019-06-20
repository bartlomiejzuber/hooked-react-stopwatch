import React from "react";
import PropTypes from "prop-types";
import { FaPlay, FaPause, FaReply } from "react-icons/fa";
import OptimizedIcon from "./OptimizedIcon";

const StopwatchControls = ({
  playIconClassName,
  pauseIconClassName,
  resetIconClassName,
  startHandler,
  pauseHandler,
  resetHandler
}) => (
  <React.Fragment>
    <OptimizedIcon Icon={FaPlay} className={playIconClassName} onClick={startHandler} />
    <OptimizedIcon Icon={FaPause} className={pauseIconClassName} onClick={pauseHandler} />
    <OptimizedIcon Icon={FaReply} className={resetIconClassName} onClick={resetHandler} />
  </React.Fragment>
);

StopwatchControls.propTypes = {
  playIconClassName: PropTypes.string, // custom classNames for controls
  pauseIconClassName: PropTypes.string,
  resetIconClassName: PropTypes.string,
  startHandler: PropTypes.func, // callback functions to handle UI interactions
  pauseHandler: PropTypes.func,
  resetHandler: PropTypes.func
};

export default StopwatchControls;
