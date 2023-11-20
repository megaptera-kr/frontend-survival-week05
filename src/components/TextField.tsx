import React from 'react';

type Props = {
    label ?: string;
    value : string;
    setValue :React.Dispatch<React.SetStateAction<string>>;
    placeholder ?: string
}

function TextField({
  label = '검색', value, setValue, placeholder = '',
} : Props) {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label style={{ marginRight: '15px' }} htmlFor="search">
        {label}
      </label>
      <input id="search" value={value} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
}

TextField.defaultProps = {
  label: '',
  placeholder: '',
};

export default TextField;
