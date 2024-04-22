import { render, screen } from '@testing-library/react';
import CategoryFilter from '.';
import Category from '../../types/Category';

const context = describe;

describe('CategoryFilter 컴포넌트', () => {
  // given
  const categories:Category[] = ['전체', '한식', '일식', '중식'];
  let selectedCategory:Category = '전체';
  const setSelectedCategory = jest.fn();

  beforeEach(() => {
    render(<CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />);
  });

  // when
  context('categories props가 주어지면', () => {
    // then
    it('화면에 모두 노출된다.', () => {
      categories.map((category) => screen.getByText(category));
    });
  });

  // when
  context('selectedCategory가 일식이면', () => {
    selectedCategory = '일식';

    // then
    it('일식 카테고리 버튼의 text만 색상이 red이다.', () => {
      const jpButton = screen.getByText(selectedCategory);

      expect(jpButton).toHaveStyle({ color: 'red' });
    });

    // then
    it('나머지 카테고리 버튼의 text 색상은 red가 아니다.', () => {
      const otherButton = categories.filter(
        (category) => category !== selectedCategory,
      ).map((category) => screen.getByText(category));

      otherButton.forEach(
        (btn) => expect(btn).not.toHaveStyle({ color: 'red' }),
      );
    });
  });
});
