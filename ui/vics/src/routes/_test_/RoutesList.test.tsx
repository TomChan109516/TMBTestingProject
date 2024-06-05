import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RoutesList from '../RoutesList';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('RoutesList', () => {
    test('renders VehicleRegistration component for /vehicleRegistration route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/vehicleRegistration']}>
                    <RoutesList />
                </MemoryRouter>
            </Provider>
        );
    });

    test('renders ArtuAdministration component for /ArtuAdministration route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/ArtuAdministration']}>
                    <RoutesList />
                </MemoryRouter>
            </Provider>
        );
    });

    test('renders ExaminationTypeandTestItems component for /station-management route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/station-management']}>
                    <RoutesList />
                </MemoryRouter>
            </Provider>
        );
    });
});