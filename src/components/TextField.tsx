import React from 'react';

type TextFieldProps = {
  filterText : string,
  setFilterText : (value:string) => void
}

export default function TextField({ filterText, setFilterText }:TextFieldProps) {
  function handleText(e:React.ChangeEvent<HTMLInputElement>) {
    setFilterText(e.target.value);
  }
  return (
    <label>
      검색
      <input type="text" placeholder="식당 이름" value={filterText} onChange={handleText} />
    </label>
  );
}
