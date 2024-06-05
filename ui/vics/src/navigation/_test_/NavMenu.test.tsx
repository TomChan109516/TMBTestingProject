
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import { WifiOff, Wifi } from '../NavMenu';

describe('NavMenu', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
  }));
  it('renders without crashing', () => {
    const { container } = render(<WifiOff />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders without crashing', () => {
    const { container } = render(<Wifi />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('displays the correct device type when deviceType is "Tablet"', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify('Tablet'));
    const { getByText } = render(<BrowserRouter><NavMenu /></BrowserRouter>);
    expect(getByText('current station: Tablet')).toBeInTheDocument();
  });

  it('displays the correct station when deviceType is not "Tablet"', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify('Desktop'));
    const { getByText } = render(<BrowserRouter><NavMenu /></BrowserRouter>);
    expect(getByText('current station: Desktop')).toBeInTheDocument();
  });
});