import { render } from '@testing-library/react';
import Submission from '../SubmissionPopUp';
import React from 'react';

describe('Submission', () => {
  it('renders the Submit and Cancel buttons', () => {
    const { getByText } = render(<Submission />);

    expect(getByText('Submit')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });
});