import React from 'react';
import FilterButton from './FilterButton';

interface FilterButtonsProps {
  categories : string[];
  setFilterCategory : React.Dispatch<React.SetStateAction<string>>;
}

const buttonKey = (category:string, index:number) => `${index}-${category}`;

export default function FilterButtons({
  categories,
  setFilterCategory,
} : FilterButtonsProps) {
  return (
    <ul style={{ display: 'flex' }}>
      {categories.map((category, index) => (
        <FilterButton
          key={buttonKey(category, index)}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
