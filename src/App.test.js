import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to Ayurvata/i);
  expect(headerElement).toBeInTheDocument();
});
