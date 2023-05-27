import fixture from '../../fixture';
import calcTotalPrice from './calcTotalPrice';

describe('calcTotalPrice', () => {
  it('return a total price', () => {
    const cartFood = fixture.foods;
    const totalPrice = calcTotalPrice({ cartFood });
    expect(totalPrice).toEqual(13000);
  });
});
