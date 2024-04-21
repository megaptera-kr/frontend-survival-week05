import { ChangeEvent, useRef } from 'react';

type TextFieldProps = {
  label:string;
  placeholder:string;
  text:string;
  setText:(txt:string) => void
}

function TextField({
  label, placeholder, text, setText,
}:TextFieldProps) {
  const id = useRef<string>(`input-${label}`);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div style={{ marginBlock: '1rem' }}>
      <label
        htmlFor={id.current}
        style={{ marginRight: '0.5rem' }}
      >
        {label}
      </label>
      <input
        type="text"
        id={id.current}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
