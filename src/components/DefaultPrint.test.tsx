import { render, screen } from '@testing-library/react';
import DefaultPrint from './DefaultPrint';

describe('DefaultPrint', () => {
  it('when render components', () => {
    render(<DefaultPrint />);
    screen.getByText(/영수증 나오는 곳/);
  });
});
