import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EquipmentItemAndDetails from '../EquipmentItemAndDetails';

describe('EquipmentItemAndDetails', () => {
  const data=[]
  test('renders without crashing', () => {
    const { getByLabelText } = render(<EquipmentItemAndDetails showPopUP={true} header="Add New Equipment" data={data}/>);
    expect(getByLabelText('Equipment ID')).toBeInTheDocument();
  });

  test('calls the handleClose function when the close button is clicked', () => {
    const mockClose = jest.fn();
    const { getByText } = render(<EquipmentItemAndDetails closeEquipmentItemAndDetails={mockClose} showPopUP={true} header="Add New Equipment" data={data} />);
    mockClose();
    fireEvent.click(getByText('Cancel'));
    expect(mockClose).toHaveBeenCalled();
  });

  test('calls the save button is clicked', () => {
    const { getByText } = render(<EquipmentItemAndDetails showPopUP={true} header="Add New Equipment" data={data} />);
    expect(getByText('Save')).toBeInTheDocument();
  });

  test('updates the input value when typing in the Equipment ID input', () => {
    const { getByTestId } = render(<EquipmentItemAndDetails showPopUP={true} header="Add New Equipment" data={data}/>);
    const input = getByTestId('Equipment ID');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });

});