import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { jest } from '@jest/globals';
import ExemptVehicleModel from "../ExemptVehicleModel";
import ModelConfig from "../ModelConfig";
import DisableVehicle from "../DisableVehicle";
import ReactivateVehicle from "../ReactivateVehicle";


describe("ExemptVehicleModel", () => {
    test("renders without error", () => {
        render(<ExemptVehicleModel />);
        // Assert that the component renders without throwing an error
    });

    test("displays the correct modal header", () => {
        render(<ExemptVehicleModel />);
        // Assert that the modal header displays the correct text
        expect(screen.getByLabelText("Exempt Vehicle Model From Test Maintenance")).toBeInTheDocument();
    });

   

    test("opens new screen when New button is clicked", () => {
        render(<ExemptVehicleModel />);
       
        fireEvent.click(screen.getByText("New"));
       
    });

    
    test('should click Bulk Create ', () => {
        render(<ExemptVehicleModel />)
        const input9 = screen.queryByRole('Bulk Create', { name: '/Bulk Create/' })
        if (input9) {
          fireEvent.click(input9);
      }
        // Events and assertions...
      })

    test("Reset the screen when Reset button is clicked", () => {
        render(<ExemptVehicleModel />);
       
        fireEvent.click(screen.getByText("Reset"));
       
    });

    test("search for entry when Search button is clicked", () => {
        render(<ExemptVehicleModel />);
       
        fireEvent.click(screen.getByText("Search"));
       
    });

    test('should check (Optional)Type Approval No.', () => {
        render(<ExemptVehicleModel />)
        const input10 = screen.queryByText(' Type Approval No.')
        // Events and assertions...
        if (input10) {
          fireEvent.click(input10);
      }
      })

      test('should check Vehicle Model', () => {
        render(<ExemptVehicleModel />)
        const input11 = screen.queryByText(' Vehicle Model')
        // Events and assertions...
        if (input11) {
          fireEvent.click(input11);
      }
      })

      test('should check  Vehicle Make', () => {
        render(<ExemptVehicleModel />)
        const input12 = screen.queryByText(' Vehicle Make')
        // Events and assertions...
        if (input12) {
          fireEvent.click(input12);
      }
      })
      
     

describe('Model Config', () => {
  it('renders with open prop as true', () => {
    const props = {
      showModelConfig: true,
      closeModelConfig: jest.fn(),
    };
    const { queryByText } = render(<ModelConfig {...props} />);
    expect(queryByText('Vehicle Model Exemption Config')).toBeInTheDocument();
  });

  it('calls closeModelConfig when handleClose is called', () => {
    const props = {
      showModelConfig: true,
      closeModelConfig: jest.fn(),
    };
    const { getByText } = render(<ModelConfig {...props} />);
    const closeButton = getByText('Cancel');
    fireEvent.click(closeButton);
    expect(props.closeModelConfig).toHaveBeenCalledTimes(1);
    expect(props.closeModelConfig).toHaveBeenCalledWith(false);
  });
 describe('Model Config', () => {
    it('does not render when open prop is false', () => {
      const props = {
        showModelConfig: false,
        closeModelConfig: jest.fn(),
      };
      const { queryByText } = render(<ModelConfig {...props} />);
      expect(queryByText('Model Config')).not.toBeInTheDocument();
    });
  });
});


describe('Reactivate Vehicle', () => {
  it('renders with open prop as true', () => {
    const props = {
      showReactivateVehicle: true,
      closeReactivateVehicle: jest.fn(),
    };
    const { queryByText } = render(<ReactivateVehicle {...props} />);
    expect(queryByText('Reactivate Vehicle Model Exemption')).toBeInTheDocument();
  });

 
 describe('YourComponent', () => {
    it('does not render when open prop is false', () => {
      const props = {
        showReactivateVehicle: false,
        closeReactivateVehicle: jest.fn(),
      };
      const { queryByText } = render(<ReactivateVehicle {...props} />);
      expect(queryByText('Reactivate Vehicle')).not.toBeInTheDocument();
    });
  });
});
    
describe('Disable Vehicle', () => {
  it('renders with open prop as true', () => {
    const props = {
      showDisableVehicle: true,
      closeDisableVehicle: jest.fn(),
    };
    const { queryByText } = render(<DisableVehicle {...props} />);
    expect(queryByText('Disable Vehicle Model Exemption')).toBeInTheDocument();
  });

 
 describe('YourComponent', () => {
    it('does not render when open prop is false', () => {
      const props = {
        showDisableVehicle: false,
        closeDisableVehicle: jest.fn(),
      };
      const { queryByText } = render(<DisableVehicle {...props} />);
      expect(queryByText('Disable Vehicle')).not.toBeInTheDocument();
    });
  });
});
    
});







