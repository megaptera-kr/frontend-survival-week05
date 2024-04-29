import convertKRW from '.';

const context = describe;

describe('convertKRW 함수', () => {
  context('0 이상이고 1_000미만의 정수가 주어지면', () => {
    it('주어진수에 단위(원)을 붙여 문자열로 반환한다.', () => {
      expect(convertKRW(0)).toBe('0원');
      expect(convertKRW(999)).toBe('999원');
      expect(convertKRW(570)).toBe('570원');
    });
  });

  context('1_000 이상이고 10_000미만의 정수가 주어지면', () => {
    it('천 단위로 쉼표를 구분하고 단위(원)을 붙여 문자열로 반환한다.', () => {
      expect(convertKRW(1000)).toBe('1,000원');
      expect(convertKRW(8000)).toBe('8,000원');
      expect(convertKRW(9999)).toBe('9,999원');
    });
  });

  context('10_000 이상이고 1_000_000미만의 정수가 주어지면', () => {
    it('천 단위마다 쉼표를 구분하고 단위(원)을 붙여 문자열로 반환한다.', () => {
      expect(convertKRW(10000)).toBe('10,000원');
      expect(convertKRW(85000)).toBe('85,000원');
      expect(convertKRW(999999)).toBe('999,999원');
    });
  });
});
