import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import TimePart, { defaultSeparator } from "../src/TimePart";
import { timeUnits } from "../src/utils";

describe("TimePart", () => {
  let node;
  const [hours, minutes, seconds, milliseconds] = timeUnits;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays nothing", () => {
    render(<TimePart />, node, () => {
      expect(node.innerHTML).toContain("");
    });
  });

  it("displays two spans", () => {
    render(<TimePart show type={seconds} value={0}/>, node, () => {
      expect(node.childNodes.length).toBe(2);
    });
  });

  it("displays default separator", () => {
    render(<TimePart show type={seconds} value={0}/>, node, () => {
      expect(node.childNodes[1].innerHTML).toBe(defaultSeparator);
    });
  });

  it("displays starting time portion", () => {
    render(<TimePart show type={seconds} value={0}/>, node, () => {
      expect(node.childNodes[0].innerHTML).toBe("00");
    });
  });

  it("displays starting time portion", () => {
    render(<TimePart show type={seconds} value={0} />, node, () => {
      expect(node.childNodes[0].innerHTML).toBe("00");
    });
  });

  it("displays time portion", () => {
    render(<TimePart show type={seconds} value={34} />, node, () => {
      expect(node.childNodes[0].innerHTML).toBe("34");
    });
  });

  it("displays time portion with zero padding", () => {
    render(<TimePart show type={seconds} value={5} />, node, () => {
      expect(node.childNodes[0].innerHTML).toBe("05");
    });
  });

  it("displays time portion with zero padding", () => {
    render(<TimePart show type={seconds} value={5} />, node, () => {
      expect(node.childNodes[0].innerHTML).toBe("05");
    });
  });
});
