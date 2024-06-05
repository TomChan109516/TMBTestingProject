import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import VehicleSubmissionConfirmation from './VehicleSubmissionConfirmation';
import reducer from '../state/ShowTabsSlice';

const mockStore = createStore(reducer);
mockStore.dispatch = jest.fn();

describe('VehicleSubmissionConfirmation', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={mockStore}>
                <VehicleSubmissionConfirmation showPopup={true} setShowPopup={jest.fn()} />
            </Provider>
        );
    });

    it('closes the modal when the "No" button is clicked', () => {
        const setShowPopup = jest.fn();

        const { getByText } = render(
            <Provider store={mockStore}>
                <VehicleSubmissionConfirmation showPopup={true} setShowPopup={setShowPopup} />
            </Provider>
        );

        const noButton = getByText('No');
        fireEvent.click(noButton);

        expect(setShowPopup).toHaveBeenCalledWith(false);
    });
});