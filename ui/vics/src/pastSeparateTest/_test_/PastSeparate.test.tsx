import React from "react";
import { render } from "@testing-library/react";
import PastSeparate from "../PastSeparate";


describe("PastSeparate", () => {
  test("renders without error", () => {
    render(<PastSeparate />);
  });

  test("displays the 'Define Test Passing Standards' heading", () => {
    const { getByText } = render(<PastSeparate />);
    expect(getByText("Pass Separate Tests Result Enquiry")).toBeInTheDocument();
  });

  test("displays the 'Appoint No.' label", () => {
    const { getByText } = render(<PastSeparate />);
    expect(getByText("Appoint No.")).toBeInTheDocument();
  });

  test("displays the 'Search' button", () => {
    const { getByText } = render(<PastSeparate />);
    expect(getByText("Search")).toBeInTheDocument();
  });

});