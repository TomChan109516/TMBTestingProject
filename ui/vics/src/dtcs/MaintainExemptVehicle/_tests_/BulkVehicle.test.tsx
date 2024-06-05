import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { jest } from '@jest/globals';
import BulkVehicle from "../BulkVehicle";
import BulkVehicle2 from "../BulkVehicle2";

test("renders BulkVehicle component", () => {
    render(<BulkVehicle />);
    // Add your assertions here
});



test('should click Save ', () => {
    render(<BulkVehicle />)
    const input13 = screen.queryByRole('button3', { name: '/Save/' })
    // Events and assertions...
    if (input13) {
      fireEvent.click(input13);
  }
  })

  test('should click cancel ', () => {
    render(<BulkVehicle />)
    const input14 = screen.queryByRole('button4', { name: '/Cancel/' })
    // Events and assertions...
    if (input14) {
      fireEvent.click(input14);
  }
  })

  test('should click New Entry ', () => {
    render(<BulkVehicle />)
    const input15 = screen.queryByRole('button5', { name: '/New Entry/' })
    if (input15) {
      fireEvent.click(input15);
  }
    
    // Events and assertions...
  })

  describe('Bulk Vehicle 2', () => {
    it('renders with open prop as true', () => {
      const props = {
        showBulkVehicle2: true,
        closeBulkVehicle2: jest.fn(),
      };
      const { queryByText } = render(<BulkVehicle2 {...props} />);
      expect(queryByText('Bulk Vehicle Model Exemption Config')).toBeInTheDocument();
    });
  
    it('calls closeBulkVehicle2 when handleClose is called', () => {
      const props = {
        showBulkVehicle2: true,
        closeBulkVehicle2: jest.fn(),
      };
      const { getByText } = render(<BulkVehicle2 {...props} />);
      const closeButton = getByText('Cancel');
      fireEvent.click(closeButton);
      expect(props.closeBulkVehicle2).toHaveBeenCalledTimes(1);
      expect(props.closeBulkVehicle2).toHaveBeenCalledWith(false);
    });
   describe('YourComponent', () => {
      it('does not render when open prop is false', () => {
        const props = {
          showBulkVehicle2: false,
          closeBulkVehicle2: jest.fn(),
        };
        const { queryByText } = render(<BulkVehicle2 {...props} />);
        expect(queryByText('Bulk Vehicle2')).not.toBeInTheDocument();
      });
    });
  });

  

  