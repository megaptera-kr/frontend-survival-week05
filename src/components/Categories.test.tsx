/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import Categories from './Categories';

test('Categories', () => {
  // Given
  const categories = ['중식', '일식', '한식'];
  const setFilterCategory = jest.fn();

  // When
  render(
    <Categories categories={categories} setFilterCategory={setFilterCategory} />
  );

  // Then
  expect(screen.getByText('중식')).toBeTruthy();
  expect(screen.getByText('일식')).toBeTruthy();
  expect(screen.getByText('한식')).toBeTruthy();
});
