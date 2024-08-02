import React, { useEffect, useState } from 'react';
import '/src/App.css';
import Header from '/src/Header.jsx';
import InfoBar from '/src/InfoBar.jsx';
import Home from '/src/Home.jsx';
import About from '/src/About.jsx';
import Projects from '/src/Projects.jsx';
import Contact from '/src/Contact.jsx';
import Loading from '/src/Loading';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '/src/Footer';

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
