import CategoryButtons from './CategoryButtons';
import TextField from './TextField';

type SearchBarProps = {
  text: string;
  categories: string[];
  setText: (text: string) => void;
  setCategory: (text: string) => void;
}

function SearchBar({
  text, categories, setText, setCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={text}
        setText={setText}
      />
      <CategoryButtons
        categories={categories}
        setCategory={setCategory}
      />
    </div>
  );
}

export default SearchBar;
