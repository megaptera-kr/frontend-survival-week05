import MenuType from '../types/MenuType';

function moneyformat(price: number): string {
  return new Intl.NumberFormat().format(price);
}

function getPriceList(menus: MenuType[]): number[] {
  const priceList: number[] = menus.map((item: MenuType) => item.price);
  return priceList;
}

function calculateTotalMenuPrice(menus: MenuType[]): number {
  const priceList = getPriceList(menus);
  return priceList.reduce((acc, cur) => acc + cur, 0);
}

export { moneyformat, calculateTotalMenuPrice };
