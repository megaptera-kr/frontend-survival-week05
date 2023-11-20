import { Action, State } from '../types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'fetch_data':
      return {
        ...state,
        restaurants: action.payload,
      };

    case 'update_category':
      return {
        ...state,
        category: action.payload,
      };

    case 'search':
      return {
        ...state,
        query: action.payload,
      };

    case 'add_menu':
      return {
        ...state,
        addedMenus: [...state.addedMenus, action.payload],
      };

    case 'reset_menu':
      return {
        ...state,
        addedMenus: action.payload,
      };

    case 'delete_menu':
      return {
        ...state,
        addedMenus: [
          ...state.addedMenus.filter((_, index) => index !== action.payload),
        ],
      };

    case 'get_receipt':
      return {
        ...state,
        receipt: action.payload,
      };

    case 'delete_receipt':
      return {
        ...state,
        receipt: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
