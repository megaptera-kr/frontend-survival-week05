import { ChangeEvent, MouseEvent } from 'react';
import type { Restaurants } from '../types/restaurants';
import extractCategories from '../utils/extractCategories';

type SearchBarProps = {
  restaurants: Restaurants[];
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
};

function SearchBar({
  restaurants, setQuery, setCategory,
}: SearchBarProps) {
  const foodCategories = extractCategories(restaurants);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = e.currentTarget;
    if (!textContent) throw Error('error');
    setCategory(textContent);
  };

  return (
    <div>
      <label htmlFor="search-input" style={{ paddingRight: '1rem' }}>검색</label>
      <input type="text" id="search-input" placeholder="식당 이름" onChange={handleChangeSearch} />
      <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
        {foodCategories.map((foodCategory) => (
          <li key={foodCategory} style={{ marginRight: '1rem' }}>
            <button type="button" onClick={handleClickBtn}>{foodCategory}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
