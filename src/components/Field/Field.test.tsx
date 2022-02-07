import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Field from './Field';
import getRowsColumnsLayout from './getRowsColumnsLayout';

describe('getRowsColumnsLayout', () => {
  it('Get correct array fo rows and coumns', () => {
    const arr = getRowsColumnsLayout(3, 3);
    expect(arr).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('Get empty arrs', () => {
    const arr = getRowsColumnsLayout(0, 2);
    expect(arr).toStrictEqual([[]]);
  });
});

describe('Field component', () => {
  it('Field renders', () => {
    render(<Field rows={5} columns={5} />);
    const el = screen.getByText(25);
    expect(el).toBeInTheDocument();
  });
  it('Field cell is clickable', () => {
    const handleClick = jest.fn();
    const wrapper = render(<Field rows={3} columns={3} />);
    fireEvent.click(screen.getByText(5));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('Field did not render', () => {
    render(<Field rows={0} columns={5} />);
    const el = screen.getByText('Nothing to render');
    expect(el).toBeInTheDocument();
  });
});
