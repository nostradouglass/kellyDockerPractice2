import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



function sum(a: number,b: number) {
  return a + b
}

test('Adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
})