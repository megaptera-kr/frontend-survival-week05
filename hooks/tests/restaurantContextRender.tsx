import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';

import RestaurantsContext from '../context/RestaurantsContext';
import useFetchRestaurants from '../__mocks__/useFetchRestaurants';
import Restaurant from '../../src/types/restaurants';

function AllTheProviders({ children }: {children: React.ReactNode}) {
  const restaurant: Restaurant[] = useFetchRestaurants();

  return (
    <RestaurantsContext.Provider value={restaurant}>
      {children}
    </RestaurantsContext.Provider>
  );
}

const restaurantContextRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { restaurantContextRender as render };
