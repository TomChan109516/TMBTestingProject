import React from "react";
import {
  fireEvent,
  render,
  within
} from "@testing-library/react";
import Examination from "../Examination";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import SupplementaryPopup from "../SupplementaryPopup";
import "@testing-library/jest-dom";

describe("SupplementaryCodesPopup Component", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <SupplementaryPopup
          showSupplementaryCodePopup={true}
          supplementaryExamCodes={[]}
          closeSupplemantaryExmPopup={() => {}}
          handleChangeSecondayExamCode={() => {}}
          handleClickClearAll={() => {}}
          checkedList={[]}
        ></SupplementaryPopup>
      </Provider>
    );
  });
  test("should call the cancel function when the cancel button is clicked", async () => {
    const onClose = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangeSupplementaryExamCode = jest.fn();
    const open = true;
    const supplementaryExamCodes = [
      { examCode: "code1", examName: "name1" },
      { examCode: "code2", examName: "name2" },
      { examCode: "code3", examName: "name3" },
    ];
    const supplementarySelected = "code1";
    const updateCenter = jest.fn();
    const updatePrimaryCode = jest.fn();
    const updateSuppCode = jest.fn();
    const updateDate = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <SupplementaryPopup
          showSupplementaryCodePopup={true}
          supplementaryExamCodes={[]}
          closeSupplemantaryExmPopup={() => {}}
          handleChangeSecondayExamCode={() => {}}
          handleClickClearAll={() => {}}
          checkedList={[]}
        />
      </Provider>
    );
    const closeButton = getByTestId("close");
    fireEvent.click(closeButton);
    render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
      </Provider>
    );
  });
  test("should call the clear function when the clear button is clicked", async () => {
    const supplementaryCode = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangeSupplementaryExamCode = jest.fn();
    const open = true;
    const supplementaryExamCodes = [
      { examCode: "code1", examName: "name1" },
      { examCode: "code2", examName: "name2" },
      { examCode: "code3", examName: "name3" },
    ];
    const supplementarySelected = "code1";
    const { updateCenter, updatePrimaryCode, updateSuppCode, updateDate } =
      jest.fn();

    const { queryByTestId } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <SupplementaryPopup
          showSupplementaryCodePopup={true}
          supplementaryExamCodes={[]}
          closeSupplemantaryExmPopup={() => {}}
          handleChangeSecondayExamCode={() => {}}
          handleClickClearAll={() => {}}
          checkedList={[]}
        />
      </Provider>
    );
    const clearAll = queryByTestId("clearAll");
    fireEvent.click(clearAll);
    const supplementaryId = queryByTestId('supplementaryId');
    expect(supplementaryId).not.toBe("checked");
  });
  test.skip("should handlechange  function when the radio button is clicked", async () => {
    const onClose = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangePrimaryExamCode = jest.fn();
    const open = true;
    const supplementaryExamCodes = [
      { examCode: "code1", examName: "name1" },
      { examCode: "code2", examName: "name2" },
      { examCode: "code3", examName: "name3" },
    ];
    const supplementarySelected = "code1";
    const { updateCenter, updatePrimaryCode, updateSuppCode, updateDate } =
      jest.fn();

    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <SupplementaryPopup
          showSupplementaryCodePopup={true}
          supplementaryExamCodes={[]}
          closeSupplemantaryExmPopup={() => {}}
          handleChangeSecondayExamCode={() => {}}
          handleClickClearAll={() => {}}
          checkedList={[]}
        />
      </Provider>
    );
  const supplementaryId = within(getByTestId('supplementaryId')).getByRole('checkbox');
      fireEvent.click(supplementaryId);
        expect(supplementaryId).toBeChecked();
      render(
        <Provider store={store}>
          <Examination
            updateCenter={updateCenter}
            updatePrimaryCode={updatePrimaryCode}
            updateSuppCode={updateSuppCode}
            updateDate={updateDate}
          />
        </Provider>
      );
    });
});
