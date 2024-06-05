import { render, screen } from '@testing-library/react';
import MemoPopup from '../MemoPopup';
import "@testing-library/jest-dom";

describe('MemoPopup Component', () => {

  test('renders modal', () => {
    render(<MemoPopup />);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  test('renders "System And Equipment" text', () => {
    render(<MemoPopup />);
    const systemAndEquipmentText = screen.getByText(/System And Equipment/i);
    expect(systemAndEquipmentText).toBeInTheDocument();
  });
});