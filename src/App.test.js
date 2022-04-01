import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// import renderer from 'react-test-renderer';
import App from './App';

it('it works', () => {
  const tree = render(
    <App />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  fireEvent.click(homeLink);
  expect(screen.getByText(/Wellcome/)).toBeInTheDocument();
});
