import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/api';

export const useFetchCountries = (region) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchCountries(region);
        setCountries(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [region]);
  //console.log(countries);

  return { countries, loading };
};
