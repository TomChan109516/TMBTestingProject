import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UpdateLocationinformation from "./UpdateLocationinformation";

describe("UpdateLocationinformation", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <UpdateLocationinformation
        showUpdateLocationinformation={true}
        closeUpdateLocationinformation={() => {}}
      />
    );
    expect(getByText("Location Information")).toBeInTheDocument();
  });

  test("calls closeUpdateLocationinformation when Cancel button is clicked", () => {
    const closeUpdateLocationinformation = jest.fn();
    const { getByText } = render(
      <UpdateLocationinformation
        showUpdateLocationinformation={true}
        closeUpdateLocationinformation={closeUpdateLocationinformation}
      />
    );
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(closeUpdateLocationinformation).toHaveBeenCalled();
  });
});
