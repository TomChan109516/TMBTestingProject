import React from "react";
import DisableTestFormulaeConfirmation from "./DisableTestFormulaeConfirmation";
import { fireEvent, render } from "@testing-library/react";

it('renders the modal correctly when isOpen is true', () => {
  const mockSetIsDisableTestFormulaeConfirmation = jest.fn();
  const { getByText, getByTestId } = render(
    <DisableTestFormulaeConfirmation setIsDisableTestFormulaeConfirmation={mockSetIsDisableTestFormulaeConfirmation} />
  );
  expect(getByText('Disable Test Formulae')).toBeInTheDocument();
  expect(getByTestId('Do you confirm to disable this Disable Passing Standard')).toBeInTheDocument();
  expect(getByText('Yes')).toBeInTheDocument();
  expect(getByText('No')).toBeInTheDocument();
});

it('calls setIsDisableTestFormulaeConfirmation when No button is clicked', () => {
  const mockSetIsDisableTestFormulaeConfirmation = jest.fn();
  const { getByText } = render(
    <DisableTestFormulaeConfirmation setIsDisableTestFormulaeConfirmation={mockSetIsDisableTestFormulaeConfirmation} />
  );
  fireEvent.click(getByText('No'));
  expect(mockSetIsDisableTestFormulaeConfirmation).toHaveBeenCalledWith(false);
});

it('displays the correct ID', () => {
  const mockSetIsDisableTestFormulaeConfirmation = jest.fn();
  const { getByTestId } = render(
    <DisableTestFormulaeConfirmation setIsDisableTestFormulaeConfirmation={mockSetIsDisableTestFormulaeConfirmation} />
  );
  expect(getByTestId('ID')).toHaveTextContent('ID:5');
});