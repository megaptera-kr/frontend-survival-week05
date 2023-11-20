import { MouseEvent } from 'react';

import useFoodKioskDispatchStore from './useFoodKioskDispatchStore';

import checkCategoryType from '../utils/checkCategoryType';
import useFookKioskStore from './useFoodKioskStore';

export default function useChangeCategory() {
  const { category } = useFookKioskStore();

  const dispatch = useFoodKioskDispatchStore();

  const handleClickCategory = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (category !== value && checkCategoryType(value)) {
      dispatch?.({ type: 'update_category', payload: value });
    }
  };

  return { handleClickCategory };
}
