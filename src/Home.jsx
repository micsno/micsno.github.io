import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Web Developer",
    "Front-End Dev",
    "Creative Coder",
    "Digital Innovator",
    "Content Creator",
    "Problem Solver",
    "Tech Enthusiast"
  ];
  const typingSpeed = 300; // Typing speed in milliseconds
  const deletingSpeed = 200; // Deleting speed in milliseconds
  const pauseBeforeDeleting = 5000; // Pause before deleting in milliseconds

  useEffect(() => {
    const currentWord = words[index % words.length];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => { }, pauseBeforeDeleting); // Pause before deleting
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <div className="home">
      <div className='welcome-text'>
        <h1>Welcome to my portfolio!</h1>
        <h2>I’m passionate about crafting engaging and innovative web experiences. Explore my work and join me on the journey to build exceptional digital solutions for a brighter future.</h2>
      </div>
      <section className="whoami-preview">
        <div className="text-animation">
          <h1>{displayedText}<span className="cursor">|</span></h1>
        </div>
        <p className='whoami-text'>
          I am an enthusiastic Junior Front-End Developer with a keen interest in building engaging and responsive web applications. I have a solid grasp of HTML, CSS, and JavaScript fundamentals and am gaining experience with React. My goal is to continuously improve my skills and create user-friendly web experiences.
        </p>
        <div>
          <h4>You can view my projects on <Link to="/projects" className='project-route'>Project page</Link> or on GitHub</h4>
          <a href="https://github.com/micsno" target='_blank' rel="noopener noreferrer" className="btn">View On GitHub</a>
        </div>
      </section>
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          My mission is to harmonize visual appeal with practical usability to deliver interfaces that resonate with users. Whether developing sophisticated web applications or designing streamlined landing pages, I infuse each project with creativity and a focus on user experience. I’m excited about collaborating on projects that push the boundaries of design and functionality.
        </p>
        <Link to="/about" className="btn">Learn More</Link>
      </section>
    </div>
  );
};

export default Home;
