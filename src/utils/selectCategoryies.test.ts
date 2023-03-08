import { restaurants } from '../fixtures';
import selectCategories from './selectCategories';

test('selectCategory test', () => {
    expect(selectCategories(restaurants)).toStrictEqual(['중식', '한식', '일식']);
})