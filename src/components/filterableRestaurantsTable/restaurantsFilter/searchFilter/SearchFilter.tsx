import { useRef } from 'react';

interface SearchFilterProps {
id: string;
name: string;
value: string;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter({
  id, name, value, onChange,
}: SearchFilterProps) {
  const inputId = useRef(`search-${id}`);

  return (
    <div>
      <label htmlFor={inputId.current}>검색</label>
      <input id={inputId.current} name={name} value={value} onChange={onChange} />
    </div>
  );
}
