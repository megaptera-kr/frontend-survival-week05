import React from 'react';
import InputText from '../common/atoms/input/InputText';

type SearchFieldProps = {
  setFilterText: (value: string) => void;
};

export default function SearchField({
  setFilterText,
}: SearchFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div style={{ display: 'flex' }}>
      <InputText
        label="검색"
        name="#SearchInput"
        placeholder="식당 이름"
        onChange={handleChange}
      />
    </div>
  );
}
