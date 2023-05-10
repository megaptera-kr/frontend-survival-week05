import categories from '../utils/categories';
import CategoryButton from './CategoryButton';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

type Props = {
  setSelectCategory: (name: string) => void;
}

export default function CategoryButtonGroup({
  setSelectCategory,
}:Props) {
  const restaurants = useFetchRestaurants();
  const restaurantsCategories = categories(restaurants);

  return (
    <div className="w-full flex justify-between mt-4">
      {restaurantsCategories.map((category) => (
        <CategoryButton
          key={category}
          name={category}
          setSelectCategory={setSelectCategory}
        />
      ))}
    </div>
  );
}
