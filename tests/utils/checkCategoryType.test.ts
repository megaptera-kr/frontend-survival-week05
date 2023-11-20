import context from '../config';
import { CategoryType } from '../../src/components/FoodKioskApp/types';

export default function checkCategoryType(
  value: string,
): value is CategoryType {
  return ['전체', '중식', '한식', '일식'].includes(value);
}

describe('카테고리 체크', () => {
  context('checkCategoryType()', () => {
    it.each([
      ['전체', true],
      ['중식', true],
      ['한식', true],
      ['일식', true],
      ['장식', false],
    ])('checkCategoryType(%s, %s) returns %s', (first, expected) => {
      expect(checkCategoryType(first)).toBe(expected);
    });
  });
});
