import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DefineTestPassingStandardTaSpecificTable from '../DefineTestPassingStandardTaSpecificTable';

const uservalidityPeriodData = [
  {
    id: "1",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "2",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "2",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "2",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "2",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  // Add more test data as needed
];
describe('DefineTestPassingStandardTaSpecificTable', () => {
  it('renders without crashing', () => {
    render(<DefineTestPassingStandardTaSpecificTable uservalidityPeriodData={uservalidityPeriodData} />);
  });

  it('renders the correct number of rows', () => {
    const { getAllByTestId } = render(<DefineTestPassingStandardTaSpecificTable uservalidityPeriodData={uservalidityPeriodData} />);
    const rows = getAllByTestId('table-row');
    expect(rows.length).toBe(uservalidityPeriodData.length);
  });

  it('toggles switch state when clicked', () => {
    const { getAllByTestId } = render(<DefineTestPassingStandardTaSpecificTable uservalidityPeriodData={uservalidityPeriodData} />);
    const switchElements = getAllByTestId((_, element) => element.getAttribute('data-testId')?.startsWith('switch_element_'));
    switchElements.forEach((switchElement, index) => {
      fireEvent.click(switchElement);  
      expect(switchElement).toHaveTextContent(index % 2 === 0 ? 'Active' : 'Disable');
    });
  });
});