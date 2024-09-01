// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlantList from './pages/PlantList'; // Import the PlantList component
import PlantDetail from './pages/PlantDetail';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plants" element={<PlantList />} /> {/* Route for the PlantList */}
            <Route path="/plants/:id" element={<PlantDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
