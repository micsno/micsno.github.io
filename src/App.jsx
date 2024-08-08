// App.jsx
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [loading, setLoading] = useState(true);
  const [infoBarVisible, setInfoBarVisible] = useState(false);
  const [isNavbar, setIsNavbar] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleInfoBar = () => {
    setInfoBarVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div className="app">
        {loading && <Loading onLoaded={handleLoadingComplete} />}
        <div className={`main-content ${loading ? 'fade-out' : ''}`}>
          <Header />
          <div className="main-layout">
            <button
              className={`info-bar-toggle ${isNavbar ? 'navbar-button' : 'sidebar-button'}`}
              onClick={toggleInfoBar}
            >
              <FontAwesomeIcon icon={faAddressCard} style={{ fontSize: '1.5rem', color: 'orange' }} />
            </button>
            {infoBarVisible && <InfoBar />}
            <div className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
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
