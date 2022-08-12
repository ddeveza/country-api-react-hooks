import { useMemo } from 'react';

const keys = ['name', 'capital'];

export default function useQueryCountries(query, countries) {
  const queryCountries = useMemo(() => {
    return countries.filter((country) => {
      if (query) {
        return keys.some((key) => {
          if (key === 'capital') {
            if (country[key]) {
              return country[key][0]
                ?.toLowerCase()
                ?.includes(query.toLowerCase());
            }
            return false;
          } else {
            return country[key].toLowerCase().includes(query.toLowerCase());
          }
        });
      }
      return country;
    });
  }, [query, countries]);

  return queryCountries;
}
