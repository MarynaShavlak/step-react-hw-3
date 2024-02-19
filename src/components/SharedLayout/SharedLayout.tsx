import { Outlet } from 'react-router-dom';
import { Navbar } from './../Navbar';
import { Footer } from './../Footer';

export const SharedLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
