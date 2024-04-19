import { useRef } from 'react';

type TextFieldProps = {
  label:string;
  placeholder:string;
}

function TextField({ label, placeholder }:TextFieldProps) {
  const id = useRef<string>(`input-${label}`);
  return (
    <div>
      <label htmlFor={id.current} placeholder={placeholder}>{label}</label>
      <input type="text" id={id.current} />
    </div>
  );
}

export default TextField;
