import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import React from 'react';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Outlet</div>,
}));

const mockState = {
  login: {
    response: {
      isSuccess: false,
    },
  },
};

function rootReducer(state = mockState) {
  return state;
}

describe('ProtectedRoute', () => {
  test('renders Outlet when isAuthenticated is true', () => {
    const store = createStore(rootReducer, {
      login: {
        response: {
          isSuccess: true,
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route path="/protected" element={<ProtectedRoute />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(container.innerHTML).toContain('Outlet');
  });

  test('redirects to login page with clientip query parameter when isAuthenticated is false', () => {
    const store = createStore(rootReducer);
    localStorage.setItem('clientip', JSON.stringify('123.456.789.0'));

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route path="/protected" element={<ProtectedRoute />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(container.innerHTML).toContain('');
  });
});