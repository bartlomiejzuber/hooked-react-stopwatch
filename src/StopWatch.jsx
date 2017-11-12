import React, {Component} from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
import './style.css';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,

            pauseActive: false,
            pauseOffset: 0
        }

        this.addZeros = this.addZeros.bind(this);
        this.timeUpdate = this.timeUpdate.bind(this);
        this.startBtnClick = this.startBtnClick.bind(this);
        this.pauseBtnClick = this.pauseBtnClick.bind(this);
        this.resetBtnClick = this.resetBtnClick.bind(this);
    }

    timeUpdate() {
        let timeDiff = moment.duration(moment().diff(this.state.startTime));
        if (this.state.pauseOffset) {
            timeDiff = timeDiff.add(this.state.pauseOffset);
        }

        this.setState({
            hours: timeDiff.hours(),
            minutes: timeDiff.minutes(),
            seconds: timeDiff.seconds(),
            milliseconds: timeDiff.milliseconds()
        });
    }

    startBtnClick() {
        if (!this.state.timer) {
            this.setState({
                startTime: moment(),
                timer: setInterval(this.timeUpdate, 10)
            });
        }
    }

    pauseBtnClick() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
            let durationToPauseClick = moment.duration(moment().diff(this.state.startTime));
            this.setState({
                pauseOffset: this.state.pauseOffset ? this.state.pauseOffset.add(durationToPauseClick) : durationToPauseClick,
                timer: null
            });
        }
    }

    resetBtnClick() {
        clearInterval(this.state.timer);
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,

            pauseOffset: null,
            timer: null
        });
    }

    addZeros(timeUnit, timeValue) {
        let convertedTimeValue;

        switch (timeUnit) {
            case "hours":
            case "minutes":
                if (timeValue < 10)
                    convertedTimeValue = "0" + timeValue;
                else
                    convertedTimeValue = timeValue;
                break;
            case "seconds":
                if (timeValue < 10)
                    convertedTimeValue = "0" + timeValue;
                else
                    convertedTimeValue = timeValue;
                break;
            case "milliseconds":
                if (timeValue < 10) 
                    convertedTimeValue = "00" + timeValue;
                else if (timeValue < 100) 
                    convertedTimeValue = "0" + timeValue;
                else if (timeValue <= 999) 
                    convertedTimeValue = timeValue;
                break;
        }

        return convertedTimeValue;
    }

    render() {
        const { showIcons, hideHours, hideMinutes, hideSeconds, hideMilliseconds, separators } = this.props;
        return (
            <div className="stopwatch">
                <div className="time">
                    { !hideHours && [
                    <span key="hours" className="hours">{this.addZeros("hours", this.state.hours)}</span>,
                    <span key="separator_1" className="separator">{(separators && separators[0]) || ":"}</span>] }
                    { !hideMinutes && [
                    <span key="minutes" className="minutes">{this.addZeros("minutes", this.state.minutes)}</span>,
                    <span key="separator_2" className="separator">{(separators && separators[1]) || ":"}</span>] }
                    { !hideSeconds && [
                    <span key="seconds" className="seconds">{this.addZeros("seconds", this.state.seconds)}</span>,
                    <span key="separator_3" className="separator">{(separators && separators[2]) || "."}</span>] }
                    { !hideMilliseconds &&
                    <span className="milliseconds">{this.addZeros("milliseconds", this.state.milliseconds)}</span> }
                </div>
                <div className="controls">
                    { showIcons && [
                    <i key="icon_1" class="icon-play" aria-hidden="true" onClick={this.startBtnClick}></i>,
                    <i key="icon_2" class="icon-pause" aria-hidden="true" onClick={this.pauseBtnClick}></i>,
                    <i key="icon_3" class="icon-spinner" aria-hidden="true" onClick={this.resetBtnClick}></i>] }
                    { !showIcons && [
                    <button key="btn_1" onClick={this.startBtnClick}>Start</button>,
                    <button key="btn_2" onClick={this.pauseBtnClick}>Pause</button>,
                    <button key="btn_3" onClick={this.resetBtnClick}>Reset</button>] }
                </div>
            </div>
        );
    }
}

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