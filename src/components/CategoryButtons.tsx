import React from 'react';
import { Category } from '../types';

type Props = {
    setCategory : React.Dispatch<React.SetStateAction<Category>>;
}
const categories : Array<{id : string, name :Category}> = [
  { id: 'all', name: '전체' },
  { id: 'chinese', name: '중식' },
  { id: 'korea', name: '한식' },
  { id: 'japanese', name: '일식' },
];

function CategoryButtons({ setCategory } : Props) {
  const handleCategory = (category : Category) => {
    setCategory(category);
  };
  return (
    <ul style={{ display: 'flex', gap: '18px' }}>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => handleCategory(category.name)}>
            {category.name}
          </button>
        </li>
      ))}

    </ul>
  );
}

export default CategoryButtons;
