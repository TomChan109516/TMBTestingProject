import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactiveTestFormulae from "./ReactiveTestFormulae";

describe("ReactiveTestFormulae", () => {
  it("should render the modal", () => {
    render(<ReactiveTestFormulae setIsReactiveTestFormulae={() => { }} />);
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  it("should call setIsReactiveTestFormulae when the modal is closed", () => {
    const setIsReactiveTestFormulae = jest.fn();
    render(<ReactiveTestFormulae setIsReactiveTestFormulae={setIsReactiveTestFormulae} />);
    const closeButton = screen.getByRole("button", { name: "No" });
    fireEvent.click(closeButton);
    expect(setIsReactiveTestFormulae).toHaveBeenCalled();
  });


});