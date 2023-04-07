import type { RestaurantsFilter } from '../../../types/restaurants';
import CategoryFilter from './categoryFilter/CategoryFilter';
import SearchFilter from './searchFilter/SearchFilter';

interface RestaurantsFilterProps {
  filter: RestaurantsFilter;
  categories: string[];
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RestaurantsFilter(
  { filter: { searchText, category }, categories, handleChangeFilter }: RestaurantsFilterProps,
) {
  return (
    <article>
      <h2>식당 검색창</h2>
      <SearchFilter id="search" name="searchText" value={searchText} onChange={handleChangeFilter} />
      <CategoryFilter categories={categories} name="category" value={category} onChange={handleChangeFilter} />
    </article>
  );
}
