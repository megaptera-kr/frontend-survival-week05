import { createContext } from 'react';
import Restaurant from '../../src/types/restaurants';

const RestaurantsContext = createContext<Restaurant[]>([]);

export default RestaurantsContext;
