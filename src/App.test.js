import { render, screen } from '@testing-library/react';
import App from './App';

test('không khả thi lắm đâu, Viêt Nam dùng đồ  free cơ', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
