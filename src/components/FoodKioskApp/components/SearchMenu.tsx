import { Stack, Input } from '../../atoms';

import useInput from '../hooks/useInput';

type SearchMenuProps = {
  htmlFor: string;
  placeholder: string;
};

export default function SearchMenu({ htmlFor, placeholder }: SearchMenuProps) {
  const { query, handleChangeQuery } = useInput();

  return (
    <Stack $direction="row" id="filterable-menu-search-container">
      <label htmlFor={htmlFor}>검색</label>
      <Input
        type="text"
        id={htmlFor}
        aria-label={htmlFor}
        placeholder={placeholder}
        value={query}
        onChange={handleChangeQuery}
      />
    </Stack>
  );
}
