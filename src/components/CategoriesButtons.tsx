import useCategories from '../hooks/useCategories';

import Button from './Button';

import CategoryType from '../types/CategoryType';

type CategoriesButtons = {
  setCategory: (v: string) => void;
};

export default function CategoriesButtons({ setCategory }: CategoriesButtons) {
  const categories: CategoryType[] = useCategories();

  return (
    <section className='flex flex-col'>
      <div className='flex flex-row ml-3 items-center justify-items-start'>
        {[{ id: 0, name: '전체' }, ...categories].map(
          (category: CategoryType) => (
            <Button
              key={category.id}
              className='font-bold bg-black text-white text-sm w-12 h-8 rounded-lg mr-4'
              setButton={setCategory}
              content={category.name}
            />
          ),
        )}
      </div>
    </section>
  );
}
