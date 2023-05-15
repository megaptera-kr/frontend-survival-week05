import { useState } from 'react';

import { RestaurantsFilter } from '../../../types/restaurants';

interface UseRestaurantsFilter {
  filter: RestaurantsFilter;
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UseRestaurantsFilter(): UseRestaurantsFilter {
  const [filter, setFilter] = useState({
    searchText: '',
    category: '전체',
  });

  function handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFilter((prev) => ({ ...prev, [name]: value }));
  }

  return {
    filter,
    handleChangeFilter,
  };
}
