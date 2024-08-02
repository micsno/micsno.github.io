import React, { useEffect, useState } from 'react';
import './App.css'; 
import Header from './Header';
import InfoBar from './InfoBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Loading from './Loading';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="app">
        {loading && <Loading onLoaded={handleLoadingComplete} />}
        <div className={`main-content ${loading ? 'fade-out' : ''}`}>
          <Header />
          <div className="main-layout">
            <InfoBar />
            <div className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
