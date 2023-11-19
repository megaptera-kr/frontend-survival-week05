import { ChangeEvent } from 'react';
import { SearchBarProps } from '../../interfaces/RestaurantList.interface';

function SearchBar({ searchKeyword, onChangeSearchKeyword } : SearchBarProps) {
  const handleChangeSearchKeyword = (event : ChangeEvent<HTMLInputElement>) => {
    onChangeSearchKeyword(event.target.value);
  };
  return (
    <input type="text" value={searchKeyword} onInput={handleChangeSearchKeyword} />
  );
}

export default SearchBar;
