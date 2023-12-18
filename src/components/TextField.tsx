type TextFieldType = {
    label:string;
    placeholder: string;
    text: string;
    setText: (value: string) => void;
}

export default function TextField({
  label, placeholder, text, setText,
}: TextFieldType) {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div>
      <label htmlFor="filterTextInput" style={{ marginRight: 10 }}>{label}</label>
      <input type="text" id="filterTextInput" placeholder={placeholder} value={text} onChange={handleChange} />
    </div>
  );
}
