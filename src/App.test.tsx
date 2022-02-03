import React from 'react';
import { screen, render } from '@testing-library/react';

import App from '@/App';

describe('App', () => {
  it('App renders check', () => {
    render(<App name="Hello" />);
    const element = screen.getByText('Hello');
    expect(element).toBeInTheDocument();
  });
});
