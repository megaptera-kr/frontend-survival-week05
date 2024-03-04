import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TextFieldProps = {
  labelClassName: string;
  labelContent: string;
  inputClassName: string;
  inputPlaceholder: string;
  text: string;
  setText: (v: string) => void;
};

export default function TextField({
  labelClassName,
  labelContent,
  inputClassName,
  inputPlaceholder,
  text,
  setText,
}: TextFieldProps) {
  const id = useRef(`input-label-${uuidv4()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <>
      <label className={labelClassName} htmlFor={id.current}>
        {labelContent}
      </label>
      <input
        className={inputClassName}
        id={id.current}
        type='text'
        placeholder={inputPlaceholder}
        value={text}
        onChange={handleChange}
      />
    </>
  );
}
