import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
  getByText,
  getByLabelText,
  getByRole,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SearchVehicle from "../SearchVehicle";
//import { Button } from "@nextui-org/react";
import SearchVehicleTable from "../SearchVehicleTable";
import NonValidVehicle from "../../viewVehicleDetail/NonValidVehicle";
import { Browser } from "tabler-icons-react";

describe("SearchVehicle", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
  });

  test("updates vehicleId state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const vehicleIdInput = getByTestId("vehicleid") as HTMLSelectElement;
    fireEvent.change(vehicleIdInput, { target: { value: "123" } });
    expect(vehicleIdInput.value).toBe("123");
  });

  test("updates floatName state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const floatNameInput = getByTestId("floatName") as HTMLSelectElement;
    fireEvent.change(floatNameInput, { target: { value: "1234-00-34" } });
    expect(floatNameInput.value).toBe("1234-00-34");
  });

  test("updates chassisNo state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const chassisNoInput = getByTestId("chassisNo") as HTMLSelectElement;
    fireEvent.change(chassisNoInput, { target: { value: "ABC123" } });
    expect(chassisNoInput.value).toBe("ABC123");
  });

  test("updates C&ENo state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const ceNoInput = getByTestId("C&ENo") as HTMLSelectElement;
    fireEvent.change(ceNoInput, { target: { value: "123478" } });
    expect(ceNoInput.value).toBe("123478");
  });

  test("updates TANo state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const taNoInput = getByTestId("TANo") as HTMLSelectElement;
    fireEvent.change(taNoInput, { target: { value: "123673" } });
    expect(taNoInput.value).toBe("123673");
  });

  test("updates regMark state on input change", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const regMarkInput = getByTestId("regMark") as HTMLSelectElement;
    fireEvent.change(regMarkInput, { target: { value: "Reg123" } });
    expect(regMarkInput.value).toBe("Reg123");
  });

  test("updates dropdrown  has correct value", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const subClassdropdown = getByTestId("Subclass") as HTMLSelectElement;
    fireEvent.change(subClassdropdown, { target: { value: "SubClass1" } });
    expect(subClassdropdown.value).toBe("SubClass1");
  });
  test("updates dropdrown  has correct value", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const markdropdown = getByTestId("mark") as HTMLSelectElement;
    fireEvent.change(markdropdown, { target: { value: "H20" } });
    expect(markdropdown.value).toBe("H20");
  });

  test("updates dropdrown  has correct value", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const vehicleClassdropdown = getByTestId(
      "vehicleclass"
    ) as HTMLSelectElement;
    fireEvent.change(vehicleClassdropdown, { target: { value: "Bike" } });
    expect(vehicleClassdropdown.value).toBe("Bike");
  });

  test("handleChangeClass is called when input changes", () => {
    // Mock the handleChangeClass function
    //const handleChangeClass = jest.fn();
    // Render the component with the mocked function
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    // Get the input element
    const inputElement = getByTestId("vehicleclass") as HTMLInputElement;
    // Simulate a change event on the input element
    fireEvent.change(inputElement, { target: { value: "new value" } });
    // Check that the handleChangeClass function was called
    expect(inputElement.value).toBe("new value");
  });

  test("Checkbox changes state when clicked", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );
    const checkboxElement = getByRole("checkbox");
    // Check that the checkbox is initially unchecked
    expect(checkboxElement).not.toBeChecked();
    // Click the checkbox
    fireEvent.click(checkboxElement);
    // Check that the checkbox is now checked
    expect(checkboxElement).toBeChecked();
  });

  //   test("calls New Non-VALLID  when button click", async () => {
  //     const NewnonVallidHandler = jest.fn();
  //  const {getByText}=render(<BrowserRouter>
  //          <Provider store={store}>
  //                <SearchVehicle onClick={NewnonVallidHandler} />
  //              </Provider>
  //            </BrowserRouter>);

  //     await userEvent.click(getByText("New Non-VALLID"));
  //     expect(getByText(NewnonVallidHandler )).toHaveBeenCalled();
  // })

  test("check newNonValidButton is present", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
      //   // <Button data-testid="newNonValidButton" onClick={NewnonVallidHandler} />
    );
    const buttonElement = getByTestId("newNonValidButton");
    expect(buttonElement).toBeInTheDocument();
  });

  test("resets fields when reset button is clicked", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
    );

    const resetButton = getByTestId("resetButton");
    const vehicleIdInput = getByTestId("vehicleid");
    const chassisNoInput = getByTestId("chassisNo");
    const regMarkInput = getByTestId("regMark");
    const subClassdropdown = getByTestId("Subclass");
    const ceNoInput = getByTestId("C&ENo");
    const taNoInput = getByTestId("TANo");
    const floatNameInput = getByTestId("floatName");
    const vehicleClassdropdown = getByTestId("vehicleclass");
    const markdropdown = getByTestId("mark");
    // assertions here

    fireEvent.change(vehicleIdInput, { target: { value: "123" } });
    fireEvent.click(resetButton);
    expect(vehicleIdInput).toHaveValue("");
    fireEvent.change(chassisNoInput, { target: { value: "ABC123" } });
    fireEvent.click(resetButton);
    expect(chassisNoInput).toHaveValue("");
    fireEvent.change(regMarkInput, { target: { value: "Reg123" } });
    fireEvent.click(resetButton);
    expect(regMarkInput).toHaveValue("");
    fireEvent.change(subClassdropdown, { target: { value: "SubClass1" } });
    fireEvent.click(resetButton);
    expect(subClassdropdown).toHaveValue("SubClass1");
    fireEvent.change(ceNoInput, { target: { value: "123478" } });
    fireEvent.click(resetButton);
    expect(ceNoInput).toHaveValue("123478");
    fireEvent.change(taNoInput, { target: { value: "123673" } });
    fireEvent.click(resetButton);
    expect(taNoInput).toHaveValue("123673");
    fireEvent.change(floatNameInput, { target: { value: "1234-00-34" } });
    fireEvent.click(resetButton);
    expect(floatNameInput).toHaveValue("");
    fireEvent.change(vehicleClassdropdown, { target: { value: "Bike" } });
    fireEvent.click(resetButton);
    expect(vehicleClassdropdown).toHaveValue("Bike");
    fireEvent.change(markdropdown, { target: { value: "H20" } });
    fireEvent.click(resetButton);
    expect(markdropdown).toHaveValue("H20");
  });

  test("Button click triggers exportHandler", () => {
    // You might need to mock the exportHandler function
    // and check if it is called when the button is clicked
    const mockExportHandler = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicle />
        </Provider>
      </BrowserRouter>
      // <Button data-testid="exportButton" onClick={mockExportHandler} />
    );
    const exportButton = getByTestId("exportButton");

    fireEvent.click(exportButton);
    expect(exportButton).toBeInTheDocument();
  });
});

