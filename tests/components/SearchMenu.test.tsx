import { render, screen, fireEvent } from '@testing-library/react';

import SearchMenu from '../../src/components/FoodKioskApp/components/SearchMenu';

const handleChangeQuery = jest.fn();

jest.mock('../../src/components/FoodKioskApp/hooks/useInput', () => () => ({
  handleChangeQuery,
}));

describe('SearchMenu', () => {
  it('renders label and input', () => {
    render(<SearchMenu htmlFor="input-검색" placeholder="식당 이름" />);

    expect(screen.getByLabelText('input-검색')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('식당 이름')).toBeInTheDocument();
  });
});

describe('SearchMenu Input Events', () => {
  beforeEach(() => {
    handleChangeQuery.mockClear();
  });

  it('renders label and input', () => {
    render(<SearchMenu htmlFor="input-검색" placeholder="식당 이름" />);

    const input = screen.getByPlaceholderText('식당 이름') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '메' } });

    expect(input).toHaveValue('메');
  });
});
