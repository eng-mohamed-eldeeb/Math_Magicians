import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import renderer from 'react-test-renderer';
import Quote from './Quote';

it('it works', () => {
  const tree = render(
    <Quote />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(<Quote />);
  expect(screen.getByText(/-William Paul/)).toBeInTheDocument();
});
