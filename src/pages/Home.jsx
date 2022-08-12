import { useState } from 'react';
import { RegionDropdown, SearchBar } from '../component';
import Country from '../component/Country/Country';
import { useFetchCountries } from '../hooks/useFetchCountries';
import useQueryCountries from '../hooks/useQueryCountries';
import { cardlex, homeContainerStyle } from './styles';

const Home = () => {
  const [region, setregion] = useState('');
  const [query, setQuery] = useState('');

  const { countries, loading } = useFetchCountries(region);
  const queryCountries = useQueryCountries(query, countries);

  const handleChange = (e) => {
    setregion(e.target.value);
  };

  return (
    <>
      <div style={homeContainerStyle}>
        <SearchBar onSearch={setQuery} query={query} />
        <RegionDropdown selectRegion={handleChange} />
      </div>
      {!loading ? (
        <div style={cardlex}>
          {queryCountries.length > 0 &&
            queryCountries.map((country) => (
              <Country {...country} key={country.id} />
            ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default Home;
