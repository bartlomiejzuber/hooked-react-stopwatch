import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import TimePart, { defaultSeparator } from "../src/TimePart";
import { timeUnits, handleZerosPadding } from "../src/utils";

describe("Utils", () => {
  let node;
  const [hours, minutes, seconds, milliseconds] = timeUnits;

  it("handleZerosPadding for hours", () => {
    const result = handleZerosPadding(hours, 1);
    expect(result).toBe("01");
  });

  it("handleZerosPadding for minutes", () => {
    const result = handleZerosPadding(minutes, 1);
    expect(result).toBe("01");
  });

  it("handleZerosPadding for seconds", () => {
    const result = handleZerosPadding(seconds, 1);
    expect(result).toBe("01");
  });

  it("handleZerosPadding for milliseconds - two zeros", () => {
    const result = handleZerosPadding(milliseconds, 1);
    expect(result).toBe("001");
  });

  it("handleZerosPadding for milliseconds - one zero", () => {
    const result = handleZerosPadding(milliseconds, 10);
    expect(result).toBe("010");
  });

  it("handleZerosPadding for milliseconds - undefined time unit", () => {
    const timeUnit = "undefined_time_unit";
    expect(handleZerosPadding.bind(null, timeUnit, 10)).toThrow(
      `Provided time unit: ${timeUnit} could not be recognized as valid unit`
    );
  });
});
