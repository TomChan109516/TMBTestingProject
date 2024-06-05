import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import VehicleTest from './VehicleTest';
import "@testing-library/jest-dom";
 
describe('VehicleTest', () => {
  let store;
 
  beforeEach(() => {
    store = createStore(() => ({
      submissionConfirmation: {
        vi: {
          isAccepted: false
        }
      },
      login:{
        userID: "",
      },
      data:{
        regdata: {},
      }
 
    }));
  });
 
  it('renders without crashing', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <VehicleTest />
      </Provider>
    );
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });
 
  it('renders the correct initial state', () => {
    const { getByText } = render(
      <Provider store={store}>
        <VehicleTest />
      </Provider>
    );
    expect(getByText('Test Start')).toBeInTheDocument();
  });
 
  it('changes button text on click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <VehicleTest />
      </Provider>
    );
    const button = getByText('Test Start');
    fireEvent.click(button);
    expect(getByText('Retest')).toBeInTheDocument();
  });
});