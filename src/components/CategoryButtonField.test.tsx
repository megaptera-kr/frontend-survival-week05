import { render, screen } from '@testing-library/react';
import CategoryButtonField from './CategoryButtonField';

describe('CategoryButtonField', () => {
  const categories = ['전체', '중식', '한식', '일식'];

  const onClick = jest.fn();

  function renderCategoryButtonField() {
    render((
      <CategoryButtonField
        onClick={onClick}
      />
    ));
  }

  it('renders all categories', () => {
    renderCategoryButtonField();

    screen.getByText('전체');

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
