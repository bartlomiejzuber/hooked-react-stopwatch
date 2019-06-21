## hooked-react-stopwatch

<p align="center">
  <img src="https://github.com/Bajtas/bjts-react-stopwatch/blob/master/images/stopwatch.jpg?raw=true" alt="How component looks"/>
</p>

Highly extensible, created without single `class` used but with pure :heart: to Hooks API.
Shipped with basic CSS style!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

```sh
npm i hooked-react-stopwatch --save
```

Alternatively you may use `yarn`:

```sh
yarn add hooked-react-stopwatch
```
Link to npm:
https://www.npmjs.com/package/hooked-react-stopwatch

## Usage

```javascript
import React, { Component } from 'react';
import { Stopwatch } from "hooked-react-stopwatch";
import "hooked-react-stopwatch/css/style.css"; // optional

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}

export default App;
```

### Props

```javascript
StopWatch.propTypes = {
  // custom classNames
  stopwatchClassName: PropTypes.string,
  timeContainerClassName: PropTypes.string,
  controlsClassName: PropTypes.string,
  playIconClassName: PropTypes.string,
  pauseIconClassName: PropTypes.string,
  resetIconClassName: PropTypes.string,
  renderControls: PropTypes.element, // custom render function for controls section
  hideHours: PropTypes.bool, // hide hours
  hideMinutes: PropTypes.bool, // hide minutes
  hideSeconds: PropTypes.bool, // hide seconds
  hideMilliseconds: PropTypes.bool, // hide milliseconds
  separators: PropTypes.arrayOf(PropTypes.string) // separators to use between hours/minutes/seconds/milliseconds
  // separator use example: [":"/*separatorBetweenHoursAndMinutes*/, ":"/*separatorBetweenMinutesAndSeconds*/, "."/*separatorBetweenSecondsAndMilliseconds*/]
};
```
