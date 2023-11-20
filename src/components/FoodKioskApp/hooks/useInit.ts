import { useEffect } from 'react';

import { useFetch } from 'usehooks-ts';

import useFoodKioskDispatchStore from './useFoodKioskDispatchStore';

import { RestaurantsItem } from '../types';

import { getRataurantsURL } from '../../../api';

export default function useInit() {
  const { data } = useFetch<RestaurantsItem>(getRataurantsURL);

  const dispatch = useFoodKioskDispatchStore();

  useEffect(() => {
    if (data?.restaurants) {
      dispatch?.({ type: 'fetch_data', payload: data.restaurants });
    }
  }, [data]);

  return {
    restaurntsData: data?.restaurants ? data.restaurants : [],
  };
}
