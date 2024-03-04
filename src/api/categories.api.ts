import CategoryType from '../types/CategoryType';

async function readCategories(): Promise<CategoryType[]> {
  const url = 'http://localhost:3000/categories';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories data. Status: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    return [];
  }
}

export default readCategories;
