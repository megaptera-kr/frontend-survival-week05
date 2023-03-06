import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', async () => {
  it('render without crash', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText('푸드코트 키오스크');
      screen.getByText('메가반점');
    });
  });
});
