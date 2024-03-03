type TextFieldProps = {
  label: string;
  placeholder: string;
  text: string;
  setText: (text: string) => void;
};

export default function TextField({
  label,
  placeholder,
  text,
  setText,
}: TextFieldProps) {
  const id = `${label}_${Math.random()}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <div>
      <label htmlFor={id}>{`${label} : `}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
