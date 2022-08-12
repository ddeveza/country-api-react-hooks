import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCountries } from '../hooks/useFetchCountries';

const Detail = () => {
  const { countries, loading } = useFetchCountries('');
  const { country } = useParams();

  const countryDetails = useMemo(() => {
    return countries.find((c) => c.name === country);
  }, [countries, country]);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10rem',
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,.5))',
      }}
    >
      <img src={countryDetails?.flag} alt='country' />
      <h4 style={{ textAlign: 'center' }}>{countryDetails?.name}</h4>
      <div>
        <div>Capital: {countryDetails?.capital}</div>
        <div>Region: {countryDetails?.region}</div>
        <div>Population: {countryDetails?.population}</div>
      </div>
      <div>
        <a href={countryDetails?.map} target='_blank' rel='noreferrer'>
          Google Map
        </a>
      </div>
    </div>
  );
};

export default Detail;
