import { PostOrdersPayload, PostOrdersResponse, GetRestaurantsResponse } from '../../types';
import api, { Path } from '../../api';

export const fetchGetRestaurants = async () => {
  const res = await api<GetRestaurantsResponse>(Path.restaurants, 'get');
  
  return res;
};

export const fetchPostOrders = async (payload: PostOrdersPayload) => {
  const res = await api<PostOrdersResponse>(Path.orders, 'post', payload);

  return res;
};

export const mocking = {
  fetchGetRestaurants,
  fetchPostOrders,
};
