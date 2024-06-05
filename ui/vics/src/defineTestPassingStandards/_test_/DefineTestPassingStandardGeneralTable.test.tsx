import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DefineTestPassingStandardGeneralTable from '../DefineTestPassingStandardGeneralTable';

const mockData = [
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
  { id: 1, TestType: 'Type1', VehicleClass: 'Class1', ManufactureDate: '2022-01-01', FirstRegDate: '2022-01-02', EffectivePeriod: '2022', UpdateTime: '12:00' },
];
describe('DefineTestPassingStandardTaSpecificTable', () => {
  it('renders without crashing', () => {
    render(<DefineTestPassingStandardGeneralTable uservalidityPeriodData={mockData} />);
  });

  it('renders the correct number of rows', () => {
    const { getAllByTestId } = render(<DefineTestPassingStandardGeneralTable uservalidityPeriodData={mockData} />);
    const rows = getAllByTestId('table-row');
    expect(rows.length).toBe(mockData.length);
  });

  it('toggles switch state when clicked', () => {
    const { getAllByTestId } = render(<DefineTestPassingStandardGeneralTable uservalidityPeriodData={mockData} />);
    const switchElements = getAllByTestId((_, element) => element.getAttribute('data-testId')?.startsWith('switch_element_'));
    switchElements.forEach((switchElement, index) => {
      fireEvent.click(switchElement);
      expect(switchElement).toHaveTextContent(index % 2 === 0 ? 'Active' : 'Disable');
    });
  });
});