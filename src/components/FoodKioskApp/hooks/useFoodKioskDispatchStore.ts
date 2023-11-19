import { useContext } from 'react';

import { FoodKioskDispatchDispatchContext } from '../provider';

export default function useFoodKioskDispatchStore() {
  return useContext(FoodKioskDispatchDispatchContext);
}
