import { render, screen } from '@testing-library/react';
import TextField from './TextField';

const filterText = '';
const setFilterText = jest.fn();

describe('TextField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render a components', () => {
    render(<TextField filterText={filterText} setFilterText={setFilterText} />);
    screen.getByPlaceholderText(/식당 이름/);
  });

  it('input a text', () => {
    render(<TextField filterText="메가" setFilterText={setFilterText} />);
    screen.getByDisplayValue('메가');
  });
});
