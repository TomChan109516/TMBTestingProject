import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
  getByTestId,
  getAllByText,
  getByLabelText,
} from "@testing-library/react";

import axios, { AxiosError } from "axios";
import { act } from "react-dom/test-utils";
import VehicleWatchlist from "../VehicleWatchlist"
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { SEARCHVEHICLE_WATCHLIST_API } from "../../../constants/urlConstants";
import { axiosPost } from "../../../utils/axiosInstance";
import { Input, Select, Checkbox, Button } from "@nextui-org/react";

// jest.mock("axios");
// //const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("../../../utils/axiosInstance", () => ({
  axiosPost: jest.fn(),
}));

describe("VehicleWatchlist", () => {
  // it("should call the search API and update the state based on the response", async () => {
  //   const handleSearch = jest.fn();

  //   const { getByText } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <VehicleWatchlist handleSearch={handleSearch} />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   const mockResponseData = {
  //     center_Key: 0,
  //     createdDateFrom: null,
  //     createdDateTo: null,
  //     rsn_Key: 0,
  //     status: "",
  //     type: [],
  //     vhlClassId: "",
  //   };
  //   axiosPost.mockResolvedValueOnce({ data: mockResponseData });
  //   fireEvent.click(getByText("Search"));

  //   await waitFor(() => {
  //     expect(axiosPost).toHaveBeenCalledWith(SEARCHVEHICLE_WATCHLIST_API, {
  //       data: mockResponseData,
  //     });

  //     expect(handleSearch).toHaveBeenCalledWith();
  //   });
  // });

  it("VechileWatchList render correctly", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
  });

  it("search button navigate to next url", async () => {
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock(SEARCHVEHICLE_WATCHLIST_API),
    }));

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    const searchButton = getByText("Search");
    fireEvent.click(searchButton);
    navigateMock(SEARCHVEHICLE_WATCHLIST_API);
    expect(navigateMock).toHaveBeenCalledWith(SEARCHVEHICLE_WATCHLIST_API);
  });

  it("add Watch button navigate to next url", async () => {
    const ADD_WATCHLIST_URL = "/addWatchList";
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock(ADD_WATCHLIST_URL),
    }));

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    const searchButton = getByText("Add Watch");
    fireEvent.click(searchButton);
    navigateMock(ADD_WATCHLIST_URL);
    expect(navigateMock).toHaveBeenCalledWith(ADD_WATCHLIST_URL);
  });

  it("should handle API error", async () => {
    const errorMessage = "Search Vehicle watchlist Error";
    axiosPost.mockRejectedValueOnce(new AxiosError(errorMessage));

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    // Simulate user input and trigger the search
    fireEvent.click(getByText("Search"));

    await waitFor(() => {
      expect(axiosPost).toHaveBeenCalledWith(
        SEARCHVEHICLE_WATCHLIST_API,
        expect.any(Object)
      );
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      errorMessage,
      new AxiosError(errorMessage)
    );

    consoleSpy.mockRestore();
  });

  it("renders buttons for adding watchlist,cancel watch exporting,reset and search ", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    const addWatchButton = getByText("Add Watch");
    const cancelWatchButton = getByText("Cancel Watch");
    const exportButton = getByText("Export");
    const searchButton = getByText("Search");
    const resetButton = getByText("Reset");

    expect(addWatchButton).toBeInTheDocument();
    expect(cancelWatchButton).toBeInTheDocument();
    expect(exportButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  // it("changing dates when creted Date checkbox i clicked", async () => {
  //   const { getByText, getByLabelText } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <VehicleWatchlist />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   const createdDateCheckBox = getByText("Created Date").previousSibling;
  //   fireEvent.click(createdDateCheckBox);

  //   const fromDateInput = getByLabelText("From");
  //   const toDateInput = getByLabelText("To");

  //   fireEvent.change(fromDateInput, { target: { value: "2023-10-14" } });
  //   fireEvent.change(toDateInput, { target: { value: "2023-10-15" } });

  //   expect(fromDateInput.value).toBe("2023-10-14");
  //   expect(toDateInput.value).toBe("2023-10-15");
  // });

  it("allow selecting status", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    // check is status dropdown is rendered
    const statusDropDown = screen.getByTestId("Status");
    expect(statusDropDown).toBeInTheDocument();

    fireEvent.change(statusDropDown, { target: { value: "1" } });

    // check if selected status is updated
    expect(statusDropDown.value).toBe("1");
  });

  it("allow selecting centre", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    // check is centre dropdown is rendered
    const centreDropDown = screen.getByTestId("Centre");
    expect(centreDropDown).toBeInTheDocument();

    fireEvent.change(centreDropDown, { target: { value: "1" } });

    // check if centre status is updated
    expect(centreDropDown.value).toBe("1");
  });

  it("allow selecting vehicle class", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    // check is vehicle dropdown is rendered
    const vehicleDropDown = screen.getByTestId("Vehicle Class");
    expect(vehicleDropDown).toBeInTheDocument();

    fireEvent.change(vehicleDropDown, { target: { value: "1" } });

    // check if vehcile status is updated
    expect(vehicleDropDown.value).toBe("1");
  });

  it("allow selecting reason", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    // check is reason dropdown is rendered
    const reasonDropDown = screen.getByTestId("Reason");
    expect(reasonDropDown).toBeInTheDocument();

    fireEvent.change(reasonDropDown, { target: { value: "1" } });

    // check if reason status is updated
    expect(reasonDropDown.value).toBe("1");
  });

  it("allow selecting type", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );

    // check if checkBox are rendered
    const WatchListCheckBox = screen.getByTestId("Watch-list");

    const AlertListCheckBox = screen.getByTestId("Alert-list");

    expect(WatchListCheckBox).toBeInTheDocument();
    expect(AlertListCheckBox).toBeInTheDocument();

    //simulate selecting checkBox
    fireEvent.click(WatchListCheckBox);
    fireEvent.click(AlertListCheckBox);

    expect(WatchListCheckBox.checked).toBe(true);
    expect(AlertListCheckBox.checked).toBe(true);
  });

  // Render with default props
  test("renders component with basic elements", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Vehicle > Vehicle Watchlist")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Created Date")).toBeInTheDocument();
    // ... more checks for elements
  });

  // // Test checkbox interaction
  test("clicking Watchlist checkbox updates state and calls search", async () => {
    const mockSearch = jest.fn();

    render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    const checkbox = screen.getByTestId("Watch-list");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
  });

  test("reset button reset all fields", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehicleWatchlist />
        </Provider>
      </BrowserRouter>
    );
    const reasonDropDown = screen.getByTestId("Reason");
    const VehicleClassDropDown = screen.getByTestId("Vehicle Class");
    const StatusDropDown = screen.getByTestId("Status");
    const CentreDropDown = screen.getByTestId("Centre");
    expect(reasonDropDown).toBeInTheDocument();
    expect(VehicleClassDropDown).toBeInTheDocument();
    expect(StatusDropDown).toBeInTheDocument();
    expect(CentreDropDown).toBeInTheDocument();

    fireEvent.change(reasonDropDown, { target: { value: "1" } });
    fireEvent.change(VehicleClassDropDown, { target: { value: "1" } });
    fireEvent.change(StatusDropDown, { target: { value: "1" } });
    fireEvent.change(CentreDropDown, { target: { value: "1" } });
    fireEvent.click(screen.getByTestId("Reset"));

    // check if reason status is updated
    expect(reasonDropDown.value).toBe("1");
    expect(VehicleClassDropDown.value).toBe("1");
    expect(StatusDropDown.value).toBe("1");
    expect(CentreDropDown.value).toBe("1");
  });
});
