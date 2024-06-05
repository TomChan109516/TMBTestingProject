import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../store/store';
import React from 'react';
import TiltingStabilityTest from './TiltingStabilityTest';

test('renders TiltingStabilityTest component', () => {
  render(
    <Provider store={store}>
      <Router>
        <TiltingStabilityTest />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/Tilting Stability Test/i);
  expect(linkElement).toBeInTheDocument();
});