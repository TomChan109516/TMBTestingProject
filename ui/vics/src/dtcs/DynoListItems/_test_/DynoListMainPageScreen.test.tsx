import { render, screen, fireEvent } from "@testing-library/react";
import DynoListMainPageScreen from "../DynoListMainPageScreen";
import React from "react";

describe("DynoListMainPageScreen", () => {
  test("renders DynoListMainPageScreen component", () => {
    render(<DynoListMainPageScreen />);
    // Add assertions to check if the component renders correctly
  });
describe("DynoListMainPageScreen", () => {
    it("renders without crashing", () => {
      render(<DynoListMainPageScreen />);
    });

    it("renders the correct header", () => {
      render(<DynoListMainPageScreen />);

      expect(
        screen.getByText("Dyno Room Control -Dyno Room 1")
      ).toBeInTheDocument();
    });
    
  test("handles switch change correctly", () => {
    render(<DynoListMainPageScreen />);
    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);
    // Add assertions to check if the switch change is handled correctly
  });

    it('renders the "Open/Close" switch', () => {
      render(<DynoListMainPageScreen />);

      expect(screen.getByText("Open")).toBeInTheDocument();

      expect(screen.getByText("Close")).toBeInTheDocument();
    });

    it('renders the "Dyno Workload List" and "Dyno Draw List" tabs', () => {
      render(<DynoListMainPageScreen />);

      expect(screen.getByText("Dyno Workload List")).toBeInTheDocument();

      expect(screen.getByText("Dyno Draw List")).toBeInTheDocument();
    });

    test("renders DynoListMainPageScreen component", () => {
      render(<DynoListMainPageScreen />);
    });

  });

});
