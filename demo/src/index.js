import React, { Component } from "react";
import { render } from "react-dom";

import { Stopwatch } from "hooked-react-stopwatch";
import "hooked-react-stopwatch/css/style.css";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Stopwatch Demo</h1>
        <Stopwatch />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
