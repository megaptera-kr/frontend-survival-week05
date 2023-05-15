import fixtures from '../../fixtures';

import calculateTotalPrice from './calculateTotalPrice';

const context = describe;

describe('calculateTotalPrice', () => {
  context('장바구니에 데이터를 전달했을 때', () => {
    it('데이터의 가격의 총합을 리턴한다.', () => {
      expect(calculateTotalPrice(fixtures.foods)).toEqual(13000);
    });
  });
});
