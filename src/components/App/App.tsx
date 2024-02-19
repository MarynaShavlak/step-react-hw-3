import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../styles/main.css';
import './App.css';
import { Home } from '../../pages/Home';
import { Projects } from '../../pages/Projects';
import { Contacts } from '../../pages/Contacts';
import { Project } from '../../pages/Project';
import { SharedLayout } from '../SharedLayout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  );
};
