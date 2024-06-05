import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EnquiryVehicleParticular from './EnquiryVehicleParticular';
import { Provider, useSelector } from 'react-redux';
import { createMockStore } from 'redux-mock-store';
import dayjs from 'dayjs';
import { store } from  "../../store/store"
import { BrowserRouter } from 'react-router-dom';


describe("EnquiryVehicleParticular",() =>{
    test("renders component with basic elements", () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <EnquiryVehicleParticular />
            </Provider>
            </BrowserRouter>
         
        );
        expect(screen.getByText("Vehicle Type.")).toBeInTheDocument();
       ;
      });
      test("renders component with basic elements", () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <EnquiryVehicleParticular />
            </Provider>
            </BrowserRouter>
         
        );
        expect(screen.getByText("Vehicle Class")).toBeInTheDocument();
       ;
       
      });
})
// // Mock vehicleInfo data
// const mockVehicleInfo = {
//   vhclTypeCode: 'PVT',
//   vehicleClassId: '1',
//   vehicleId: 'ABC123',
//   regMark: '12345',
//   // ... other properties
// };

// // Mock redux store
// // const mockStore = createMockStore({
// //   enquiryAppointment: {
// //     enquiryVehicleInfo: mockVehicleInfo,
// //   },
// // });

// // test('renders vehicle information correctly', () => {
// //   render(<EnquiryVehicleParticular />, { store: mockStore });

// //   // Assert that each vehicle information field is rendered with the correct value
// //   expect(screen.getByText(/Vehicle Type./i)).toBeInTheDocument();
// //   expect(screen.getByText('PVT')).toBeInTheDocument();
// //   expect(screen.getByText(/Vehicle Class/i)).toBeInTheDocument();
// //   expect(screen.getByText('1')).toBeInTheDocument();
// //   expect(screen.getByText(/Vehicle ID/i)).toBeInTheDocument();
// //   expect(screen.getByText('ABC123')).toBeInTheDocument();
// //   // ... assertions for other fields
// // });

// test('handles search button click', () => {
//   const navigateMock = jest.fn();
//   render(<EnquiryVehicleParticular navigate={navigateMock} />, { store: mockStore });

//   const searchButton = screen.getByRole('button', { name: /Search/i });
//   userEvent.click(searchButton);

//   expect(navigateMock).toHaveBeenCalledWith('/vehicleDetail/ABC123');
// });

// // Add more test cases for other functionalities, including:
// // - Rendering empty states when vehicleInfo is not available
// // - Handling errors gracefully
// // - Testing date formatting using dayjs

// // Empty states
// test('renders empty state when vehicleInfo is null', () => {
//     const mockStore = createMockStore({
//       enquiryAppointment: {
//         enquiryVehicleInfo: null,
//       },
//     });
//     render(<EnquiryVehicleParticular />, { store: mockStore });
  
//     expect(screen.getByText('Vehicle information not available')).toBeInTheDocument();
//   });
  
//   // Error handling
//   test('handles errors gracefully', () => {
//     const mockStore = createMockStore({
//       enquiryAppointment: {
//         enquiryVehicleInfo: mockVehicleInfo,
//       },
//     });
//     jest.spyOn(EnquiryVehicleParticular.prototype, 'onSearchClick').mockImplementation(() => {
//       throw new Error('Search failed');
//     });
//     render(<EnquiryVehicleParticular />, { store: mockStore });
  
//     const searchButton = screen.getByRole('button', { name: /Search/i });
//     userEvent.click(searchButton);
  
//     expect(screen.getByText('Error: Search failed')).toBeInTheDocument();
//   });
  
//   // Date formatting with Jest mock
//   test('formats dates correctly using dayjs', () => {
//     const mockDayjs = jest.fn().mockReturnValue({ format: jest.fn().mockReturnValue('01/01/2024') });
//     jest.spyOn(dayjs, 'utc').mockImplementation(() => mockDayjs);
//     const mockStore = createMockStore({
//       enquiryAppointment: {
//         enquiryVehicleInfo: {
//           ...mockVehicleInfo,
//           vico: '2024-01-01T00:00:00Z',
//           lastUpdated: '2024-01-01T00:00:00Z',
//         },
//       },
//     });
//     render(<EnquiryVehicleParticular />, { store: mockStore });
  
//     expect(screen.getByText('VICO: 01/01/2024')).toBeInTheDocument();
//     expect(screen.getByText('Last Update: 01/01/2024 00:00')).toBeInTheDocument();
//   });
  
//   // Accessibility (example using jest-dom)
//   test('component is accessible', () => {
//     render(<EnquiryVehicleParticular />);
  
//     expect(screen.getByText('Vehicle Type.')).toHaveAttribute('aria-label', 'Vehicle Type');
//     expect(screen.getByText('PVT')).toHaveAttribute('aria-labelledby', 'Vehicle Type');
//   });




  