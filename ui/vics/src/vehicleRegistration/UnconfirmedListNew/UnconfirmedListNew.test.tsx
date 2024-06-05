import { render, screen, fireEvent } from "@testing-library/react";

import React from "react";
import UnconfirmedNewListPopUp from "./UnconfirmedListNew";

describe("UnconfirmedNewListPopUp", () => {
  test("renders without error", () => {
    render(<UnconfirmedNewListPopUp />);
  });
  test("displays the unconfirmed list", () => {
    render(<UnconfirmedNewListPopUp showUnconfirmedNewListPopUp={true} />);
    const unconfirmedList = screen.getByText("Unconfirmed List");
    expect(unconfirmedList).toBeInTheDocument();
  });
  test("calls the closeUnconfirmedNewListPopUp function when Quit button is clicked", () => {
    const closeUnconfirmedNewListPopUp = jest.fn();
    render(
      <UnconfirmedNewListPopUp
        showUnconfirmedNewListPopUp={true}
        closeUnconfirmedNewListPopUp={closeUnconfirmedNewListPopUp}
      />
    );
    const quitButton = screen.getByText("Quit");
    fireEvent.click(quitButton);
    expect(closeUnconfirmedNewListPopUp).toHaveBeenCalled();
  });
});