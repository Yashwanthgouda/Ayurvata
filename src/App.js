import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import PlantDetail from './pages/PlantDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
