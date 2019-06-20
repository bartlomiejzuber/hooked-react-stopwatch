import React, { Component } from "react";
import { render } from "react-dom";

import { Stopwatch } from "../../src";
import "../../src/style.css";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Stopwatch Demo</h1>
        <Stopwatch showIcons />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
