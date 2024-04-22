import { render, screen } from '@testing-library/react';
import CategoryButton from '.';
import Category from '../../types/Category';

const context = describe;

describe('CategoryButton', () => {
  // given
  let category:Category = '전체';
  let selectedCategory:Category = '전체';
  const setSelectedCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // when
  context('category props가 주어지면', () => {
    // then
    it('category가 버튼명으로 렌더링된다.', () => {
      render(<CategoryButton
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />);
      screen.getByText(category);
    });
  });

  context('category와 selectedCategory가 동일하면', () => {
    it('text 색상이 Red이다.', () => {
      category = '일식';
      selectedCategory = '일식';
      render(<CategoryButton
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />);
      const redButton = screen.getByText(category);
      expect(redButton).toHaveStyle({ color: 'red' });
    });
  });

  context('category와 selectedCategory가 동일하지 않으면', () => {
    it('text style이 없다.', () => {
      category = '전체';
      selectedCategory = '일식';
      render(<CategoryButton
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />);
      const defaultButton = screen.getByText(category);
      expect(defaultButton).not.toHaveStyle({ color: 'red' });
    });
  });
});
