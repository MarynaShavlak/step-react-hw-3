import { Outlet } from 'react-router-dom';
import { Navbar } from './../Navbar';

export const SharedLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};
