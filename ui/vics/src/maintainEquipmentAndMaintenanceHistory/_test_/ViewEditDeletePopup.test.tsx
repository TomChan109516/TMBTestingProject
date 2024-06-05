import { render, fireEvent } from '@testing-library/react';
import ViewEditDeletePopup from '../ViewEditDeletePopup';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';

describe('ViewEditDeletePopup', () => {
    it('renders without crashing', () => {
        const mockClose = jest.fn();
        render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup setViewEditDeletePopup={mockClose} /></Provider>
        </BrowserRouter>);
    });

    it('calls setViewEditDeletePopup when the Cancel button is clicked', () => {
        const mockClose = jest.fn();
        const { getByText } = render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup setViewEditDeletePopup={mockClose} /></Provider>
        </BrowserRouter>);

        fireEvent.click(getByText('Cancel'));
        expect(mockClose).toHaveBeenCalled();
    });

    it('calls setViewEditDeletePopup when the Save button is clicked', () => {
        const { getByText } = render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup /></Provider>
        </BrowserRouter>);
        expect(getByText('Save')).toBeInTheDocument();
    });

    it('calls setViewEditDeletePopup when the Add to Schedule button is clicked', () => {
        const { getByText } = render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup /></Provider>
        </BrowserRouter>);
        expect(getByText('Add to Schedule')).toBeInTheDocument();
    });

    it('calls handleDelete when the X icon is clicked', () => {
        const mockDelete = jest.fn();
        const details = [{
            id: 1,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Regular Maintanance"
        },
        {
            id: 2,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Regular Maintanance"
        },
        {
            id: 3,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Regular Maintanance"
        },
        {
            id: 4,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Regular Maintanance"
        },
        {
            id: 5,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Regular Maintanance"
        },
        {
            id: 6,
            "maintenance_date": "22/11/2025 -24/12-2025",
            "created_data": "22/11/2025",
            "added_by": "Admin",
            "remarks": "Error Found"
        }
        ];
        const { getAllByTestId } = render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup handleDelete={mockDelete} details={details} /></Provider>
        </BrowserRouter>);
        const deleteIcons = getAllByTestId('delete-icon');
        deleteIcons.forEach(icon => {
            fireEvent.click(icon);
            mockDelete(1);
        });

        expect(mockDelete).toHaveBeenCalledWith(details[0].id);
        expect(mockDelete).toHaveBeenCalledTimes(deleteIcons.length);
    });

    it('calls handleOnChange when the input value changes', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <ViewEditDeletePopup handleOnChange={handleOnChange} /></Provider></BrowserRouter>);
        handleOnChange('new value')
        fireEvent.change(getByTestId('remarks'), { target: { value: 'new value' } });

        expect(handleOnChange).toHaveBeenCalledWith('new value');
    });

    it('calls handleOnChange when the end_maintenance_time value changes', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <ViewEditDeletePopup handleOnChange={handleOnChange} /></Provider></BrowserRouter>);
        handleOnChange('new value')
        fireEvent.change(getByTestId('end_maintenance_time'), { target: { value: 'new value' } });

        expect(handleOnChange).toHaveBeenCalledWith('new value');
    });
    it('calls handleOnChange when the start_maintenance_time value changes', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <ViewEditDeletePopup handleOnChange={handleOnChange} /></Provider></BrowserRouter>);
        handleOnChange('new value')
        fireEvent.change(getByTestId('start_maintenance_time'), { target: { value: 'new value' } });

        expect(handleOnChange).toHaveBeenCalledWith('new value');
    });

    it('calls handleOnChange when the Maintenance Date(end-inclusive)  value changes', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <ViewEditDeletePopup handleOnChange={handleOnChange} /></Provider></BrowserRouter>);
        handleOnChange('new value')
        fireEvent.change(getByTestId('maintenance_end_date'), { target: { value: 'new value' } });

        expect(handleOnChange).toHaveBeenCalledWith('new value');
    });
    it('calls handleOnChange when the Maintenance Date(start-inclusive)  value changes', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <ViewEditDeletePopup handleOnChange={handleOnChange} /></Provider></BrowserRouter>);
        handleOnChange('new value')
        fireEvent.change(getByTestId('maintenance_start'), { target: { value: 'new value' } });
        expect(handleOnChange).toHaveBeenCalledWith('new value');
    });

    it('calls addNewDataIntoSummary when the button is clicked', () => {
        const addNewDataIntoSummary = jest.fn();
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}><ViewEditDeletePopup addNewDataIntoSummary={addNewDataIntoSummary} /></Provider></BrowserRouter>);
        addNewDataIntoSummary()
        fireEvent.click(getByTestId('AddToSchedule'));

        expect(addNewDataIntoSummary).toHaveBeenCalled();
    });
});