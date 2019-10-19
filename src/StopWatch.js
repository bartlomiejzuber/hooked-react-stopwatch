import React from "react";
import PropTypes from "prop-types";
import { useStopwatch } from "./useStopwatch";
import TimePart from "./TimePart";
import StopwatchControls from "./StopwatchControls";
import { timeUnits } from "./utils";

const [hours, minutes, seconds, milliseconds] = timeUnits;
const StopWatch = ({
  renderControls,
  hideHours,
  hideMinutes,
  hideSeconds,
  hideMilliseconds,
  separators,
  stopwatchClassName = "stopwatch",
  timeContainerClassName = "time",
  controlsClassName = "controls",
  playIconClassName = "icon-play",
  pauseIconClassName = "icon-pause",
  resetIconClassName = "icon-reset"
}) => {
  const { startHandler, pauseHandler, resetHandler, time } = useStopwatch();

  return (
    <div className={stopwatchClassName}>
      <div className={timeContainerClassName}>
        <TimePart
          show={!hideHours}
          separator={separators && separators[0]}
          type={hours}
          value={time.hours}
        />
        <TimePart
          show={!hideMinutes}
          separator={separators && separators[1]}
          type={minutes}
          value={time.minutes}
        />
        <TimePart
          show={!hideSeconds}
          separator={separators && separators[2]}
          type={seconds}
          value={time.seconds}
        />
        <TimePart
          show={!hideMilliseconds}
          separator={null}
          type={milliseconds}
          value={time.milliseconds}
        />
      </div>
      <div className={controlsClassName}>
        {renderControls ? (
          renderControls()
        ) : (
          <StopwatchControls
            playIconClassName={playIconClassName}
            pauseIconClassName={pauseIconClassName}
            resetIconClassName={resetIconClassName}
            startHandler={startHandler}
            pauseHandler={pauseHandler}
            resetHandler={resetHandler}
          />
        )}
      </div>
    </div>
  );
};

StopWatch.propTypes = {
  // custom classNames
  stopwatchClassName: PropTypes.string,
  timeContainerClassName: PropTypes.string,
  controlsClassName: PropTypes.string,
  playIconClassName: PropTypes.string,
  pauseIconClassName: PropTypes.string,
  resetIconClassName: PropTypes.string,
  renderControls: PropTypes.func, // custom render function for controls section
  hideHours: PropTypes.bool, // hide hours
  hideMinutes: PropTypes.bool, // hide minutes
  hideSeconds: PropTypes.bool, // hide seconds
  hideMilliseconds: PropTypes.bool, // hide milliseconds
  separators: PropTypes.arrayOf(PropTypes.string) // separators to use between hours/minutes/seconds/milliseconds
  // separator use example: [":"/*separatorBetweenHoursAndMinutes*/, ":"/*separatorBetweenMinutesAndSeconds*/, "."/*separatorBetweenSecondsAndMilliseconds*/]
};

export default StopWatch;
