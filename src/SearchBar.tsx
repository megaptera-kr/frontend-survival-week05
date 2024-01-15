import CategoriesBtn from './CategoriesBtn';
import TextField from './TextField';

type SearchBarProps = {
    categories: string[];
    setCartegory: (cartegory: string) => void;
    query : string;
    setQuery : (query:string) => void;
  }
export default function SearchBar({
  categories, setCartegory, query, setQuery,
}: SearchBarProps) {
  return (
    <div>
      <TextField query={query} setQuery={setQuery} />
      <ul style={{ display: 'flex', listStyle: 'none', padding: '0px' }}>
        {['전체', ...categories]?.map((category) => (
          <CategoriesBtn key={category} category={category} setCartegory={setCartegory} />
        ))}
      </ul>
    </div>
  );
}
