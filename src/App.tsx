import React from 'react';
import UrlShortener from './components/UrlShortener';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Redirect from './components/Redirect';
import UrlList from './components/UrlList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
       <div className="container mt-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/:shortUrl" element={<Redirect />} />
          <Route path="/lista" element={<UrlList />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
