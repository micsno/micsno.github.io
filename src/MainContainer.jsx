import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '/src/Home.jsx';
import About from '/src/About.jsx';
import Contact from '/src/Contact.jsx';

const ScrollToSection = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const sectionId = pathname.replace('/', '');
      if (sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          window.scrollTo({
            top: sectionElement.offsetTop - document.querySelector('.info-bar').offsetHeight,
            behavior: 'smooth',
          });
        }
      }
    }, [pathname]);
  
    return null;
  };

function MainContainer() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainContainer;