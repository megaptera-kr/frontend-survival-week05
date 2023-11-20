import { render, screen } from '@testing-library/react';
import Header from '../../src/components/FoodKioskApp/components/Header';

describe('Header', () => {
  it('renders Header', async () => {
    render(<Header title="푸드코트 키오스크" />);

    expect(screen.getByText(/푸드코트 키오스크/)).toBeInTheDocument();
  });
});
