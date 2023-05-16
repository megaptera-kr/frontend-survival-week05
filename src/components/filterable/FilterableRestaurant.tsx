import FilterableCategory from './FilterableCategory';
import SearchField from './SearchField';

type FilterableRestaurantProps = {
  filterCategories: string[];
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

export default function FilterableRestaurant({
  filterCategories, setFilterText, setFilterCategory,
}: FilterableRestaurantProps) {
  return (
    <div>
      <SearchField
        setFilterText={setFilterText}
      />
      <FilterableCategory
        filterCategories={filterCategories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
