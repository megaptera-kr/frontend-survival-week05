import { render, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurant table', () => {
    render(<App />);

    screen.getByText(/푸드코트 키오스크/);
  });
});
