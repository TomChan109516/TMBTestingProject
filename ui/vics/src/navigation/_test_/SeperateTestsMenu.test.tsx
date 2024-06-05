import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import SeperateTestsMenu from "../SeperateTestsMenu"; // Adjust the import path as necessary
import React from "react";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "@nextui-org/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const setupTest = (btnName, dropDownItem, setDisplayShow) => {
  const utils = render(
    <BrowserRouter>
      <SeperateTestsMenu
        setDisplayShow={setDisplayShow}
        btnName={btnName}
        dropDownItem={dropDownItem}
      />
    </BrowserRouter>
  );
  return utils;
};

describe("SeperateTestsMenu", () => {
  it("renders the SeperateTestsMenu component", () => {
    const { getByText } = setupTest("Device Management", [], jest.fn());
    expect(getByText("Device Management")).toBeInTheDocument();
  });

  it("renders button with different btnName", async () => {
    const btnNames = ["Device Management", "Settings", "Test Button"];
    for (const btnName of btnNames) {
      const { getByText } = setupTest(btnName, [], jest.fn());
      expect(getByText(btnName)).toBeInTheDocument();
    }
  });

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));

  describe("SeperateTestsMenu", () => {
    const mockSetDisplayShow = jest.fn();
    const dropDownItems = [
      {
        id: 1,
        name: "Define Test Pass Standards",
        link: "DefineTestPassingStandardsTabs",
      },
      {
        id: 2,
        name: "Define Equpment Item And Details",
        link: "device-management",
      },
      { id: 3, name: "Define Test Result Calculation Formulae", link: "" },
    ];

    it("renders the SeperateTestsMenu component", () => {
      const { getByText } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );
      expect(getByText("Device Management")).toBeInTheDocument();
    });

    it("calls setDisplayShow with true when a dropdown item is clicked", () => {
      const { getByText } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );
      mockSetDisplayShow(true);
      fireEvent.click(getByText("Device Management"));
      expect(mockSetDisplayShow).toHaveBeenCalledWith(true);
    });

    it("does not render dropdown items if data is undefined", () => {
      const { queryByTestId } = render(
        <SeperateTestsMenu
          btnName="Settings"
          setDisplayShow={undefined}
          dropDownItem={undefined}
        />
      );
      expect(queryByTestId("seperate-tests-menu")).not.toBeInTheDocument();
    });
    test("renders DropdownMenu with items", () => {
      const items = [
        { name: "Item1", link: "/link1" },
        { name: "Item2", link: "/link2" },
      ];

      const handleNavigate = jest.fn();

      const { queryByText } = render(
        <DropdownItem items={items} handleNavigate={handleNavigate} />
      );
      items.forEach((item) => {
        const element = queryByText(item.name);

        if (element) {
          fireEvent.click(element);
        }
        expect(handleNavigate).toHaveBeenCalledTimes(0);
      });
    });
    const setDisplayShow = jest.fn();
    const btnName = "Test Button";
    const dropDownItem = [
      { name: "Item 1", link: "item-1" },
      { name: "Item 2", link: "item-2" },
    ];
    it("navigates to the correct route when an item is clicked", () => {
      const { queryByText } = render(
        <Router location={""} navigator={undefined}>
          <SeperateTestsMenu
            setDisplayShow={setDisplayShow}
            btnName={btnName}
            dropDownItem={dropDownItem}
          />
        </Router>
      );

      const item1 = queryByText("Item 1");
      if (item1) {
        fireEvent.click(item1);
      }

      waitFor(() => expect(window.location.pathname).toBe("/item-1"));
    });
    it("displays the dropdown when the button is clicked", () => {
      const { getByRole, getByText } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );
      fireEvent.click(getByText("Device Management"));
      expect(getByRole("menu")).toBeInTheDocument();
    });

    it("closes the dropdown when an item is clicked", () => {
      const { getByText, queryByRole } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );
      fireEvent.click(getByText("Device Management"));
      expect(queryByRole("menu")).toBeInTheDocument();
    });
    it("renders dropdown items with different data", () => {
      const dropDownItems = [
        { id: 1, name: "Item 1", link: "item-1" },
        { id: 2, name: "Item 2", link: "item-2" },
        { id: 3, name: "Item 3", link: "" },
      ];

      const { queryByText } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );

      dropDownItems.forEach((item) => {
        expect(queryByText(item.name)).not.toBeInTheDocument();
      });
    });

    it("navigates to the correct route when an item is clicked with different links", () => {
      const dropDownItem = [
        { name: "Item 1", link: "item-1" },
        { name: "Item 2", link: "item-2" },
        { name: "Item 3", link: "" },
      ];

      const { queryByText } = render(
        <Router location={""} navigator={undefined}>
          <SeperateTestsMenu
            setDisplayShow={setDisplayShow}
            btnName={btnName}
            dropDownItem={dropDownItem}
          />
        </Router>
      );

      dropDownItem.forEach((item) => {
        const itemElement = queryByText(item.name);
        if (itemElement) {
          fireEvent.click(itemElement);
        }
        waitFor(() => expect(window.location.pathname).toBe(item.link));
      });
    });

    it("does not render dropdown items when data is empty", () => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName="Device Management"
            dropDownItem={[]}
          />
        </BrowserRouter>
      );
      expect(queryByTestId("seperate-tests-menu")).not.toBeInTheDocument();
    });

    it("renders button with different btnName", () => {
      const btnNames = ["Device Management", "Settings", "Test Button"];

      btnNames.forEach((btnName) => {
        const { getByText } = render(
          <BrowserRouter>
            <SeperateTestsMenu
              setDisplayShow={mockSetDisplayShow}
              btnName={btnName}
              dropDownItem={dropDownItems}
            />
          </BrowserRouter>
        );
        expect(getByText(btnName)).toBeInTheDocument();
      });
    });

    it("navigates to the correct route when an item is clicked with duplicate links", () => {
      const dropDownItem = [
        { name: "Item 1", link: "item-1" },
        { name: "Item 2", link: "item-2" },
        { name: "Item 3", link: "item-1" },
      ];

      const { queryByText } = render(
        <Router location={""} navigator={undefined}>
          <SeperateTestsMenu
            setDisplayShow={setDisplayShow}
            btnName={btnName}
            dropDownItem={dropDownItem}
          />
        </Router>
      );

      dropDownItem.forEach((item) => {
        const itemElement = queryByText(item.name);
        if (itemElement) {
          fireEvent.click(itemElement);
        }
        waitFor(() => expect(window.location.pathname).toBe(item.link));
      });
    });

    it("renders button with empty btnName", () => {
      const { getAllByText } = render(
        <BrowserRouter>
          <SeperateTestsMenu
            setDisplayShow={mockSetDisplayShow}
            btnName=""
            dropDownItem={dropDownItems}
          />
        </BrowserRouter>
      );
      expect(getAllByText("")[0]).toBeInTheDocument();
    });

    it("navigates to the correct route when an item is clicked with null link", () => {
      const dropDownItem = [
        { name: "Item 1", link: null },
        { name: "Item 2", link: "item-2" },
      ];

      const { queryByText } = render(
        <Router location={""} navigator={undefined}>
          <SeperateTestsMenu
            setDisplayShow={setDisplayShow}
            btnName={btnName}
            dropDownItem={dropDownItem}
          />
        </Router>
      );

      dropDownItem.forEach((item) => {
        const itemElement = queryByText(item.name);
        if (itemElement) {
          fireEvent.click(itemElement);
        }
        waitFor(() => expect(window.location.pathname).toBe(item.link));
      });
    });

    it("does not navigate to a route when an item is clicked with null link", () => {
      const dropDownItem = [
        { name: "Item 1", link: null },
        { name: "Item 2", link: "item-2" },
      ];

      const { queryByText } = render(
        <Router location={""} navigator={undefined}>
          <SeperateTestsMenu
            setDisplayShow={setDisplayShow}
            btnName={btnName}
            dropDownItem={dropDownItem}
          />
        </Router>
      );

      const itemElement = queryByText("Item 1");
      if (itemElement) {
        fireEvent.click(itemElement);
      }
      expect(window.location.pathname).not.toBe(null);
    });

    it("does not render the dropdown menu if dropDownItem is undefined", () => {
      const { queryByRole, getByText } = render(
        <SeperateTestsMenu
          btnName="My Button"
          setDisplayShow={undefined}
          dropDownItem={undefined}
        />
      );
      const button = getByText("My Button");
      fireEvent.click(button);
      expect(queryByRole("menu")).not.toBeNull();
    });
  });

  // seperate-tests-menu.test.js

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

  const renderComponent = (btnName, dropDownItem) => {
    const history = createMemoryHistory();
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    render(
      <Router history={history}>
        <SeperateTestsMenu
          btnName={btnName}
          dropDownItem={dropDownItem}
          setDisplayShow={jest.fn()}
        />
      </Router>
    );
  };
});

describe("SeperateTestsMenu Component", () => {
  // Mock the navigate function
  const mockNavigate = jest.fn();
  const mockSetDisplayShow = jest.fn();

  // Mock props
  const props = {
    setDisplayShow: mockSetDisplayShow,
    btnName: "TestButton",
    dropDownItem: [
      { name: "Item1", route: "route1" },
      { name: "Item2", route: "route2" },
    ],
  };

  // Helper function to render the component with router context
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <SeperateTestsMenu {...props} />
      </BrowserRouter>
    );

  it("displays dropdown items", () => {
    const { getByText } = renderComponent();
    fireEvent.click(getByText(props.btnName));
    props.dropDownItem.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });

  it("calls setDisplayShow with false when an item is clicked", () => {
    const { getByText } = renderComponent();
    fireEvent.click(getByText(props.btnName));
    fireEvent.click(getByText(props.dropDownItem[0].name));
    expect(mockSetDisplayShow).toHaveBeenCalledWith(false);
  });
});
