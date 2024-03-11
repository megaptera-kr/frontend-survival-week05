import CategoryButton from './CategoryButton';

type CategoryButtonProps = {
  categories: string[];
  setCategory: (text: string) => void;
}

function CategoryButtons({ categories, setCategory }: CategoryButtonProps) {
  return (
    <ul style={{
      display: 'flex',
      padding: 0,
      listStyle: 'none',
    }}
    >
      {['전체', ...categories].map((category: string) => (
        <CategoryButton
          key={category}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </ul>
  );
}

export default CategoryButtons;
