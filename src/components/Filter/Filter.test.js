import React from "react";
import { render } from "@testing-library/react";
import filter from "./filter";

describe("filter tests", () => {
  it("should render", () => {
    expect(render(<filter />)).toBeTruthy();
  });
});
import React from "react";
import { render } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter tests", () => {
  it("should render", () => {
    expect(render(<Filter />)).toBeTruthy();
  });
});
