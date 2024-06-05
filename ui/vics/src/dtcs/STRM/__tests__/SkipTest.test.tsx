import React from "react";
import SkipTest from "../SkipTest";
import { fireEvent, render } from "@testing-library/react";

describe("SkipTestReason", () => {
  it("renders the component correctly", () => {
    const closePopup = jest.fn();
    render(<SkipTest closePopup={closePopup} />);
  });
  it("opens the new popup when the 'New' button is clicked", () => {
    const closePopup = jest.fn();
    const { getByText } = render(<SkipTest closePopup={closePopup} />);
    const newButton = getByText("New");
    fireEvent.click(newButton);
  });
  it('toggles the switch when clicked', () => {
    const { getByTestId} = render(
      <SkipTest />
    );

    const switchElement = getByTestId('switch');
    fireEvent.click(switchElement);

  });

});