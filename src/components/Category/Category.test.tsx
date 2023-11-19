import { render } from '@testing-library/react';
import Category from './Category';

const context = describe;

const category = '한식';
let currentCategory = '';

const onChangeCategory = (value : string) => {
  currentCategory = value;
};

describe('카테고리 목록을 가져온다.', () => {
  context('카테고리 목록을 선택한다.', () => {
    render(<Category
      category={category}
      currentCategory={currentCategory}
      onChangeCategory={onChangeCategory}
    />);

    it('선택된 카테고리가 변수에 할당된다.', () => {
      onChangeCategory(category);
      expect(category === currentCategory).toBeTruthy();
    });
  });
});
