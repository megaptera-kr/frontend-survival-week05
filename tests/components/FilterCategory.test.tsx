import { render, screen, fireEvent } from '@testing-library/react';

import FilterCategory from '../../src/components/FoodKioskApp/components/FilterCategory';
import categories from '../../src/components/FoodKioskApp/constants/categories';

const handleClickCategory = jest.fn();

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useChangeCategory',
  () => () => ({
    handleClickCategory,
  }),
);

describe('FilterCategory', () => {
  it('renders all category buttons', () => {
    render(<FilterCategory />);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});

describe('FilterCategory Click Events', () => {
  beforeEach(() => {
    handleClickCategory.mockClear();
  });

  categories.forEach((category) => {
    it('calls handleClickCategory when a category is clicked', () => {
      render(<FilterCategory />);

      const categoryButton = screen.getByText(category);
      fireEvent.click(categoryButton);

      expect(handleClickCategory.mock.calls[0][0].target.value).toBe(category);
    });
  });
});
