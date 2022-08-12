import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>Where are you in world?</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
