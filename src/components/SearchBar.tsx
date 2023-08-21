import { MouseEvent } from 'react';
import type { Restaurants } from '../types/restaurants';
import extractCategories from '../utils/extractCategories';
import TextField from './TextField';

type SearchBarProps = {
  restaurants: Restaurants[];
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
};

function SearchBar({
  restaurants, setQuery, setCategory,
}: SearchBarProps) {
  const foodCategories = extractCategories(restaurants);

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = e.currentTarget;
    if (!textContent) throw Error('error');
    setCategory(textContent);
  };

  return (
    <div>
      <TextField setQuery={setQuery} />
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
