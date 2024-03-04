import { useEffect, useState } from 'react';

import readCategories from '../api/categories.api';

import CategoryType from '../types/CategoryType';

function useCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: CategoryType[] = await readCategories();
      setCategories(data);
    };

    fetchData();
  }, []);

  return { categories };
}

export default useCategories;
