import { useContext } from 'react';

import { FoodKioskContext } from '../provider';

export default function useFookKioskStore() {
  return useContext(FoodKioskContext);
}
