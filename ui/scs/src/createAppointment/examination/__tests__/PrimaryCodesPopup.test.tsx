import React from 'react';
import { fireEvent, render, screen, within, waitFor } from '@testing-library/react';
import PrimaryCodesPopup from '../PrimaryCodesPopup';
import Examination from '../Examination';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import "@testing-library/jest-dom";

describe('PrimaryCodesPopup Component', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <PrimaryCodesPopup
                    showPrimaryCodePopup={true}
                    primaryExamCodes={[]}
                    primarySelected={[]}
                    closePrimExmPopup={() => {}}
                    handleClickClearAll={() => {}}
                    handleChangePrimaryExamCode={() => {}}
                  ></PrimaryCodesPopup>
      </Provider>
    );
  });
  test('should call the cancel function when the cancel button is clicked', async () => {
    const onClose = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangePrimaryExamCode = jest.fn();
    const open = true;
    const primaryExamCodes = [
      { examCode: 'code1', examName: 'name1' },
      { examCode: 'code2', examName: 'name2' },
      { examCode: 'code3', examName: 'name3' }
    ];
    const primarySelected = 'code1';
    const updateCenter = jest.fn();
    const updatePrimaryCode = jest.fn();
    const updateSuppCode  = jest.fn();
    const updateDate  = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <PrimaryCodesPopup
          showPrimaryCodePopup={open}
          primaryExamCodes={primaryExamCodes}
          primarySelected={primarySelected}
          closePrimExmPopup={onClose}
          handleClickClearAll={handleClickClearAll}
          handleChangePrimaryExamCode={handleChangePrimaryExamCode}
        />
      </Provider>
    );
    const closeButton = getByTestId('close');
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
  test('should call the clear function when the clear button is clicked', async () => {
    const primaryCode = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangePrimaryExamCode = jest.fn();
    const open = true;
    const primaryExamCodes = [
      { ExamCode: 'code1', examName: 'name1' },
      { ExamCode: 'code2', examName: 'name2' },
      { ExamCode: 'code3', examName: 'name3' }
    ];
    const primarySelected = 'code1';
    const { updateCenter, updatePrimaryCode, updateSuppCode, updateDate } = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <PrimaryCodesPopup
          showPrimaryCodePopup={open}
          primaryExamCodes={primaryExamCodes}
          primarySelected={primarySelected}
          closePrimExmPopup={primaryCode}
          handleClickClearAll={handleClickClearAll}
          handleChangePrimaryExamCode={handleChangePrimaryExamCode}
        />
      </Provider>
    );
    const clearAll = getByTestId('clearAll');
    fireEvent.click(clearAll);
    const primaryId = within(screen.getByTestId(`primaryId_${primarySelected}`)).getByRole('checkbox');
    expect(primaryId).not.toBe('checked');
  });
  test('should handlechange checkbox function when the checkbox is clicked', async () => {
    const onClose = jest.fn();
    const handleClickClearAll = jest.fn();
    const handleChangePrimaryExamCode = jest.fn();
    const open = true;
    const primaryExamCodes = [
      { ExamCode: 'code1', examName: 'name1' },
      { ExamCode: 'code2', examName: 'name2' },
      { ExamCode: 'code3', examName: 'name3' }
    ];
    const primarySelected = 'code1';
    const { updateCenter, updatePrimaryCode, updateSuppCode, updateDate } = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Examination
          updateCenter={updateCenter}
          updatePrimaryCode={updatePrimaryCode}
          updateSuppCode={updateSuppCode}
          updateDate={updateDate}
        />
        <PrimaryCodesPopup
          showPrimaryCodePopup={open}
          primaryExamCodes={primaryExamCodes}
          primarySelected={primarySelected}
          closePrimExmPopup={onClose}
          handleClickClearAll={handleClickClearAll}
          handleChangePrimaryExamCode={handleChangePrimaryExamCode}
        />
      </Provider>
    );
    const primaryId = within(screen.getByTestId(`primaryId_${primarySelected}`)).getByRole('checkbox');
    fireEvent.click(primaryId);
    await waitFor(() => {
      expect(primaryId).toBeChecked();
    }); 
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
