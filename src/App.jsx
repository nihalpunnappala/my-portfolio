import { useState } from 'react';
import './App.css';
import Homepage from './pages/home';
import Aboutpage from './pages/about';
import Projectpage from './pages/project';
import Contactpage from './pages/contect';
import Experience from './pages/experience';
import Skills from './pages/skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
       
      </Layout>
    </BrowserRouter>
  );
}

export default App;
