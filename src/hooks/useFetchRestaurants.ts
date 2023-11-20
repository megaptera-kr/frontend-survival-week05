import { useFetch } from 'usehooks-ts';
// import { useEffect, useState } from 'react';
import { Restaurant } from '../types';

type RestaurantResult = {
    restaurants : Restaurant[]
}

export default function useFetchProducts() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<RestaurantResult>(url);

  if (!data) {
    return [];
  }
  return data.restaurants;
}

// function useFetchOld() {
//   const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'http://localhost:3000/restaurants';
//       const response = await fetch(url);
//       const data = await response.json();
//       setRestaurants(data.restaurants);
//     };

//     fetchData();
//   }, []);

//   return restaurants;
// }
