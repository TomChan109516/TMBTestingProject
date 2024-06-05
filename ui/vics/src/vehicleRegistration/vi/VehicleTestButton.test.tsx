import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import VehicleTestButton from './VehicleTestButton';
import reducer from '../state/ShowTabsSlice';

const mockStore = createStore(reducer);

describe('VehicleTestButton', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={mockStore}>
                <VehicleTestButton />
            </Provider>
        );
    });

    it('updates the input field when changed', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <VehicleTestButton />
            </Provider>
        );

        const input = getByTestId('Wheel Span');
        fireEvent.change(input, { target: { value: '2' } });
        expect(input.value).toBe('2');
    });
});