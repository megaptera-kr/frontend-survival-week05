import { waitFor } from '@testing-library/react';
import fixtures from '../fixtures';

import selectCategories from './selectCategories';

test('selectCategories', () => {
	const { restaurants } = fixtures;
	
	waitFor(() => {
		expect(selectCategories(restaurants).length).toEqual(1);
	});
});
