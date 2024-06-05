import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SweptCircleAndPortableBrakeRollerTester from '../SweptCircleAndPortableBrakeRollerTester'; // replace with the path to your SweptCircleAndPortableBrakeRollerTester component
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Router } from 'react-router-dom';

const store = configureMockStore()({
        data: {
            appointmentId: '1234567890',
            regdata: { vehicleId: '1234567890' }
        },
    });

describe('SweptCircleAndPortableBrakeRollerTester', () => {
  it('updates selectedRadio when a radio button is clicked', () => {
    const { getByTestId } = render(
        <Router location={''} navigator={undefined}><Provider store={store}>
        <SweptCircleAndPortableBrakeRollerTester title="Test" />
      </Provider></Router>
    );
    const radioButton = getByTestId('radio-button');
    fireEvent.click(radioButton);
  });

  it('shows the popup when the button is clicked', () => {
    const { getByTestId} = render(
        <Router location={''} navigator={undefined}>  <Provider store={store}>
        <SweptCircleAndPortableBrakeRollerTester title="Test" />
      </Provider></Router>
    );
    const button = getByTestId('submit-button');
    fireEvent.click(button);
  });
});