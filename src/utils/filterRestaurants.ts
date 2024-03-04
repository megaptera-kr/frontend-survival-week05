import Restaurant from '../types/Restaurant';

// 인자로 입력 받은 배열에서 식당이름에서 text가 있는 배열만 출력

function normalize(text:string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText:string;
  filterCategory : string;
}

export default function filterRestaurants(
  restaurants:Restaurant[],
  { filterText, filterCategory } : FilterConditions,
) {
  const match = (restaurant:Restaurant) => restaurant.category === filterCategory;
  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant:Restaurant) => normalize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains);
}
