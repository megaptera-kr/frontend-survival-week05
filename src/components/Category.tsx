import Button from './Button';

type CategoryType = {
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function Category({
  category, setFilterCategory,
}: CategoryType) {
  return (
    <li
      style={{
        marginRight: '1rem',
      }}
    >
      <Button type="button" title={category} onClick={() => setFilterCategory(category)} />
    </li>
  );
}
