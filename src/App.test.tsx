import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/푸드코트 키오스크/);
      screen.getByText(/점심 바구니/);
      screen.getByText(/검색/);
      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
