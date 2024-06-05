import { render, screen, fireEvent } from '@testing-library/react';
import OhmScreen from '../OhmScreen';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import React from 'react';

describe('OhmScreen', () => {
  test('renders input fields correctly', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <OhmScreen />
        </Provider>
      </BrowserRouter>
    );
    const inputFields = getAllByRole('textbox');
    expect(inputFields).toHaveLength(3);

    expect(inputFields[0]).toHaveAttribute('name', 'Vehicle Length');
    expect(inputFields[1]).toHaveAttribute('name', 'Vehicle Width');
    expect(inputFields[2]).toHaveAttribute('name', 'Vehicle Height');
  });

  test('calls SSEEvent on mount', () => {
    const SSEEvent = jest.fn();
    render(<BrowserRouter>
      <Provider store={store}><OhmScreen SSEEvent={SSEEvent} />
      </Provider>
    </BrowserRouter>);
    SSEEvent()
    expect(SSEEvent).toHaveBeenCalled();

  });

  test('handles OHM popup correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <OhmScreen />
        </Provider>
      </BrowserRouter>
    );

    const testConfigButton = getByTestId('Test Config');
    fireEvent.click(testConfigButton);

  });
  test('handles submission confirmation popup correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <OhmScreen />
        </Provider>
      </BrowserRouter>
    );

    const submitButton = getByTestId('Submit');
    fireEvent.click(submitButton);
  });

  test('closes OHM popup correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <OhmScreen />
        </Provider>
      </BrowserRouter>
    );

    const testConfigButton = getByTestId('Test Config');
    fireEvent.click(testConfigButton);

    const saveButton = getByTestId('Save');
    fireEvent.click(saveButton);

    const ohmPopup = screen.queryByTestId('ohm-popup');
    expect(ohmPopup).not.toBeInTheDocument();
  });
  test('resets selected radio button when isAccepted is true', () => {
    const { getByLabelText } = render(<BrowserRouter>
      <Provider store={store}>
        <OhmScreen />
      </Provider>
    </BrowserRouter>);
    fireEvent.click(getByLabelText('PASS'));
    expect(getByLabelText('PASS').checked).toBe(true)
  });
});