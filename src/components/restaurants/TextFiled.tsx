type TextFiledProps = {
  label: string;
  placeholder: string;
  text: string;
  setText: (value: string) => void;
}

export default function TextFiled({
  label,
  placeholder,
  text,
  setText,
}:TextFiledProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <label
        className="font-semibold text-xl"
        htmlFor="search-input"
      >
        {label}
      </label>
      <input
        id="search-input"
        className="w-2/3 border-2 border-green-400 focus:outline-none focus:border-green-600
        ml-4 rounded text-xl p-2"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
