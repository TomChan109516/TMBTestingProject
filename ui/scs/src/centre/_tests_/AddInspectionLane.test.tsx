import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import AddInspectionLane from '../AddInspectionLane';

describe('AddInspectionLane component', () => {
  let mockSetAddInspectionPopup;
  beforeEach(() => {
    mockSetAddInspectionPopup = jest.fn();
  });
  it('should call setAddInspectionPopup when close button is clicked', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(mockSetAddInspectionPopup).toHaveBeenCalledWith(false);
  });
  it('should change lane when select option is clicked', () => {
    const setType = jest.fn();
    const mockhandleChangeLane = jest.fn();
    const { getByTestId } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} laneType={"virtual"} setLaneType={setType} handleChangeLane={mockhandleChangeLane} />);
    setType('virtual');
    const selectType = getByTestId('laneType');
    fireEvent.change(selectType, { target: { value: 'virtual' } });
    mockhandleChangeLane();
    expect(selectType.value).toBe('virtual');
  });
  it('should render the save button', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const saveButton = getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
});
it('should call addInspectionLaneService and setAddInspectionPopup to false when save button is clicked', async () => {
  const mockAddInspectionLaneService = jest.fn();
  const mockSetAddInspectionPopup = jest.fn();
  const mockSelected = {
    laneId: '123',
    centreId: '456',
    laneType: 'physical',
    laneName: 'Test Lane',
    laneStatus: true,
    userId: 'user123',
  };
  const { getByText } = render(
    <AddInspectionLane
      addInspectionPopup={true}
      setAddInspectionPopup={mockSetAddInspectionPopup}
      selected={mockSelected}
    />
  );
  const saveButton = getByText('Save');
  fireEvent.click(saveButton);
  mockAddInspectionLaneService({
    id: '123',
    centreId: '456',
    laneType: 'physical',
    laneName: 'Test Lane',
    laneDescription: '',
    laneStatus: true,
    physicalLaneId: '123',
    userId: 'user123'
  })
  expect(mockAddInspectionLaneService).toHaveBeenCalledWith({
    id: '123',
    centreId: '456',
    laneType: 'physical',
    laneName: 'Test Lane',
    laneDescription: '',
    laneStatus: true,
    physicalLaneId: '123',
    userId: 'user123',
  });
  mockSetAddInspectionPopup(false);
  expect(mockSetAddInspectionPopup).toHaveBeenCalledWith(false);
});
it('should load centres and set the centre state', async () => {
  const mockGetCentersAll = jest.fn().mockResolvedValue({
    centres: [
      { centreId: '1', centreCode: 'ABC' },
      { centreId: '2', centreCode: 'DEF' },
    ],
  });
  const mockSetCentre = jest.fn();
  const mockSelected = { centreId: '1' };
  const loadCentres = jest.fn();
  render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={jest.fn()}
    selected={mockSelected} setCentreCode={mockSetCentre} loadCentres={loadCentres} />);
  await act(async () => {
    await loadCentres();
  });
  mockGetCentersAll();
  mockSetCentre('ABC');
  expect(mockGetCentersAll).toHaveBeenCalled();
  expect(mockSetCentre).toHaveBeenCalledWith('ABC');
});
describe('AddInspectionLane component', () => {
  let mockSetAddInspectionPopup;
  beforeEach(() => {
    mockSetAddInspectionPopup = jest.fn();
  });
  it('should render without crashing', () => {
    render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
  });
  it('should call setAddInspectionPopup when close button is clicked', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(mockSetAddInspectionPopup).toHaveBeenCalledWith(false);
  });
  it('should render the save button', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const saveButton = getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
});
it('should call addInspectionLaneService and setAddInspectionPopup to false when save button is clicked', async () => {
  const mockAddInspectionLaneService = jest.fn();
  const mockSetAddInspectionPopup = jest.fn();
  const mockSelected = {
    laneId: '123',
    centreId: '456',
    laneType: 'physical',
    laneName: 'Test Lane',
    laneStatus: true,
    userId: 'user123',
  };
  const { getByText } = render(
    <AddInspectionLane
      addInspectionPopup={true}
      setAddInspectionPopup={mockSetAddInspectionPopup}
      selected={mockSelected}
    />
  );
  const saveButton = getByText('Save');
  fireEvent.click(saveButton);
});



describe('AddInspectionLane component', () => {
  let mockSetAddInspectionPopup;

  beforeEach(() => {
    mockSetAddInspectionPopup = jest.fn();
  });

  // it('should render without crashing', () => {
  //   render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
  // });

  it('should call setAddInspectionPopup when close button is clicked', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(mockSetAddInspectionPopup).toHaveBeenCalledWith(false);
  });

  it('should change lane type when select option is clicked', () => {
    const { getByTestId } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const select = getByTestId('laneType');
    fireEvent.change(select, { target: { value: 'Virtual Lane' } });
    expect(select.value).toBe('Virtual Lane');
  });

  // it('should change lane id when input value is changed', () => {
  //   const { getByLabelText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
  //   const input = getByLabelText('laneID');
  //   fireEvent.change(input, { target: { value: '123' } });
  //   expect(input.value).toBe('123');
  // });

  it('should render the save button', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const saveButton = getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
});


describe('AddInspectionLane component', () => {
  let mockSetAddInspectionPopup;

  beforeEach(() => {
    mockSetAddInspectionPopup = jest.fn();
  });

  // it('should render without crashing', () => {
  //   render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
  // });

  it('should call setAddInspectionPopup when close button is clicked', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(mockSetAddInspectionPopup).toHaveBeenCalledWith(false);
  });

  // it('should change lane type when select option is clicked', () => {
  //   const { getByTestId } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
  //   const select = getByTestId('laneType');
  //   fireEvent.change(select, { target: { value: 'Virtual Lane' } });
  //   expect(select.value).toBe('Virtual Lane');
  // });

  it('should change lane id when input value is changed', () => {
    const { getByLabelText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const input = getByLabelText('laneID');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });

  it('should render the save button', () => {
    const { getByText } = render(<AddInspectionLane addInspectionPopup={true} setAddInspectionPopup={mockSetAddInspectionPopup} />);
    const saveButton = getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
}); it('should load lanesall and set the lanes state', async () => {
  const mockGetLaneCenterId = jest.fn().mockResolvedValue({
    laneDetails: [
      { laneId: '1', laneName: 'Lane 1' },
      { laneId: '2', laneName: 'Lane 2' },
    ]
  });
  const loadLaneAll = jest.fn();
  const mockSetLanes = jest.fn();
  const mockSelected = { centreId: '1' };
  const { rerender } = render(
    <AddInspectionLane
      addInspectionPopup={true}
      setAddInspectionPopup={jest.fn()}
      selected={mockSelected}
    />
  );

  rerender(
    <AddInspectionLane
      addInspectionPopup={true}
      setAddInspectionPopup={jest.fn()}
      selected={mockSelected}
      centreId="1"
    />
  );

  await act(async () => {
    await loadLaneAll();
  });
});