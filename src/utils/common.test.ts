import {
  moneyformat,
  sum,
  getPriceList,
  calculateTotalMenuPrice,
} from './common';

import fixtures from '../../fixtures';

describe('moneyformat 함수는', () => {
  it('머니 포멧의 스트링 값을 리턴한다.', () => {
    expect(moneyformat(0)).toBe('0');
    expect(moneyformat(10)).toBe('10');
    expect(moneyformat(100)).toBe('100');
    expect(moneyformat(1000)).toBe('1,000');
    expect(moneyformat(10000)).toBe('10,000');
    expect(moneyformat(100000)).toBe('100,000');
    expect(moneyformat(1000000)).toBe('1,000,000');
  });
});

describe('sum 함수는', () => {
  it('숫자 배열의 총합을 리턴한다.', () => {
    expect(sum([])).toBe(0);
    expect(sum([0])).toBe(0);
    expect(sum([0, 1])).toBe(1);
    expect(sum([0, 2])).toBe(2);
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('getPriceList 함수는', () => {
  it('빈 메뉴 배열이 주어질 때, 빈 배열을 반환한다.', () => {
    expect(getPriceList([])).toEqual([]);
  });

  it('메뉴 배열이 주어질 때, 가격 배열을 반환한다.', () => {
    const expectedPriceList: number[] = [8000, 5000];
    expect(getPriceList(fixtures.foods)).toEqual(expectedPriceList);
  });
});

describe('calculateTotalMenuPrice 함수는', () => {
  it('빈 메뉴 배열이 주어질 때, 숫자 0을 리턴한다.', () => {
    expect(calculateTotalMenuPrice([])).toEqual(0);
  });

  it('메뉴 배열이 주어질 때, 메뉴 가격의 총 합을 리턴한다.', () => {
    expect(calculateTotalMenuPrice(fixtures.foods)).toEqual(13000);
  });
});
