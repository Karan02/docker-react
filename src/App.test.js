import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2 ', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react quickly/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3a ', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react quickly/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 4ff ', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react quickly/i);
  expect(linkElement).toBeInTheDocument();
});



