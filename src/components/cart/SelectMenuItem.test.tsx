import {
  render, fireEvent, screen,
} from '@testing-library/react';
import SelectMenuItem from './SelectMenuItem';

const context = describe;

describe('SelectMenuItem', () => {
  const currentIndex = 0;
  const currentTitle = '삭제';
  const item = {
    id: 'FOOD_01-ASD',
    name: '짜장면',
    price: 8_000,
  };
  const handleCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderSelectMenuItem = (index:number, title:string) => {
    render(<SelectMenuItem
      index={index}
      title={title}
      item={item}
      handleCart={handleCart}
    />);
  };
  context('인덱스, 타이틀, 아이템을 전달해주면', () => {
    it('메뉴 항목을 렌더링 한다.', () => {
      renderSelectMenuItem(currentIndex, currentTitle);
      const button = screen.getByTestId('#0');
      const menu = screen.getByText('짜장면(8,000원)');

      expect(button).toBeInTheDocument();
      expect(menu).toBeInTheDocument();
    });
  });
  context('사용자가 삭제 버튼을 클릭하면', () => {
    it('해당 버튼이 호출되어야 한다', async () => {
      renderSelectMenuItem(currentIndex, currentTitle);

      const button = screen.getByTestId('#0');
      fireEvent.click(button);

      expect(handleCart).toBeCalledTimes(1);
    });
  });
});
