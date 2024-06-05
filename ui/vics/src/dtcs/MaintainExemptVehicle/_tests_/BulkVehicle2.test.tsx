import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BulkVehicle2 from "../BulkVehicle2";

test("renders BulkVehicle component", () => {
    render(<BulkVehicle2 />);
    // Add your assertions here
});


test('should click Save ', () => {
    render(<BulkVehicle2 />)
    const input16 = screen.queryByRole('button7', { name: '/Save/' })
    // Events and assertions...
    if (input16) {
      fireEvent.click(input16);
  }
  })

  test('should click cancel ', () => {
    render(<BulkVehicle2 />)
    const input17 = screen.queryByRole('button8', { name: '/Cancel/' })
    // Events and assertions...
    if (input17) {
      fireEvent.click(input17);
  }
  })

  test('should click New Entry ', () => {
    render(<BulkVehicle2 />)
    const input18 = screen.queryByRole('button6', { name: '/New Entry/' })
    // Events and assertions...
    if (input18) {
      fireEvent.click(input18);
  }

  })