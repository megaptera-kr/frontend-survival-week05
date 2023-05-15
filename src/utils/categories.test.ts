import fixtures from '../../fixtures';
import categories from './categories';

const context = describe;

describe('categories function', () => {
  context('아무것도 전달하지 않았을 때', () => {
    it('전체만 들어있는 배열이 리턴된다.', () => {
      expect(categories()).toEqual(['전체']);
    });
  });
  context('레스토랑 타입의 배열을 전달했을 때', () => {
    it('레스토랑 카테고리가 들어있는 배열이 리턴된다.', () => {
      expect(categories(fixtures.restaurants)).toEqual(['전체', '중식', '한식', '일식']);
    });
  });
});
