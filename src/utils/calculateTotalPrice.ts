import { Menu } from '../types';

const calculateTotalPrice = (values : Menu[]) => values.reduce((acc, cur) => acc + cur.price, 0);

export default calculateTotalPrice;
