import { fireEvent, render, screen } from '@testing-library/react';
import HeadLampLayoutButton from '../HeadLampLayoutButton';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('HeadLampLayoutButton', () => {
let store;
 
  beforeEach(() => {
    store = createStore(() => ({
      submissionConfirmation: {
        ht: {
          isAccepted: false
        }
      },
      login:{
        userID: "",
      },
      data:{
        regdata: {},
      }
 
    }));
  });
 

  test('renders HeadLampLayoutButton component', () => {
    render(<Provider store={store}><HeadLampLayoutButton /></Provider>);
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
  });

  test('sends the correct data when clicked', () => {
    const setShowSubmitPopup = jest.fn();

    render(<Provider store={store}><HeadLampLayoutButton setShowSubmitPopup={setShowSubmitPopup} /></Provider>);
    const buttonElement = screen.getByText('Submit');
    fireEvent.click(buttonElement);
    setShowSubmitPopup(true);
    expect(setShowSubmitPopup).toHaveBeenCalledWith(true);
  });

  it('renders the correct initial state', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HeadLampLayoutButton />
      </Provider>
    );
    expect(getByText('Test Start')).toBeInTheDocument();
  });
 
  it('changes button text on click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HeadLampLayoutButton />
      </Provider>
    );
    const button = getByText('Test Start');
    fireEvent.click(button);
    expect(getByText('Retest')).toBeInTheDocument();
  });
});