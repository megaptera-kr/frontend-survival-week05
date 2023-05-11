type CategoryButtonProps = {
  name: string;
  setSelectCategory: (name: string) => void;
}

export default function CategoryButton({
  name,
  setSelectCategory,
}:CategoryButtonProps) {
  return (
    <button
      type="button"
      className="w-1/5 bg-green-400 rounded py-2 mx-4"
      onClick={() => setSelectCategory(name)}
    >
      {name}
    </button>
  );
}
