import React from 'react';
import {  render } from '@testing-library/react';
import Examination from '../Examination';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import "@testing-library/jest-dom";

describe('Examination Component', () => {
  test('renders correctly', () => {
    const updateCenter = jest.fn();
    const updatePrimaryCode = jest.fn();
    const updateSuppCode  = jest.fn();
    const updateDate  = jest.fn();
    render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
      </Provider>
    );
  });
  test(' should be able to select primary code and supplementary code', () => {
    const updateCenter = jest.fn();
    const updatePrimaryCode = jest.fn();
    const updateSuppCode  = jest.fn();
    const updateDate  = jest.fn();
    render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
      </Provider>
      );
      updatePrimaryCode();
      updateSuppCode();
      expect(updatePrimaryCode).toBeCalled();
      expect(updateSuppCode).toBeCalled();
       });
});
