import { useNavigate } from 'react-router-dom';
import './Country.css';

const Country = ({ flag, population, capital, region, name, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(name);
  };

  return (
    <div className='country_container' onClick={handleClick}>
      <img src={flag} alt='country' className='country_flag' />
      <h4 style={{ textAlign: 'center', wordWrap: 'break-word' }}>{name}</h4>
      <div className='country_details'>
        <div>Capital: {capital}</div>
        <div>Region: {region}</div>
        <div>Population: {population}</div>
      </div>
    </div>
  );
};

export default Country;
