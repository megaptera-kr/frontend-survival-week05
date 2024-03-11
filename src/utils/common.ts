import MenuType from '../types/MenuType';

function moneyformat(price: number): string {
  return new Intl.NumberFormat().format(price);
}

function sum(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

function getPriceList(menus: MenuType[]): number[] {
  const priceList: number[] = menus.map((item: MenuType) => item.price);
  return priceList;
}

function calculateTotalMenuPrice(menus: MenuType[]): number {
  const priceList = getPriceList(menus);
  return sum(priceList);
}

export { moneyformat, sum, getPriceList, calculateTotalMenuPrice };
