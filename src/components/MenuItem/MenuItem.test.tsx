import { render, screen } from '@testing-library/react';
import MenuItem from '.';
import { convertKRW } from '../../utils';

const context = describe;

describe('MenuItem 컴포넌트', () => {
  const name = '짜장면';
  const price = 8000;

  context('name, price props가 주어지면', () => {
    render(<MenuItem name={name} price={price} />);

    it('name과 원화로 변환된 금액, "선택" 버튼이 렌더링된다.', () => {
      screen.getByText(`${name}(${convertKRW(price)})`);
      screen.getByText('선택');
    });
  });
});
