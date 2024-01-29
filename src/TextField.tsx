type TextFieldProps = {
    query: string;
    setQuery: (query: string) => void;
}
export default function TextField({ query, setQuery }: TextFieldProps) {
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setQuery(target.value);
  };
  return (
    <div>
      <label htmlFor="search-id">검색</label>
      <input value={query} type="text" id="search-id" onChange={handleChangeQuery} />
    </div>
  );
}
