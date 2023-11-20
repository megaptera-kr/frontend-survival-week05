import { PostOrdersPayload, PostOrdersResponse, GetRestaurantsResponse } from '../../types';
import { Path, httpRequest } from '../../api';

export let fetchGetRestaurants = async () => {
  const res = await httpRequest<GetRestaurantsResponse>(Path.restaurants, 'get');

  return res;
};

export let fetchPostOrders = async (payload: PostOrdersPayload) => {
  const res = await httpRequest<PostOrdersResponse>(Path.orders, 'post', payload);
  return res;
};

export let mocking = {
  fetchGetRestaurants,
  fetchPostOrders,
};
