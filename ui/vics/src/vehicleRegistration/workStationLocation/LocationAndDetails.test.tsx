import React from "react";
import { fireEvent, render, waitFor,screen } from "@testing-library/react";
import LocationAndDetails from "./LocationAndDetails";
import getALLWorkstationLocation from "../workStationLocation/service/service";

jest.mock('../workStationLocation/service/service', () => ({
  getALLWorkstationLocation: jest.fn().mockResolvedValue({ data: 'mockedData' }),
}));


describe("LocationAndDetails", () => {
  const vehicleData = [
    {
      id: "1",
      code: "1",
      lane: "01",
      station: "A",
      name: "GF1A",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "2",
      code: "1111",
      lane: "01",
      station: "A",
      name: "GF1A",
      equipment: "1",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "2222",
      lane: "01",
      station: "B",
      name: "2222",
      equipment: "1",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "2",
      lane: "01",
      station: "B",
      name: "GF1B",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "3",
      lane: "01",
      station: "C",
      name: "GF1C",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "4",
      lane: "01",
      station: "D",
      name: "GF1D",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "5",
      lane: "01",
      station: "E",
      name: "GF1E",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "6",
      lane: "02",
      station: "A",
      name: "GF2A",
      equipment: "1",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "7",
      lane: "02",
      station: "B",
      name: "GF2B",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
    {
      id: "3",
      code: "8",
      lane: "02",
      station: "C",
      name: "GF2C",
      equipment: "0",
      operationU: "Update",
      operationD: "Delete",
    },
  ];
  
  test("renders correctly", () => {
    const { getByText } = render(<LocationAndDetails />);
    expect(getByText("Define Location And Details")).toBeInTheDocument();
  });

  it('updates page size when a different option is selected', () => {
    const { getByTestId } = render(<LocationAndDetails />);
    fireEvent.change(getByTestId('pagination'), { target: { value: '20' } });
    expect(getByTestId('pagination')).toHaveValue('20');
  });

  it('renders vehicle data', async() => {
    const { findByText } = render(<LocationAndDetails />);
    const headers = [
      'Location Code',
      'Component Name',
      'Lane NO.',
      'Station',
      'Location Name',
      'Equipment Type',
      'Operation'
    ]
 
    for (const header of headers) {
      await waitFor(() => {
        expect(findByText(header)).resolves.toBeInTheDocument();
      });
    }
  });

  it('renders the table with the correct number of rows', () => {
    render(<LocationAndDetails />)
    const rows = screen.queryAllByRole('row');
    expect(rows).toHaveLength(vehicleData.length + 1);

  })
  it('calls handleUpdateLocationinformation when update link is clicked', () => {
    const handleUpdateLocationinformation = jest.fn();
    const { getAllByTestId } = render(<LocationAndDetails vehicleData={vehicleData} handleUpdateLocationinformation={handleUpdateLocationinformation} />);
    fireEvent.click(getAllByTestId('update')[0]);
    handleUpdateLocationinformation()
    expect(handleUpdateLocationinformation).toHaveBeenCalled();
  });

  it('calls handleDeleteLocationinformation when delete link is clicked', () => {
    const handleDeleteLocationinformation = jest.fn();
    const { getAllByText } = render(<LocationAndDetails vehicleData={vehicleData} handleDeleteLocationinformation={handleDeleteLocationinformation} />);
    fireEvent.click(getAllByText('Delete')[0]); 
    handleDeleteLocationinformation()
    expect(handleDeleteLocationinformation).toHaveBeenCalled();
  });
});
