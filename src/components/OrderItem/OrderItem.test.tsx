import { render, screen } from '@testing-library/react';
import OrderItem from '.';

const context = describe;

describe('OrderItem 컴포넌트', () => {
  // given
  const name = '짜장면';
  const price = 8000;
  const removeMenuItem = jest.fn();

  beforeEach(() => {
    render(<OrderItem
      name={name}
      price={price}
      removeMenuItem={removeMenuItem}
    />);
  });

  // when
  context('name, price props가 전달되면', () => {
    // then
    it('name이 화면에 렌더링된다.', () => {
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    });

    it('price가 원화로 변환되어 화면에 렌더링된다.', () => {
      expect(screen.getByText(/8,000원/)).toBeInTheDocument();
    });

    it('취소 버튼이 렌더링된다.', () => {
      expect(screen.getByText('취소')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
