import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import SearchInspectionLanes from '../SearchInspectionLanes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import "@testing-library/jest-dom";
import { getCentersAll } from "../../login/service/login.service";
import { searchInspectionLanesService } from "../service/SearchInspectionLanesService";

jest.mock('../../utils/axiosInstance');
describe('SearchInspectionLanes', () => {
  test('handles centre selection', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchInspectionLanes />
        </Provider>
      </BrowserRouter>
    );
    const centreSelect = getByLabelText('centre');
    fireEvent.change(centreSelect, { target: { value: '1' } });
    expect(centreSelect.value).toBe('1');
  });
});
test("searches for appointment", () => {
  const search = jest.fn();
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchInspectionLanes />
      </Provider>
    </BrowserRouter>
  );
  const laneElement = getByTestId("laneId");
  fireEvent.change(laneElement, {
    target: { value: "1234" },
  });
});
describe('SearchInspectionLanes', () => {
  test('renders the component', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchInspectionLanes />
        </Provider>
      </BrowserRouter>);

    const laneSelect = getByTestId('laneId');
    const resetButton = getByText('Reset');
    const searchButton = getByText('Search');

    expect(laneSelect).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  test('resets the form', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchInspectionLanes />
        </Provider>
      </BrowserRouter>);
    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);
  });
  test('performs search', async () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchInspectionLanes />
        </Provider>
      </BrowserRouter>);
    const laneSelect = getByTestId('laneId');
    const searchButton = getByText('Search');
    fireEvent.change(laneSelect, { target: { value: '2' } });
    fireEvent.click(searchButton);
  });
  test('handles add lane button click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchInspectionLanes />
        </Provider>
      </BrowserRouter>);
    const addLaneButton = getByText('Add Lane');
    fireEvent.click(addLaneButton);
  });
  jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
  }));
  jest.mock("../service/SearchInspectionLanesService", () => ({
    searchInspectionLanesService: jest.fn(),
  }));
  jest.mock("../../login/service/login.service", () => ({
    getCentersAll: jest.fn(),
  }));
  jest.mock("../../examinationTimeSlot/service/timeLine.service");
  describe("SearchInspectionLanes", () => {
    const mockDispatch = jest.fn();
    const mockGetCentersAll = getCentersAll as jest.Mock;
    const mockLanesResponse = {
      laneDetails: [{
        "laneId": "3A7BEF44-E3DA-40FF-888D-7EFC0B632E76",
        "centreId": "23321883-2885-463B-80B0-3D23450E8EF1",
        "laneName": "25B",
        "laneType": "virtual",
        "virtualLaneId": null,
        "physicalLaneName": null,
        "laneDescription": "Lane 25B",
        "laneStatus": false,
        "userId": null,
        "laneTimeSlots": []
      }]
    }
    const mockSearchInspectionLanesService = searchInspectionLanesService as jest.Mock;
    const mockCentresResponse = { "centres": [{ "centreId": "0087594e-6e49-4fd5-a40a-4e369c8943d4", "centreCode": "TY13", "centreName": "transport 2nd floor", "centreHolidays": [] }, { "centreId": "013b1467-9cdd-4bc4-9339-74e77d3587c0", "centreCode": "TY22", "centreName": "Trans", "centreHolidays": [] }, { "centreId": "ff5eb70f-f424-4e0f-a74e-fe76dbfb6d32", "centreCode": "Ty26", "centreName": "Trans", "centreHolidays": [] }], "httpStatusCode": 200, "errorMessage": null }
    beforeEach(() => {
      mockGetCentersAll.mockResolvedValue(mockCentresResponse.centres);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    test("searches inspection lanes on button click", async () => {
      const { getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <SearchInspectionLanes />
          </Provider>
        </BrowserRouter>
      );
      const searchButton = getByText('Search');
      fireEvent.click(searchButton);
    });
    test("opens the add lane popup on button click", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SearchInspectionLanes />
          </Provider>
        </BrowserRouter>
      );
    });
    it('updates centreId and centreName when a centre is selected', async () => {
      const centreData = [
        { centreId: 'TY1', centreCode: 'Code1' },
        { centreId: 'TY2', centreCode: 'Code2' },
      ];
      const handleCentreData = jest.fn()
      const { getByTestId } = render(
        <BrowserRouter>
          <Provider store={store}>
            <SearchInspectionLanes centreData={centreData} />
          </Provider>
        </BrowserRouter>
      );
      const select = getByTestId('centre'); // assuming you have data-testid="centre-select" on your select element
      fireEvent.change(select, { target: { value: 'TY1' } });
      await act(async () => {
      });
      expect(select.value).toBe('TY1');
    });
  });
});



// import { render, waitFor } from "@testing-library/react";
// import SearchInspectionLanes from "./SearchInspectionLanes";
// import { getCentersAll } from "../login/service/login.service";

jest.mock("../../login/service/login.service");

// describe("SearchInspectionLanes", () => {
//   test("loads centres on component mount", async () => {
//     const mockGetCentersAll = getCentersAll as jest.Mock;
//     // mockGetCentersAll.mockResolvedValue({ centres: [] });

//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <SearchInspectionLanes />
//         </Provider>
//       </BrowserRouter>
//     );

//     await waitFor(() => expect(mockGetCentersAll).toHaveBeenCalled());

//     // Add your assertions here
//   });
// });