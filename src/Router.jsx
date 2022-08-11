import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './component';
import Detail from './pages/Detail';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='/:country' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
