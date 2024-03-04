import useCategories from '../hooks/useCategories';

import CategoryType from '../types/CategoryType';

type CategoriesButtons = {
  category: string;
  setCategory: (v: string) => void;
};

export default function CategoriesButtons({
  category,
  setCategory,
}: CategoriesButtons) {
  const categories: CategoryType[] = useCategories();

  return (
    <section className='flex flex-col'>
      <div className='flex flex-row ml-3 items-center justify-items-start'>
        {[{ id: 0, name: '전체' }, ...categories].map((item: CategoryType) => (
          <button
            type='button'
            key={item.id}
            className={`font-bold text-sm w-12 h-8 rounded-lg mr-4 ${
              category === item.name ? 'bg-black text-white' : 'bg-gray-300'
            }`}
            onClick={() => setCategory(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
