// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Education from './pages/Education';
import ItemPage from './pages/ItemPage';
import './index.css'   // ← Tailwind here

const App = () => (
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/education" element={<Education />} />
      <Route path="/item/:itemId" element={<ItemPage />} />
    </Routes>
);

export default App;