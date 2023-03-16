import { render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('renders without crash', () => {
    render(<TextField label="검색" placeholder="식당 이름" filterText="" setFilterText={() => jest.fn()} />);

    expect(screen.getByText(/검색/)).toBeInTheDocument();
  });
});
