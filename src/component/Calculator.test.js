import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

it('it works', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
// we stoped here
test('User interaction when clicking calculator buttons', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByRole('button', { name: /9/i }));
  const output = screen.getByTestId('output');
  expect(output.textContent).toBe('9');
});
