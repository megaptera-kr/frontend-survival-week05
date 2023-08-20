import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { Menu } from '../types/restaurants';
import fixtures from '../../fixtures';

const context = describe;

describe('Cart', () => {
  const { foods } = fixtures;
  const setReceipt = jest.fn();

  const setItem = <T, >(id: string, item:T) => {
    window.localStorage.setItem(id, JSON.stringify(item));
  };

  beforeEach(() => {
    jest.clearAllMocks();
    setItem('cart', foods);
  });

  const renderComponent = () => {
    render(<Cart setReceipt={setReceipt} />);
  };

  it('Render without errors', () => {
    renderComponent();
  });

  context('로컬스토리지에 메뉴가 추가될 때', () => {
    it('카트 리스트가 보인다', () => {
      renderComponent();
      const food = screen.getByText(/짬뽕/);
      const btns = screen.getAllByText('취소');
      expect(food).toBeInTheDocument();
      expect(btns).toHaveLength(2);
      expect(btns.length).toEqual(foods.length);
    });
  });
});
