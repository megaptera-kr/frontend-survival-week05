import { fireEvent, render, screen } from '@testing-library/react';
import CategoryButton from './CategoryButton';

const context = describe;

describe('CategoryButton', () => {
  const name = '전체';
  const setSelectCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategoryButton() {
    render(<CategoryButton
      name={name}
      setSelectCategory={setSelectCategory}
    />);
  }
  it('랜더링 된다', () => {
    renderCategoryButton();

    screen.getByText(name);
  });

  context('사용자가 버튼을 클릭하면', () => {
    it('setSelectCategory가 호출된다', () => {
      renderCategoryButton();

      fireEvent.click(screen.getByText(name));

      expect(setSelectCategory).toBeCalledWith(name);
    });
  });
});
