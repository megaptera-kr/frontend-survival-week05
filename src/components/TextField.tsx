import { useRef } from 'react';

type TextFieldProps = {
    filterText: string;
    setFilterText: (text: string) => void;
}

export default function TextField({
  filterText,
  setFilterText,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  return (
    <div>
      <label htmlFor={id.current}>검색</label>
      <input
        id={id.current}
        value={filterText}
        placeholder="식당 이름"
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}
