import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NotesAndAlerts from '../NotesAndAlerts';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import "@testing-library/jest-dom";

describe('NotesAndAlerts Component', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <NotesAndAlerts />
      </Provider>
    );
  });
  it('should render notes and alerts from the Redux store', () => {
    const notesAlerts = jest.fn();
    const mockNotesAndAlerts = 'Sample Notes and Alerts';
    notesAlerts.mockReturnValue(mockNotesAndAlerts);
    const { getByTestId } = render(
      <Provider store={store}>
        <NotesAndAlerts />
      </Provider>
    );
    waitFor(()=>{
      expect(getByTestId('notesAlert')).toBeinTheDocument();
    })
  });
});
