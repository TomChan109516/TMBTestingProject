import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { jest } from '@jest/globals';
import DynoTestConfig from "../DynoTestConfig";



describe("DynoTestConfig", () => {
    test("renders without error", () => {
        render(<DynoTestConfig />);
        // Assert that the component renders without throwing an error
    });


    test('displays the correct modal header', () => {
        render(<DynoTestConfig />)
        const input = screen.queryByText('Test Config')
        // Events and assertions...
      })

    

    test('should click save', () => {
        render(<DynoTestConfig />)
        const input1 = screen.queryByRole('buttonYes', { name: '/Save/' })
        if (input1) {
            fireEvent.click(input1);
        }
        // Events and assertions...
      })

      test('should click cancel ', () => {
        render(<DynoTestConfig />)
        const input2 = screen.queryByRole('buttonNo', { name: '/Cancel/' })
        // Events and assertions...
        if (input2) {
          fireEvent.click(input2);
      }
      })


  

    test('should check Double Axle Propulsion', () => {
      render(<DynoTestConfig />)
      const input3 = screen.queryByText('Double Axle Propulsion')
      // Events and assertions...
      if (input3) {
        fireEvent.click(input3);
    }
    })

    test('should check Sweep Rate(m/s²)', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Sweep Rate(m/s²)')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Max.Speed cannot Exceed(km/h)', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Max.Speed cannot Exceed(km/h)')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Constant Speed Duration(s)', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Constant Speed Duration(s)')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Emission Limit', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Emission Limit')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Fuel Density(g/cm³)', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Fuel Density(g/cm³)')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Fuel Supply Type', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Fuel Supply Type')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Power Correction', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Power Correction')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })

      test('should check Rated Speed(RPM)', () => {
        render(<DynoTestConfig />)
        const input3 = screen.queryByText('Rated Speed(RPM)')
        // Events and assertions...
        if (input3) {
          fireEvent.click(input3);
      }
      })
  
      test('should check Scan Deceleration', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Scan Deceleration')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check Min. Speed cannot Exceed(km/h)', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Min. Speed cannot Exceed(km/h)')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check Sampling Duration(s)', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Sampling Duration(s)')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check End of Speed Rate Scanning(%)', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('End of Speed Rate Scanning(%)')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check Fuel Viscosiy (mm²/s)', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Fuel Viscosiy (mm²/s)')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check Air Intake System', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Air Intake System')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })
  
        test('should check Dry Air Coefficient', () => {
          render(<DynoTestConfig />)
          const input3 = screen.queryByText('Dry Air Coefficient')
          // Events and assertions...
          if (input3) {
            fireEvent.click(input3);
        }
        })

        test('should check Rated Power(KW)', () => {
            render(<DynoTestConfig />)
            const input3 = screen.queryByText('Rated Power(KW)')
            // Events and assertions...
            if (input3) {
              fireEvent.click(input3);
          }
          })
      
          test('should check Constant Speed Range(%)', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('Constant Speed Range(%)')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
            test('should check 70km/h Linear Loading (KW)', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('70km/h Linear Loading (KW)')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
            test('should check No. Drive Axle', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('No. Drive Axle')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
            test('should check Power Discount Factor (%)', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('Power Discount Factor (%)')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
            test('should check Ambient Temperature(°C)', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('Ambient Temperature(°C)')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
            test('should check Correction Factor', () => {
              render(<DynoTestConfig />)
              const input3 = screen.queryByText('Correction Factor')
              // Events and assertions...
              if (input3) {
                fireEvent.click(input3);
            }
            })
      
           


});



   













