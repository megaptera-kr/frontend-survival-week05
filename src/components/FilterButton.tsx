interface FilterButtonProps {
    category : string;
    setFilterCategory : React.Dispatch<React.SetStateAction<string>>;
  }

export default function FilterButton({
  category,
  setFilterCategory,
}: FilterButtonProps) {
  const handleClick = () => {
    setFilterCategory(category);
  };

  return (
    <li
      style={{ marginBlock: '1rem', marginInline: '.2rem' }}
    >
      <button
        type="button"
        onClick={handleClick}
      >
        {category}
      </button>
    </li>
  );
}
