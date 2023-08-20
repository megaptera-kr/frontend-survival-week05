import TextField from './TextField';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchBar({
  value,
  setValue,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
