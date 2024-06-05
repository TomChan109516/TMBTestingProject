import { render, screen } from '@testing-library/react';
import ExpandComponent from './ExpandComponent';
import React from 'react';


describe('ExpandComponent', () => {
  it('renders checkboxes when heading is "system"', () => {
    render(<ExpandComponent expandData={{ heading: 'system' }} onClose={() => {}} />);
    
    expect(screen.getByText('system')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    // Add more assertions for the other checkboxes if needed
  });

  it('renders radio buttons when heading is not "system"', () => {
    render(<ExpandComponent expandData={{ heading: 'not system' }} onClose={() => {}} />);
    
    expect(screen.getByText('not system')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    // Add more assertions for the other radio buttons if needed
  });
});