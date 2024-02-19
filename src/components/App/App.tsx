import React from 'react';
import '../../styles/main.css';
import './App.css';
// import { Home } from '../../pages/Home';
// import { Projects } from '../../pages/Projects';
import { Contacts } from '../../pages/Contacts';
export const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Projects /> */}
      <Contacts />
    </div>
  );
};
