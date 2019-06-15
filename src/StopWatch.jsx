import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./style.css";

const calculateTimeDiff = (startTime, pauseOffset) => {
  let timeDiff = moment.duration(moment().diff(startTime));
  if (pauseOffset) timeDiff = timeDiff.add(pauseOffset);

  return timeDiff;
};
const handleZerosPadding = (timeUnit, timeValue) => {
  let convertedTimeValue;

  switch (timeUnit) {
    case "hours":
    case "minutes":
      if (timeValue < 10) convertedTimeValue = "0" + timeValue;
      else convertedTimeValue = timeValue;
      break;
    case "seconds":
      if (timeValue < 10) convertedTimeValue = "0" + timeValue;
      else convertedTimeValue = timeValue;
      break;
    case "milliseconds":
      if (timeValue < 10) convertedTimeValue = "00" + timeValue;
      else if (timeValue < 100) convertedTimeValue = "0" + timeValue;
      else if (timeValue <= 999) convertedTimeValue = timeValue;
      break;
  }

  return convertedTimeValue;
};
const StopWatch = ({
  showIcons,
  hideHours,
  hideMinutes,
  hideSeconds,
  hideMilliseconds,
  separators
}) => {
  const [time, setTime] = useState({
    startTime: null,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
  const [pause, setPause] = useState({
    active: false,
    offset: 0
  });
  const intervalHandle = useRef({ timer: null });
  const startBtnClick = useCallback(() => {
    if (!intervalHandle.current.timer) {
      const startTime = moment();
      intervalHandle.current.timer = setInterval(() => {
        console.log('test');
        const timeDiff = calculateTimeDiff(startTime, pause.offset);
        setTime({
          ...time,
          hours: timeDiff.hours(),
          minutes: timeDiff.minutes(),
          seconds: timeDiff.seconds(),
          milliseconds: timeDiff.milliseconds()
        });
      }, 10);
    }
  });
  const pauseBtnClick = useCallback(() => {
    if (intervalHandle.current.timer) {
      clearInterval(intervalHandle.current.timer);
      const durationToPauseClick = moment.duration(
        moment().diff(time.startTime)
      );
      setPause({
        active: true,
        offset: durationToPauseClick
      });
    }
  });

  useEffect(() => {
    return () => clearInterval(intervalHandle.current.timer);
  });

  // resetBtnClick() {
  //   clearInterval(this.state.timer);
  //   this.setState({
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //     milliseconds: 0,

  //     pauseOffset: null,
  //     timer: null
  //   });
  // }

  return (
    <div className="stopwatch">
      <div className="time">
        {!hideHours && [
          <span key="hours" className="hours">
            {handleZerosPadding("hours", time.hours)}
          </span>,
          <span key="separator_1" className="separator">
            {(separators && separators[0]) || ":"}
          </span>
        ]}
        {!hideMinutes && [
          <span key="minutes" className="minutes">
            {handleZerosPadding("minutes", time.minutes)}
          </span>,
          <span key="separator_2" className="separator">
            {(separators && separators[1]) || ":"}
          </span>
        ]}
        {!hideSeconds && [
          <span key="seconds" className="seconds">
            {handleZerosPadding("seconds", time.seconds)}
          </span>,
          <span key="separator_3" className="separator">
            {(separators && separators[2]) || "."}
          </span>
        ]}
        {!hideMilliseconds && (
          <span className="milliseconds">
            {handleZerosPadding("milliseconds", time.milliseconds)}
          </span>
        )}
      </div>
      <div className="controls">
        {showIcons && [
          <i
            key="icon_1"
            className="icon-play"
            aria-hidden="true"
            onClick={startBtnClick}
          />,
          <i
            key="icon_2"
            className="icon-pause"
            aria-hidden="true"
            onClick={pauseBtnClick}
          />
          // <i
          //   key="icon_3"
          //   class="icon-spinner"
          //   aria-hidden="true"
          //   onClick={resetBtnClick}
          // />
        ]}
        {!showIcons && [
          <button key="btn_1" onClick={startBtnClick}>
            Start
          </button>,
          <button key="btn_2" onClick={pauseBtnClick}>
            Pause
          </button>
          // <button key="btn_3" onClick={resetBtnClick}>
          //   Reset
          // </button>
        ]}
      </div>
    </div>
  );
};

StopWatch.propTypes = {
  showIcons: PropTypes.bool, // Showing icons and hide buttons
  hideHours: PropTypes.bool, // Hide hours
  hideMinutes: PropTypes.bool, // Hide minutes
  hideSeconds: PropTypes.bool, // Hide seconds
  hideMilliseconds: PropTypes.bool, // Hide milliseconds
  separators: PropTypes.arrayOf(PropTypes.string) // Separators to use between hours/minutes/seconds/milliseconds
  // separator use example: [":"/*separatorBetweenHoursAndMinutes*/, ":"/*separatorBetweenMinutesAndSeconds*/, "."/*separatorBetweenSecondsAndMilliseconds*/]
};

export default StopWatch;
