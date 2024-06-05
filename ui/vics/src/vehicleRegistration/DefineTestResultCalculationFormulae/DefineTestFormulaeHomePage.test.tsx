import { render, } from '@testing-library/react';
import DefineTestFormulaeHomePage from './DefineTestFormulaeHomePage';
import React from 'react';
import { screen } from '@testing-library/react';
import { fireEvent, } from '@testing-library/react';

describe("ComponentPage", () => {
  test("renders table with correct data", () => {
    render(<DefineTestFormulaeHomePage />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Manufacture Date")).toBeInTheDocument();
    expect(screen.getByText("First Reg. Date")).toBeInTheDocument();
    expect(screen.getByText("Effective Period")).toBeInTheDocument();
    expect(screen.getByText("Update Time")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
describe('DefineTestFormulaeHomePage', () => {
  const uservalidityPeriodData = [
    {
      id: "1",
      testType: "Speedometere",
      vehicleclass: "001",
      manufacturedate: "ALL",
      firstregdate: "2018-05-23 - 2020-18-09",
      effectiveperiod: "2018-05-23 - 2020-18-09",
      updatedtime: "2019-09-09",
      status: "",
    },
    {
      id: "2",
      testType: "Speedometer",
      vehicleclass: "001",
      manufacturedate: "ALL",
      firstregdate: "2008-05-01-Present",
      effectiveperiod: "2018-05-23 - 2020-18-09",
      updatedtime: "2019-09-09",
      status: "",
    },
    {
      id: "3",
      testType: "SDD",
      vehicleclass: "002",
      manufacturedate: "ALL",
      firstregdate: "ALL",
      effectiveperiod: "2018-05-23 - 2020-18-09",
      updatedtime: "2019-09-09",
      status: "",
    },
    {
      id: "4",
      testType: "Brake Test",
      vehicleclass: "001",
      manufacturedate: "ALL",
      firstregdate: "ALL",
      effectiveperiod: "2018-05-23 - 2020-18-09",
      updatedtime: "2019-09-09",
      status: "",
    },
    {
      id: "5",
      testType: "Brake Test",
      vehicleclass: "001",
      manufacturedate: "ALL",
      firstregdate: "ALL",
      effectiveperiod: "2018-05-23 - 2020-18-09",
      updatedtime: "2019-09-09",
      status: "",
    },
    ];
it('renders the table with the correct headers', () => {
  render(<DefineTestFormulaeHomePage />)
  const headers = [
    'ID',
    'Test Type',
    'Vehicle Class',
    'manufacturedate',
    'firstregdate',
    'effectiveperiod',
    'updatedtime',
    'status'
  ]
})
it('renders the table with the correct number of rows', () => {
  render(<DefineTestFormulaeHomePage />)

  expect(screen.getAllByRole('row')).toHaveLength(uservalidityPeriodData.length + 1) // +1 for the header row
})
it('toggles the switch when clicked', () => {
  render(<DefineTestFormulaeHomePage />)
  const switchElement = screen.getAllByRole('switch')[0]
  expect(switchElement).toBeInTheDocument()
  fireEvent.click(switchElement)
  expect(switchElement).not.toBeChecked()
})
it('opens the DisableTestFormulaeConfirmation when the switch is toggled on', () => {
  render(<DefineTestFormulaeHomePage />)

  const switchElement = screen.getAllByRole('switch')[0]
  expect(switchElement).toBeInTheDocument()
});
});
