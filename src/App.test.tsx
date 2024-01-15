import { render, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders Title', () => {
    render(<App />);

    screen.getByText('푸드코트 키오스크');
    screen.getByText('점심 바구니');
  });
});
