import { useMemo, useState } from 'react';
import { RegionDropdown, SearchBar } from '../component';
import Country from '../component/Country/Country';
import { useFetchCountries } from '../hooks/useFetchCountries';

const Home = () => {
  const [region, setregion] = useState('');
  const [query, setQuery] = useState('');

  const { countries, loading } = useFetchCountries(region);

  const queryCountries = useMemo(() => {
    return countries.filter((country) => {
      if (query) {
        let name = country.name;
        return name.toLowerCase().includes(query.toLowerCase());
      }
      return country;
    });
  }, [query, countries]);

  const handleChange = (e) => {
    setregion(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <SearchBar onSearch={setQuery} query={query} />
        <RegionDropdown selectRegion={handleChange} />
      </div>
      {!loading ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
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
