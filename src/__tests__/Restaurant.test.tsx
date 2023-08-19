import { render } from '@testing-library/react';

import Restaurant from '../components/Restaurant';

describe('Restaurant', () => {
  it('renders restaurants', async () => {
    render(<Restaurant />);
  });
});
