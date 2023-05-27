import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  category : string[],
  filterText : string,
  setFilterText : (value:string)=>void,
  filterCategory : string,
  setFilterCategory : (value:string)=>void
}

export default function SearchBar({
  category, filterText, setFilterText, filterCategory, setFilterCategory,
}:SearchBarProps) {
  return (
    <div>
      <TextField filterText={filterText} setFilterText={setFilterText} />
      <div>
        {['전체', ...category].map((categories) => (
          <Categories
            key={categories}
            category={categories}
            setFilterCategory={setFilterCategory}
          />
        ))}
      </div>
    </div>
  );
}
