import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../store/store';
import React from 'react';
import AxleWeighBridgeOnGroundLevel from './AxleWeighBridgeOnGroundLevel';

test('renders AxleWeighBridgeOnGroundLevel component', () => {
  render(
    <Provider store={store}>
      <Router>
        <AxleWeighBridgeOnGroundLevel />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/Axle Weigh Bridge On Ground Level/i);
  expect(linkElement).toBeInTheDocument();
});