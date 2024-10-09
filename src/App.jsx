import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtGallery from './components/ArtGallery';
import ArtDetail from './components/ArtDetail';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtGallery />} />
        <Route path="/art/:id" element={<ArtDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
