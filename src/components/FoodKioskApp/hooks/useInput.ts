import { ChangeEvent } from 'react';

import useFoodKioskDispatchStore from './useFoodKioskDispatchStore';
import useFookKioskStore from './useFoodKioskStore';

export default function useInput() {
  const { query } = useFookKioskStore();
  const dispatch = useFoodKioskDispatchStore();

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch?.({ type: 'search', payload: value });
  };

  return {
    query,
    handleChangeQuery,
  };
}
