## react-stopwatch

<p align="center">
  <img src="https://github.com/Bajtas/bjts-react-stopwatch/blob/master/images/stopwatch.jpg?raw=true" alt="How component looks"/>
</p>

Very extensible, provides many hooks so you can use them to develop any custom behavior that you desire.

By default, there is simple CSS style used!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to use

### simple use

```javascript
import React, { Component } from 'react';
import './App.css';
import StopWatch from './StopWatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StopWatch/>
      </div>
    );
  }
}

export default App;
```

### Props

```javascript
StopWatch.propTypes = {
    showIcons: PropTypes.bool, // Showing icons and hide buttons
    hideHours: PropTypes.bool, // Hide hours
    hideMinutes: PropTypes.bool, // Hide minutes
    hideSeconds: PropTypes.bool, // Hide seconds
    hideMilliseconds: PropTypes.bool, // Hide milliseconds
    separators: PropTypes.ArrayOf(PropTypes.string) // Separators to use between hours/minutes/seconds/milliseconds
    // separator use example: [":"/*separatorBetweenHoursAndMinutes*/, ":"/*separatorBetweenMinutesAndSeconds*/, "."/*separatorBetweenSecondsAndMilliseconds*/]
};
```
