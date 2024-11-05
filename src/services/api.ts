export async function fetchSearchResults(query: string) {
  try {
    const response = await fetch('http://localhost:7071/api/get_advance_search_api');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
}