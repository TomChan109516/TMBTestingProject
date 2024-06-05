import { render, screen } from '@testing-library/react';

import React from 'react';
import DynoListMainPageLastScreen from '../DynoListMainPageLastScreen';

describe('DynoListMainPageLastScreen', () => {
  test('renders Dyno Room Control title', () => {
    render(<DynoListMainPageLastScreen />);
    const titleElement = screen.getByText(/Dyno Room Control -Dyno Room 1/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Station Open/Close switch', () => {
    render(<DynoListMainPageLastScreen />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders Dyno Workload List tab', () => {
    render(<DynoListMainPageLastScreen />);
    const tabElement = screen.getByText(/Dyno Workload List/i);
    expect(tabElement).toBeInTheDocument();
  });

  test('renders Dyno Draw List tab', () => {
    render(<DynoListMainPageLastScreen />);
    const tabElement = screen.getByText(/Dyno Draw List/i);
    expect(tabElement).toBeInTheDocument();
  });

  test('renders No Match Record Found in table', () => {
    render(<DynoListMainPageLastScreen />);
    const noMatchElement = screen.getByText(/No Match Record Found/i);
    expect(noMatchElement).toBeInTheDocument();
  });
});