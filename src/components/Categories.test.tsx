import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('RestaurantTable ', () => {
  const categories = ['중식', '한식', '일식'];
  const setFilterCategory = jest.fn();

  it('renders Categories', async () => {
    render(<Categories
      categories={categories}
      setFilterCategory={setFilterCategory}
    />);

    screen.getByText(/전체/);
    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
