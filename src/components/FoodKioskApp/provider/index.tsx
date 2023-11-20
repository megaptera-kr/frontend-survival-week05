import React, { createContext, useReducer } from 'react';

import reducer from '../reducer';
import { Action, State } from '../types';

type WeatherAppProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  restaurants: [],
  category: '전체',
  query: '',
  receipt: {},
  addedMenus: [],
};

export const FoodKioskContext = createContext<State>(initialState);
export const FoodKioskDispatchDispatchContext = createContext<
  React.Dispatch<Action>
>(() => null);

export default function FoodKioskAppProvider({
  children,
}: WeatherAppProviderProps) {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <FoodKioskContext.Provider value={data}>
      <FoodKioskDispatchDispatchContext.Provider value={dispatch}>
        {children}
      </FoodKioskDispatchDispatchContext.Provider>
    </FoodKioskContext.Provider>
  );
}
