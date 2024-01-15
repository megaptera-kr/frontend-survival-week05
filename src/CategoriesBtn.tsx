type CategoriesBtnProps = {
    category: string;
    setCartegory: (cartegory: string) => void;
}

export default function CategoriesBtn({ category, setCartegory } : CategoriesBtnProps) {
  const handleChangeCategory = () => {
    setCartegory(category);
  };
  return (
    <li key={category} style={{ marginRight: '1rem' }}>
      <button type="button" onClick={handleChangeCategory}>{category}</button>
    </li>

  );
}
