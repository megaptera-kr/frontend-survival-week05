import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TextFieldProps = {
  labelClassName: string;
  labelContent: string;
  inputClassName: string;
  inputPlaceholder: string;
};

export default function TextField({
  labelClassName,
  labelContent,
  inputClassName,
  inputPlaceholder,
}: TextFieldProps) {
  const id = useRef(`input-label-${uuidv4()}`);

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
      />
    </>
  );
}
