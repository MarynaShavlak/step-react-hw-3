import React from 'react';
import '../../styles/main.css';
import './App.css';
import { Home } from '../../pages/Home/Home';
import { Projects } from '../../pages/Projects/Projects';
export const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <Projects />
    </div>
  );
};
