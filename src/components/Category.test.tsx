import { fireEvent, render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const category = '중식';

  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <Category
        category={category}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Category text', () => {
    renderCategory();

    screen.getByText(/중식/);
  });

  it('listens for category button click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('중식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
