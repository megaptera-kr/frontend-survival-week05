import { render, screen } from '@testing-library/react';
import CategoryButton from '.';

const context = describe;

describe('CategoryButton', () => {
  // given
  const category = '전체';
  const selectedCategory = '전체';
  const setSelectedCategory = jest.fn();

  // when
  context('category props가 주어지면', () => {
    render(<CategoryButton
      category={category}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />);

    // then
    it('category가 버튼명으로 렌더링된다.', () => {
      screen.getByText(category);
    });
  });
});
