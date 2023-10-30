import { render, screen } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  const categories = ['한식', '중식', '일식'];

  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all categories', () => {
    render((
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    ));

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
