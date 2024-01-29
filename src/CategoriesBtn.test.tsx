import { fireEvent, render, screen } from '@testing-library/react';

import CategoriesBtn from './CategoriesBtn';

const context = describe;
describe('CategoriesBtn', () => {
  const category = '중식';
  const setCategory = jest.fn();

  beforeEach(() => {
    setCategory.mockClear();
  });

  const renderCategoriesBtn = () => {
    render(<CategoriesBtn category={category} setCartegory={setCategory} />);
  };
  context('컴포넌트가 특정 카테고리로 렌더링될 때', () => {
    it('해당 카테고리 이름을 가진 버튼을 렌더링한다.', () => {
      renderCategoriesBtn();
      expect(screen.getByRole('button')).toHaveTextContent(category);
    });
  });

  context('버튼이 클릭이될때', () => {
    it('중식 카테고리로 setCategory 함수를 호출한다.', () => {
      renderCategoriesBtn();
      fireEvent.click(screen.getByRole('button'));
      expect(setCategory).toBeCalledWith(category);
    });
  });
});
