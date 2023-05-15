import { ChangeEvent, useRef } from 'react';

interface TextFieldProps {
    label: string;
    text: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({ label, text, onChange }: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  return (
    <>
      <label
        htmlFor={id.current}
        style={{ marginRight: 10 }}
      >
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder="식당 이름"
        value={text}
        onChange={onChange}
      />
    </>
  );
}
