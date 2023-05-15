import SelectableList from '../../../common/selectableList/SelectableList';

interface CategoryFilterProps {
  categories: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CategoryFilter({
  categories, name, value, onChange,
}: CategoryFilterProps) {
  return (
    <SelectableList
      items={categories}
      renderItem={(category) => (
        <label>
          <input type="radio" name={name} value={category} checked={value === category} onChange={onChange} />
          <span>{category}</span>
        </label>
      )}
    />

  );
}
