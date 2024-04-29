import getTotalPrice from '.';
import fixtures from '../../../fixtures';

const context = describe;

describe('getTotalPrice 함수', () => {
  const menu = fixtures.foods;
  context('menu 배열을 전달하면', () => {
    it('price를 합산해서 반환한다.', () => {
      expect(getTotalPrice(menu)).toBe(13_000);
    });
  });

  context('빈 배열을 전달하면', () => {
    it('0을 반환한다.', () => {
      expect(getTotalPrice([])).toBe(0);
    });
  });
});
