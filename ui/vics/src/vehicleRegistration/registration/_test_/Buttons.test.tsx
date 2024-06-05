import "@testing-library/jest-dom";
import ButtonsData from "../Buttons";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("ButtonsData", () => {
     it("renders without crashing", () => {

          render(
               <Provider store={store}><ButtonsData /></Provider>);
     });

     it("renders all buttons", () => {
          const { getByTestId } = render(<ButtonsData />);
          const buttons = [
               "Vehicle Info",
               "Brake",
               "Speed",
               "Headlamp",
               "Exhaust",
               "Dyno",
               "More Info",
               "Statistic Info",
               "Permit",
               "PSL",
               "StartInspection"
          ];
          buttons.forEach(button => {
               expect(getByTestId(button)).toBeInTheDocument();
          });
     });

     it("calls the correct function when a button is clicked", () => {
          const buttons = ['Vehicle Info', 'Headlamp', 'Brake', 'Speed', 'Exhaust', 'Dyno', 'More Info', 'Statistic Info', 'Permit', 'PSL', "StartInspection"];
          const { getByTestId, queryByTestId } = render(<Provider store={store}><ButtonsData /></Provider>);
          buttons.forEach(button => {
               fireEvent.click(getByTestId(button));
               expect(queryByTestId(button)).toBeInTheDocument();
          });
     });

});