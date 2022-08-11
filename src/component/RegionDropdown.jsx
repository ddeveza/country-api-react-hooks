const RegionDropdown = ({ selectRegion }) => {
  const region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <select name='region' id='region' onChange={selectRegion}>
      <option value=''>Select Region</option>
      {region.map((each) => (
        <option key={each} value={each.toLowerCase()}>
          {each}
        </option>
      ))}
    </select>
  );
};

export default RegionDropdown;
