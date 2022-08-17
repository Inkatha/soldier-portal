import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginScreen from '.';

test('renders learn react link', () => {
  render(<LoginScreen />);
  const linkElement = screen.getByText(/Welcome Back/i);
  expect(linkElement).toBeInTheDocument();
});
