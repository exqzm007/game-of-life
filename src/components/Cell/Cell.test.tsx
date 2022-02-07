import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Cell from './Cell';

describe('Cell component', () => {
  it('Cell renders', () => {
    const handleClick = jest.fn();
    render(<Cell serialNumber={7} onClickHandler={handleClick} />);
    const el = screen.getByText(7);
    expect(el).toBeInTheDocument();
  });
  it('It is clickable', () => {
    const handleClick = jest.fn();
    render(<Cell serialNumber={5} onClickHandler={handleClick} />);
    fireEvent.click(screen.getByText(5));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
