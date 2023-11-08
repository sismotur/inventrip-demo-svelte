import { INVENTRIP_API_KEY } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { id_country } = params;

  console.log(`id_country: ${id_country}`);
  console.log(`INVENTRIP_API_KEY: ${INVENTRIP_API_KEY}`);

  const url = `https://api.inventrip.com/v100/geo-countries?api_key=${INVENTRIP_API_KEY}&id_country=${id_country.toUpperCase()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network failed");
    }
    const countries = await response.json();
    console.log(`countries: ${JSON.stringify(countries)}`);
    return { countries };
  } catch (error) {
    console.error("Problem with fetch operation", error);
    throw new Error("Server Error");
  }
}
