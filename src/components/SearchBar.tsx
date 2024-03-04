import SearchField from './SearchField';
import CategoriesButtons from './CategoriesButtons';

type SearchBarProps = {
  searchText: string;
  setSearchText: (v: string) => void;
  setCategory: (v: string) => void;
};

export default function SearchBar({
  searchText,
  setSearchText,
  setCategory,
}: SearchBarProps) {
  return (
    <>
      <SearchField searchText={searchText} setSearchText={setSearchText} />
      <CategoriesButtons setCategory={setCategory} />
    </>
  );
}
