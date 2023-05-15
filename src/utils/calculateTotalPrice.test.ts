import foods from '../../fixtures/foods';
import calculateTotalPrice from './calculateTotalPrice';

const context = describe;

describe('calculateTotalPrice Function', () => {
  context('빈 배열이 주어지면', () => {
    it('0을 리턴한다', () => {
      expect(
        calculateTotalPrice([]),
      ).toEqual(0);
    });
  });
  context('짜장면(8000), 짬뽕(5000) 메뉴가 들어있는 배열이 주어지면', () => {
    it('13000을 리턴한다', () => {
      expect(
        calculateTotalPrice(foods),
      ).toEqual(13000);
    });
  });
});
