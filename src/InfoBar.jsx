import React from 'react';
import './InfoBar.css';
import profilephoto from '/src/assets/profileimage.jpg';
import { SocialIcon } from 'react-social-icons';

function InfoBar({ className }) {
  return (
    <div className={`info-bar ${className}`}>
      <div className="info-header">
        <h1>Tomi Kouvala</h1>
      </div>
      <div className="info-content">
        <div className="profile-photo">
          <img src={profilephoto} alt="Profile" />
        </div>
        <div className="info-text">
          <p>
            Junior Front-End Developer specializing in creating responsive and visually appealing web applications.
          </p>
          <h3>Contact</h3>
          <p><span className="material-symbols-outlined">mail</span> tomi.kouvala@pm.me</p>
          <p><span className="material-symbols-outlined">globe</span> Oulu, Finland</p>
          <h3>Skills</h3>
          <ul>
            <li><strong>Technologies:</strong> HTML, CSS, JavaScript, Python</li>
            <li><strong>Framework:</strong> React, Vite.js, Node.Js</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
          </ul>
          <h3>Education</h3>
          <p>Digital Expert - JAMK</p>
          <h3>Languages</h3>
          <ul>
            <li>Finnish (Native)</li>
            <li>English (Proficient)</li>
          </ul>
          <h3>Hobbies</h3>
          <p>Coding, Gaming, Hiking, Camping, Scouting, Photography, and MTB</p>
          <div className="social-links">
            <SocialIcon url="https://www.github.com/micsno" network="github" target='_blank' />
            <SocialIcon url="https://www.linkedin.com/in/tomikouvala" network="linkedin" target='_blank' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
