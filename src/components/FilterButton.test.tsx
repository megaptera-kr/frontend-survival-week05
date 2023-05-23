import { fireEvent, render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('<FilterButtons />', () => {
  const category = '한식';
  const setFilterCategory = jest.fn();

  it('render filter button', () => {
    render(<FilterButton
      category={category}
      setFilterCategory={setFilterCategory}
    />);

    screen.getByRole('button', { name: category });
  });

  it('click category button', () => {
    render(<FilterButton
      category={category}
      setFilterCategory={setFilterCategory}
    />);

    const button = screen.getByText(category);
    fireEvent.click(button);
    expect(setFilterCategory).toBeCalledWith(category);
  });
});
