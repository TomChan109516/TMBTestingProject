import React from 'react';
import { render } from '@testing-library/react';
import ValidDataInMoreInfoPopup from './ValidDataInMoreInfoPopup';

describe('ValidDataInMoreInfoPopup', () => {
  it('renders without crashing', () => {
    render(<ValidDataInMoreInfoPopup handleClose={() => { }} />);
  });

  it('displays the correct number of data items', () => {
    const { getAllByTestId } = render(
      <ValidDataInMoreInfoPopup handleClose={() => { }} />
    );

    const dataItems = getAllByTestId('data-item');
    expect(dataItems.length).toBe(59);
  });
});