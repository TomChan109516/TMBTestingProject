import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DeleteLocationinformation from "./DeleteLocationinformation";

describe("DeleteLocationinformation", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <DeleteLocationinformation
        showDeleteLocationinformation={true}
        closeDeleteLocationinformation={() => {}}
      />
    );
    expect(getByText("Information")).toBeInTheDocument();
    expect(
      getByText("Are you sure to delete the location Information?")
    ).toBeInTheDocument();
  });

  test("calls closeDeleteLocationinformation with false when No button is clicked", () => {
    const closeDeleteLocationinformation = jest.fn();
    const { getByText } = render(
      <DeleteLocationinformation
        showDeleteLocationinformation={true}
        closeDeleteLocationinformation={closeDeleteLocationinformation}
      />
    );
    const noButton = getByText("No");
    fireEvent.click(noButton);
    expect(closeDeleteLocationinformation).toHaveBeenCalledWith(false);
  });
});
