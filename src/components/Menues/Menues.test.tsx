import { render, screen } from '@testing-library/react';
import foods from '../../../fixtures/foods';
import Menues from './Menues';

const context = describe;

const handleAddCart = () => {
  // eslint-disable-next-line no-console
  console.log('test');
};

describe('Menues에는 메뉴와 장바구니에 메뉴를 담기위한 함수가 있다.', () => {
  context('메뉴에 짜장면이 있는 조회한다.', () => {
    render(
      <Menues menues={foods} handleAddCart={handleAddCart} />,
    );
    it('짜장면이 있다.', () => {
      screen.getAllByText('짜장면');
    });
  });
});
