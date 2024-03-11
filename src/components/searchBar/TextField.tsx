import React, { useRef } from 'react';

type TextField = {
  placeholder: string;
  label: string;
  text: string;
  setText: (text: string) => void;
}

function TextField({
  label, placeholder, text, setText,
}: TextField) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <div>
      <label
        htmlFor={id.current}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
