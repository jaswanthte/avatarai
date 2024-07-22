import { render, screen } from '@testing-library/react';
import App from './App';

// Ensure the test is meaningful and the text 'learn react' is indeed present in the component
test('renders learn react link', () => {
  render(<App />);
  // Use a more descriptive message for debugging
  const linkElement = screen.getByText(/learn react/i);
  // Assertion to check if the element is in the document
  expect(linkElement).toBeInTheDocument();
});
