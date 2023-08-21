import { ChangeEvent } from 'react';

type TextFieldProps = {
  setQuery: (value: string) => void;
}

function TextField({ setQuery }: TextFieldProps) {
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };
  return (
    <>
      <label htmlFor="search-input" style={{ paddingRight: '1rem' }}>검색</label>
      <input type="text" id="search-input" placeholder="식당 이름" onChange={handleChangeQuery} />
    </>
  );
}

export default TextField;
