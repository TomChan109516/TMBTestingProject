import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import CalendarDates from '../timeLine/CalendarDates';
import { store } from '../../store/store';
import { getExamDates, getTimeSlots } from '../service/timeLine.service';

jest.mock('../service/timeLine.service');
describe('CalendarDates', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.skip('renders the component', async () => {
    const {getByText} = render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );

    expect(getByText('Examination TimeSlot')).toBeInTheDocument();
    expect(getByText('AM')).toBeInTheDocument();
    expect(getByText('PM')).toBeInTheDocument();
    expect(getByText('EV')).toBeInTheDocument();
  });

  test.skip('fetches exam dates and time slots on mount', async () => {
    render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );

    expect(getExamDates).toHaveBeenCalledTimes(1);
    // expect(getTimeSlots).toHaveBeenCalledTimes(1);
  });

  test.skip('displays the last update time', async () => {
    const mockDate = new Date('2022-01-01T00:00:00.000Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as String);

    render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );

    expect(screen.getByText('last update: 00:00:00')).toBeInTheDocument();
  });

  test.skip('refreshes exam dates when sync icon is clicked', async () => {
    render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );

    const syncIcon = screen.getByTestId('sync-icon');
    expect(syncIcon).toBeInTheDocument();

    syncIcon.click();

    expect(getExamDates).toHaveBeenCalledTimes(2);
  });

  test.skip('displays the correct tile class names', async () => {
    const noQuotaDays = ['2022-01-01', '2022-01-02'];
    const weekends = ['2022-01-08', '2022-01-09'];
    (getExamDates as jest.Mock).mockResolvedValueOnce({ noQuotaDays, weekends });

    render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );

    const tiles = screen.getAllByRole('gridcell');
    expect(tiles[0]).toHaveClass('no-quota');
    expect(tiles[6]).toHaveClass('weekend-date');
  });

  test.skip('dispatches selected date and time on selection', async () => {
    render(
      <Provider store={store}>
        <CalendarDates />
      </Provider>
    );
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));
    const tile = screen.getAllByRole('gridcell')[0];
    tile.click();

    expect(store.getState().examTimeSlot.selectedDate).not.toBe('');
    expect(store.getState().examTimeSlot.selectedTime).toBe('');
  });
});