import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  filterText: string;
  setFilterText:(text: string) => void;
  categories: string[];
  setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  filterText,
  setFilterText,
  categories,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
