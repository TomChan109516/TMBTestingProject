import React from 'react';
import { render } from '@testing-library/react';
import RecentAppoint from '../RecentAppointTable';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

test('renders RecentAppoint component', async () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
  }));
  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
  }));
 render(
    <Provider store={store}>
      <RecentAppoint recentAppointments={[]} />
    </Provider>
  );
});

test('mock recent appointments', () => {
  const mockRecentAppointments = [
    {
      appointmentDate: '2023-09-21',
      examCode: '123',
      center: 'Test Center',
      result: 'Pass',
      foc: 'Yes'
    }
  ];
  const useSelectorMock = jest.fn();
  useSelectorMock.mockReturnValue({ createAppointment: mockRecentAppointments });
});
