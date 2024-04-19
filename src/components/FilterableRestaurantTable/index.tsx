import TextField from '../TextField';

function FilterableRestaurantTable() {
  return (
    <div className="filterableRestaurantTable">
      <TextField label="검색" placeholder="식당 이름" />
    </div>
  );
}

export default FilterableRestaurantTable;
