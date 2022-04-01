import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import renderer from 'react-test-renderer';
import Home from "./Home";
it('it works', () => {
    const tree = render(
      <Home />)
  expect(tree).toMatchSnapshot();
})

it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('Wellcome Wellcome to the page')).toBeInTheDocument();
})