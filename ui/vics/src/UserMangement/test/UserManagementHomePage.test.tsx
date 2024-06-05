import { render, fireEvent } from '@testing-library/react';
import UserManagementHomePage from '../UserManagementHomePage';
import React from 'react';

describe('UserManagementHomePage', () => {
  it('renders the component', () => {
    render(<UserManagementHomePage />);
  });

  it('updates the state when the switch is toggled', () => {
    const { getByTestId } = render(<UserManagementHomePage />);
    const switchElement = getByTestId('switch_element_0');

    fireEvent.click(switchElement);
  });

  it('renders the correct number of table rows based on the page size', () => {
    const { getAllByTestId } = render(<UserManagementHomePage />);
    const tableRows = getAllByTestId('table-row');
  });
});

describe('UserManagementHomePage', () => {
  it('renders the component', () => {
    render(<UserManagementHomePage />);
  });

  it('updates the state when the switch is toggled', () => {
    const { getByTestId } = render(<UserManagementHomePage />);
    const switchElement = getByTestId('switch_element_0');
    fireEvent.click(switchElement);
  });

  it('renders the correct number of table rows based on the page size', () => {
    const { getAllByTestId } = render(<UserManagementHomePage />);
    const tableRows = getAllByTestId('table-row');
  });

  it('renders the "Add" button', () => {
    const { getByText } = render(<UserManagementHomePage />);
    const addButton = getByText('Add');
    expect(addButton).toBeInTheDocument();
  });

  it('renders the "Search" button', () => {
    const { getByText } = render(<UserManagementHomePage />);
    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();

  });

});