export const Base_Url_Api = 'https://restcountries.com/v3.1';

export const fetchCountries = async (region) => {
  let response;

  if (!region) {
    response = await fetch(`${Base_Url_Api}/all`);
  } else {
    response = await fetch(`${Base_Url_Api}/region/${region}`);
  }

  let data = await response.json();

  if (Array.isArray(data)) {
    data = data?.map((country, index) => ({
      id: index,
      flag: country.flags.png,
      population: country.population,
      capital: country.capital,
      region: country.region,
      name: country.name.common,
    }));

    return data;
  }
  return [];
};
