import expect, { createSpy } from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import OptimizedIcon from "../src/OptimizedIcon";

describe("OptimizedIcon", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays passed element as icon", () => {
    render(<OptimizedIcon Icon={() => <div>test</div>} />, node, () => {
      expect(node.innerHTML).toContain("test");
    });
  });

  it("displays passed element as icon with custom class", () => {
    render(
      <OptimizedIcon
        Icon={props => <div {...props}>test</div>}
        className="custom-class-name"
      />,
      node,
      () => {
        expect(node.innerHTML).toContain("custom-class-name");
      }
    );
  });
});
