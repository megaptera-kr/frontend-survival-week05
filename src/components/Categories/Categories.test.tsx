import restaurants from '../../../fixtures/restaurants';
import { RestaurantListInterface } from '../../interfaces/RestaurantList.interface';

const context = describe;

let categories : string[] | undefined = [];

describe('레스토랑 목록을 가져온다.', () => {
  context('레스토랑 목록에서 중복되는 카테고리는 제외하고, 카테고리를 추출한다.', () => {
    categories = restaurants.reduce((acc: string[], cur : RestaurantListInterface) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
    it('전체를 확인한다.', () => {
      expect(categories?.filter((cateogry : string) => cateogry === '전체').length === 1).toBeTruthy();
    });
    it('중식을 확인한다.', () => {
      expect(categories?.filter((cateogry : string) => cateogry === '중식').length === 1).toBeTruthy();
    });
    it('한식을 확인한다.', () => {
      expect(categories?.filter((cateogry : string) => cateogry === '한식').length === 1).toBeTruthy();
    });
    it('일식을 확인한다.', () => {
      expect(categories?.filter((cateogry : string) => cateogry === '일식').length === 1).toBeTruthy();
    });
  });
});
