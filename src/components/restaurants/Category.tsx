type CategoryProps = {
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function Category({ category, setFilterCategory }: CategoryProps) {
  return (
    <li>
      <button
        className="category"
        type="button"
        name={category}
        onClick={() => setFilterCategory(category)}
      >
        {category}
      </button>
    </li>
  );
}
