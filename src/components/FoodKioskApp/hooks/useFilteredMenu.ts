import { useMemo } from 'react';

import useFookKioskStore from './useFoodKioskStore';

import select from '../utils/select';

import filterBySearchQuery from '../utils/filterBySearchQuery';

export default function useFilteredMenu() {
  const { restaurants: restaurantsData, category, query } = useFookKioskStore();

  const restaurants = useMemo(() => {
    let result = [...restaurantsData];

    if (category === '전체') {
      result = filterBySearchQuery(result, query);
    } else {
      result = filterBySearchQuery(select(result, 'category', category), query);
    }

    return result;
  }, [restaurantsData, category, query]);

  return { restaurants };
}
