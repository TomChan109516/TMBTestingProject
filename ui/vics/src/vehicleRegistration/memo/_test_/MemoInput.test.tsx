import { render, screen, fireEvent } from '@testing-library/react';
import MemoInput from '../MemoInput';
import "@testing-library/jest-dom";

describe('MemoInput Component', () => {

  test('renders "Add Memo" button', () => {
    render(<MemoInput />);
    const addMemoButton = screen.getByText(/Add Memo/i);
    expect(addMemoButton).toBeInTheDocument();
  });

  test('simulates "Add Memo" button click', () => {
    render(<MemoInput />);
    const addMemoButton = screen.getByText('Add Memo');
    fireEvent.click(addMemoButton);
  });

  test('simulates "Predefine List" button click', () => {
    render(<MemoInput />);
    const predefineListButton = screen.getByText('Predefine List');
    fireEvent.click(predefineListButton);
  });
});