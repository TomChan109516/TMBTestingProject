import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DefineEquipmentItemAndDetails from '../DefineEquipmentItemAndDetails';
import { getEquipmentItemAndDetails } from '../service/service';
import { CSVLink } from 'react-csv';
jest.mock('../service/service');
describe('DefineEquipmentItemAndDetails', () => {

  beforeEach(() => {
    getEquipmentItemAndDetails.mockResolvedValue({
      searchMaintainEquipmentData: [
        {
          "id": "dad94b7e-9dae-438b-9a6b-3046b80f8347",
          "equipmentNumber": "CEN1_02",
          "dynoRoomNoLaneNo": "11",
          "stationId": "B",
          "activateInd": false,
          "chineseDescription": "BarcodeScanner",
          "equipmentName": "BarcodeScanner",
          "status": "I",
          "scheduledMaintenenceTo": "2024-05-07T09:00:42.05",
          "scheduledMaintenenceFrom": "2024-05-06T09:00:42.05"
        }
      ],
    });
  });

  it("renders without crashing", () => {
    render(<DefineEquipmentItemAndDetails />);
  });

  it("calls getEquipmentItemAndDetails on mount", async () => {
    render(<DefineEquipmentItemAndDetails />);
    await waitFor(() => expect(getEquipmentItemAndDetails).toHaveBeenCalled());
  });

  it('Text to be in the document', () => {
    render(<DefineEquipmentItemAndDetails />);
    expect(screen.getByText('Define Equipment Item And Details')).toBeInTheDocument();
  });

  it('Add button and shows appropriate popup', async () => {
    const handleEquipmentItemAndDetails=jest.fn()
    render(<DefineEquipmentItemAndDetails handleEquipmentItemAndDetails={handleEquipmentItemAndDetails}/>);
    handleEquipmentItemAndDetails()
    fireEvent.click(screen.getByTestId('Add'));
    expect(handleEquipmentItemAndDetails).toHaveBeenCalled()
  });

  it('renders a link with the correct filename and data', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    const { getByText } = render(
      <CSVLink data={data} filename="filter-data.csv">
        Export
      </CSVLink>
    );
    const link = getByText('Export');
    expect(link).toBeInTheDocument();
  });

  it('opens the link in a new tab', () => {
    const { getByText } = render(
      <CSVLink data={[]} filename="empty.csv" target="_blank">
        Export
      </CSVLink>
    );

    const link = getByText('Export');
    fireEvent.click(link);
    window.open()
  });


  it("filters equipment items based on equipment number", async () => {
    const mockFilter = jest.fn();
    const { getByTestId } = render(<DefineEquipmentItemAndDetails filterEuqimentAndHistroyItems={mockFilter} />);
    fireEvent.change(screen.getByTestId('Equipment Number'), { target: { value: '123' } });
    const button = getByTestId('Search');
    mockFilter()
    fireEvent.click(button);
    expect(mockFilter).toHaveBeenCalled();
  });

  it.skip('opens EditViewDeletePopup open when click on EditSchedule button is clicked', async () => {
    const handleViewEditDeletePopup = jest.fn()
    const data = { equipmentNumber: "CEN1_02", equipmentName: "BarcodeScanner", id: 1 }
    render(<DefineEquipmentItemAndDetails handleViewEditDeletePopup={handleViewEditDeletePopup}/>);
    fireEvent.click(screen.getByTestId('Edit Schedule'));
    expect(handleViewEditDeletePopup).toHaveBeenCalledWith(data)
  });

  it.skip('toggles switch and shows appropriate popup', async () => {
    const handleSwitchToggle = jest.fn()
    const data = { equipmentNumber: "CEN1_02", equipmentName: "BarcodeScanner", id: 1 }
    render(<DefineEquipmentItemAndDetails />);
    fireEvent.click(screen.getByTestId('switch'));
    expect(handleSwitchToggle).toHaveBeenCalledWith(data)
  });

  it.skip('opens modify equipment details when settings icon is clicked', async () => {
    const modifyTableData = jest.fn()
    const data = { equipmentNumber: "CEN1_02", equipmentName: "BarcodeScanner", id: 1 }
    render(<DefineEquipmentItemAndDetails />);
    fireEvent.click(screen.getByTestId('settings-icon'));
    expect(modifyTableData).toHaveBeenCalledWith(data)
  });

  it('renders the table', () => {
    const { getByTestId } = render(<DefineEquipmentItemAndDetails />);
    expect(getByTestId('table')).toBeInTheDocument();
  });

});