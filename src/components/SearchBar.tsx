import TextField from './TextField';
import CategoriesButtons from './CategoriesButtons';

type SearchBarProps = {
  searchText: string;
  searchButton: string;
  setSearchText: (v: string) => void;
  setCategory: (v: string) => void;
};

export default function SearchBar({
  searchText,
  searchButton,
  setSearchText,
  setCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        labelClassName='flex items-center justify-center whitespace-nowrap font-bold text-red-700 mr-2'
        labelContent='검색'
        inputClassName='h-12 text-sm border rounded-lg w-full mr-4'
        inputPlaceholder='식당 이름...'
        text={searchText}
        setText={setSearchText}
      />
      <CategoriesButtons category={searchButton} setCategory={setCategory} />
    </>
  );
}
