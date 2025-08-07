
import qs from 'qs';

export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function fetchFromStrapi(path, params = {}) {
  const queryString = qs.stringify(params, { encodeValuesOnly: true });
  const requestUrl = `${STRAPI_API_URL}/api${path}?${queryString}`;

  try {
    const response = await fetch(requestUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch from Strapi: ${error.message}`);
    return [];
  }
}
