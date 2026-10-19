import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-ga');

test('renders Dr. Pratik Kumar clinic navigation/header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const elements = screen.getAllByText(/Dr\. Pratik Kumar/i);
  expect(elements.length).toBeGreaterThan(0);
});

