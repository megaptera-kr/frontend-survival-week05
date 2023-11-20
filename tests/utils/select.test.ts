import context from '../config';
import restaurants from '../../fixtures/restaurants';

function select<T, V>(items: T[], key: keyof T, value: V) {
  return items.filter((item) => item[key] === value);
}

describe('', () => {
  context('select()', () => {
    const category: 'id' | 'category' | 'name' | 'menu' = 'category';
    it.each([
      [[...restaurants], category, '중식', 1],
      [[...restaurants], category, '한식', 1],
      [[...restaurants], category, '일식', 1],
      [[...restaurants], category, '하하', 0],
    ])('select(%s, %s, %s) returns %s', (first, second, third, expected) => {
      expect(select(first, second, third).length).toBe(expected);
    });
  });
});