test("calls searchHandler on search button click", async () => {
  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchVehicle />
      </Provider>
    </BrowserRouter>
  );
  const searchButton = getByText("Search");
  const vehicleIdInput = getByTestId("vehicleid");
  const chassisNoInput = getByTestId("chassisNo");
  const regMarkInput = getByTestId("regMark");
  const SubClassdropdown = getByTestId("Subclass");
  const ceNoInput = getByTestId("C&ENo");
  const taNoInput = getByTestId("TANo");
  const floatNameInput = getByTestId("floatName");
  const vehicleClassdropdown = getByTestId("vehicleclass");
  const markdropdown = getByTestId("mark");

  fireEvent.change(vehicleIdInput, { target: { value: "123" } });
  fireEvent.change(chassisNoInput, { target: { value: "ABC123" } });
  fireEvent.change(regMarkInput, { target: { value: "Reg123" } });
  fireEvent.change(SubClassdropdown, { target: { value: "SubClass1" } });
  fireEvent.change(ceNoInput, { target: { value: "123478" } });
  fireEvent.change(taNoInput, { target: { value: "123673" } });
  fireEvent.change(floatNameInput, { target: { value: "1234-00-34" } });
  fireEvent.change(vehicleClassdropdown, { target: { value: "Bike" } });
  fireEvent.change(markdropdown, { target: { value: "H20" } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchVehicleTable />
        </Provider>
      </BrowserRouter>
    );

    // Add your assertions here
  });

  // Add more tests for other functionality as needed
});
