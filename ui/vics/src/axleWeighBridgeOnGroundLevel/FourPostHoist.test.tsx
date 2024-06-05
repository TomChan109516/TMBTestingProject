import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../store/store';
import React from 'react';
import FourPostHoist from './FourPostHoist';

test('renders FourPostHoist component', () => {
  render(
    <Provider store={store}>
      <Router>
        <FourPostHoist />
      </Router>
    </Provider>
  );

  const component = screen.getByText(/Four Post Hoist/i);
  expect(component).toBeInTheDocument();

});

