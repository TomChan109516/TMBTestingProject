import { render, screen } from '@testing-library/react';
import SkipTestMaintenance from '../SkipTestMaintenance';
import React from 'react';

describe('SkipTestMaintenance', () => {

    test('renders SkipTestMaintenance component', () => {
        render(<SkipTestMaintenance />);
        expect(screen.getByTestId('Skip Test Reason Maintenance')).toBeInTheDocument();
    });

    it('renders the correct number of rows', () => {
        render(<SkipTestMaintenance />);
        const rows = screen.getAllByRole('row');
        const dataRows = rows.filter(row => row.getAttribute('data-key') !== null);
        expect(dataRows).toHaveLength(7);
    });
    it('it renders Add Skip Test Reason button', () => {
        render(<SkipTestMaintenance />);
        expect(screen.getByTestId('Add Skip Test Reason')).toBeInTheDocument();
    })
});