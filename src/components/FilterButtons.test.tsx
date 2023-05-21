import { render, screen } from '@testing-library/react';

import FilterButtons from './FilterButtons';

describe('<FilterButtons />', () => {
  const categories = ['전체', '한식', '중식', '일식'];
  const setFilterCategory = jest.fn();

  it('render filter buttons', () => {
    render(<FilterButtons
      categories={categories}
      setFilterCategory={setFilterCategory}
    />);

    categories.forEach((category) => (
      screen.getByRole('button', { name: category })
    ));
  });
});
