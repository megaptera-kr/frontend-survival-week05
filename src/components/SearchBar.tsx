import Categories from './Categories';
import TextField from './TextField';

type SearchBarType = {
    filterText: string;
    categories: string[];
    setFilterText: (text: string) => void;
    setFilterCategory: (text: string) => void;
}
export default function SearchBar({
  filterText, setFilterText, categories, setFilterCategory,
}: SearchBarType) {
  return (
    <div>
      <TextField label="검색" placeholder="식당 이름" text={filterText} setText={setFilterText} />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
