import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCountries } from '../hooks/useFetchCountries';

const Detail = () => {
  const countries = useFetchCountries();
  const { country } = useParams();

  const countryDetails = useMemo(() => {
    return countries.find((c) => c.name === country);
  }, [countries, country]);

  if (countries <= 0 || !countryDetails) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <img src={countryDetails.flag} alt='country' />

      <h4 style={{ textAlign: 'center' }}>{countryDetails.name}</h4>

      <div>
        <div>Capital: {countryDetails.capital}</div>
        <div>Region: {countryDetails.region}</div>
        <div>Population: {countryDetails.population}</div>
      </div>
    </div>
  );
};

export default Detail;
