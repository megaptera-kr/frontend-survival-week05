import { render } from '@testing-library/react';
import Cart from './Cart';
import foods from '../../../fixtures/foods';
import { MenuInterface } from '../../interfaces/RestaurantList.interface';

const context = describe;

const cartMenu : MenuInterface[] = [...foods];
// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleRegistOrder = () => {

};

describe('Cart', () => {
  context('with cartMenu', () => {
    it('renders Cart component', () => {
      render(<Cart cartMenu={cartMenu} onRegistOrder={handleRegistOrder} />);
    });
  });
});
