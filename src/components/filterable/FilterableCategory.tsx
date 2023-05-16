import React from 'react';
import Button from '../common/atoms/button/Button';

type FilterableCategoryProps = {
  filterCategories: string[];
  setFilterCategory: (value: string) => void;
}

export default function FilterableCategory({
  filterCategories, setFilterCategory,
}: FilterableCategoryProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setFilterCategory(value);
  };

  return (
    <ul style={{ display: 'flex', listStyle: 'none' }}>
      {filterCategories.map((category: string) => (
        <li
          key={category}
          style={{ marginRight: '3rem' }}
        >
          <Button
            data-testid={`testButton-${category}`}
            name={`#${category}`}
            value={category}
            onClick={handleClick}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
}
