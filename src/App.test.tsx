import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders', () => {
    render(<App />);
    waitFor(() => {
      screen.getByText(/푸드코트/);
      screen.getByText(/메리김밥/);
    });
  });
});
