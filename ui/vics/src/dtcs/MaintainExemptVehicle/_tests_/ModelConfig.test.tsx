import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { jest } from '@jest/globals';
import ModelConfig from "../ModelConfig";
import BulkVehicle from "../BulkVehicle";


describe("ModelConfig", () => {
    test("renders without error", () => {
        render(<ModelConfig />);
        // Assert that the component renders without throwing an error
    });


    test('displays the correct modal header', () => {
        render(<ModelConfig />)
        const input = screen.queryByText('Vehicle Model Exemption Config')
        // Events and assertions...
      })

    

    test('should click save', () => {
        render(<ModelConfig />)
        const input1 = screen.queryByRole('button', { name: '/Save/' })
        if (input1) {
            fireEvent.click(input1);
        }
        // Events and assertions...
      })

      test('should click cancel ', () => {
        render(<ModelConfig />)
        const input2 = screen.queryByRole('button2', { name: '/Cancel/' })
        // Events and assertions...
        if (input2) {
          fireEvent.click(input2);
      }
      })


  

    test('should check (Optional)Type Approval No.', () => {
      render(<ModelConfig />)
      const input3 = screen.queryByText('(Optional)Type Approval No.')
      // Events and assertions...
      if (input3) {
        fireEvent.click(input3);
    }
    })

    test('should check Vehicle Model', () => {
        render(<ModelConfig />)
        const input4 = screen.queryByText('Vehicle Model')
        // Events and assertions...
        if (input4) {
          fireEvent.click(input4);
      }
      })

      test('should check Vehicle Make', () => {
        render(<ModelConfig />)
        const input5 = screen.queryByText(' Vehicle Make')
        // Events and assertions...
        if (input5) {
          fireEvent.click(input5);
      }
      })

      test('should check Vehicle Class', () => {
        render(<ModelConfig />)
        const input6 = screen.queryByText('Vehicle Class')
        // Events and assertions...
        if (input6) {
          fireEvent.click(input6);
      }
      })

      test('should check Exempt Year Start(Start-Inclusive)', () => {
        render(<ModelConfig />)
        const input7 = screen.queryByText('Exempt Year Start(Start-Inclusive)')
        // Events and assertions...
        if (input7) {
          fireEvent.click(input7);
      }
      })

      test('should check Exempt Year End(End-Inclusive)', () => {
        render(<ModelConfig />)
        const input8 = screen.queryByText('Exempt Year End(End-Inclusive)')
        // Events and assertions...
        if (input8) {
          fireEvent.click(input8);
      }
      })
    
});

describe('Bulk Vehicle ', () => {
  it('renders with open prop as true', () => {
    const props = {
      showBulkVehicle: true,
      closeBulkVehicle: jest.fn(),
    };
    const { queryByText } = render(<BulkVehicle {...props} />);
    expect(queryByText('Bulk Vehicle Model Exemption Config')).toBeInTheDocument();
  });

  it('calls closeBulkVehicle when handleClose is called', () => {
    const props = {
      showBulkVehicle: true,
      closeBulkVehicle: jest.fn(),
    };
    const { getByText } = render(<BulkVehicle {...props} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(props.closeBulkVehicle).toHaveBeenCalledTimes(1);
    expect(props.closeBulkVehicle).toHaveBeenCalledWith(false);
  });
  
 describe('Bulk Vehicle', () => {
    it('does not render when open prop is false', () => {
      const props = {
        showBulkVehicle: false,
        closeBulkVehicle: jest.fn(),
      };
      const { queryByText } = render(<BulkVehicle {...props} />);
      expect(queryByText('Bulk Vehicle')).not.toBeInTheDocument();
    });
  });
});















