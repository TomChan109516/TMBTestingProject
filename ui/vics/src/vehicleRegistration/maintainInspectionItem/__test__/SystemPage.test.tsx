import { render, screen, fireEvent } from "@testing-library/react";
import SystemPage from "../SystemPage";
import React from "react";

describe("SystemPage", () => {
  test("renders table with correct data", () => {
    render(<SystemPage />);

    // Assert that the table headers are rendered correctly
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Test Type")).toBeInTheDocument();
    expect(screen.getByText("Vehicle Class")).toBeInTheDocument();
    expect(screen.getByText("System Name")).toBeInTheDocument();
    expect(screen.getByText("Update Time")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  describe("SystemPage", () => {
    const uservalidityPeriodData = [
      {
        id: "01",
        componentName: "REGISTRATION PLATE/ MARKING/ SIGN",
        updateTime: "2019-06-27",
      },
      {
        id: "02",
        componentName: "COLOR/PAINTING",
        updateTime: "2019-06-27",
      },
      {
        id: "03",
        componentName: "ADVERTISING DISPLAY",
        updateTime: "2019-06-27",
      },
      {
        id: "04",
        componentName: "TYRE SIZE",
        updateTime: "2019-06",
      },
      {
        id: "06",
        componentName: "TYRE CONDITION/LOADING",
        updateTime: "2019-06-27",
      },
      {
        id: "07",
        componentName: "WHEELS RIM/SPOKE/RETAINING RIM",
        updateTime: "2019-06-27",
      },
      {
        id: "08",
        componentName: "WHEELS NUT/STUD/STUDS HOLE",
        updateTime: "2019-06-27",
      },
    ];

    it("renders the table with the correct headers", () => {
      render(<SystemPage />);

      const headers = [
        "ID",
        "Test Type",
        "Vehicle Class",
        "System Name",
        "Update Time",
        "Status",
      ];

      headers.forEach((header) => {
        expect(screen.getByText(header)).toBeInTheDocument();
      });
    });

describe('SystemPage', () => {
    const uservalidityPeriodData = [
        {
          id: "01",
          componentName: "REGISTRATION PLATE/ MARKING/ SIGN",
          updateTime: "2019-06-27",
        },
        {
          id: "02",
          componentName: "COLOR/PAINTING",
          updateTime: "2019-06-27",
        },
        {
          id: "03",
          componentName: "ADVERTISING DISPLAY",
          updateTime: "2019-06-27",
        },
        {
          id: "04",
          componentName: "TYRE SIZE",
          updateTime: "2019-06",
        },
        {
          id: "06",
          componentName: "TYRE CONDITION/LOADING",
          updateTime: "2019-06-27",
        },
        {
          id: "07",
          componentName: "WHEELS RIM/SPOKE/RETAINING RIM",
          updateTime: "2019-06-27",
        },
        {
          id: "08",
          componentName: "WHEELS NUT/STUD/STUDS HOLE",
          updateTime: "2019-06-27",
        },
      ];

  it('renders the table with the correct headers', () => {
    render(<SystemPage />)

    const headers = [
      'ID',
      'Test Type',
      'Vehicle Class',
      'System Name',
      'Update Time',
      'Status'
    ]

    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument()
    })
  })

  it('renders the table with the correct number of rows', () => {
    render(<SystemPage />)

    expect(screen.getAllByRole('row')).toHaveLength(uservalidityPeriodData.length + 2) // +1 for the header row
  })

  it('toggles the switch when clicked', () => {
    render(<SystemPage />)

    const switchElement = screen.getAllByRole('switch')[0]
    expect(switchElement).toBeInTheDocument()
    fireEvent.click(switchElement)
    expect(switchElement).not.toBeChecked()
  })

  it('opens the AddModifyDefectPopup when the settings icon is clicked', () => {
    render(<SystemPage />)

    const settingsIcon = screen.getAllByTitle('settings')[0]
    expect(settingsIcon).toBeInTheDocument()

    fireEvent.click(settingsIcon)
    // check that the popup is open
    expect(screen.getByText('All 5 pages')).toBeInTheDocument()
  })

  it('opens the DisableDefectPopup when the switch is toggled on', () => {
    render(<SystemPage />)

    const switchElement = screen.getAllByRole('switch')[0]
    expect(switchElement).toBeInTheDocument()
  });
})
  })
});
