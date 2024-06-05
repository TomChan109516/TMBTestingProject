import React from 'react';
import { render } from '@testing-library/react';
import SwitchingOffWorkStationRole from '../SwitchingOffWorkStationRoleB';

describe('SwitchingOffWorkStationRole', () => {
  it('renders the component', () => {
    const { getByText } = render(<SwitchingOffWorkStationRole />);
    expect(getByText('HT')).toBeInTheDocument();
  });
  it('renders table rows', () => {
    const { getAllByText } = render(<SwitchingOffWorkStationRole />);
    expect(getAllByText(/HT|VI|Brake|Speedometer|SDD|SLD|Teximeter|UCI/i)).toHaveLength(8);
  });
    it('renders table columns', () => {
        const { getAllByText } = render(<SwitchingOffWorkStationRole />);
        expect(getAllByText(/PASS|FAIL|SKIP/i)).toHaveLength(19);
    });
});
