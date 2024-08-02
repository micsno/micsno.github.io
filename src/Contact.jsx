import React, { useState } from 'react';
import '/src/Contact.css';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage('Please fill in all fields.');
      return;
    }

    fetch('https://formspree.io/f/mdknavlg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Form submitted successfully:', formData);
          setSubmissionMessage('Thank you for your message! I will get back to you soon.');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
          console.error('Form submission failed:', response);
          setSubmissionMessage('There was an error submitting the form. Please try again.');
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        setSubmissionMessage('There was an error submitting the form. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me through the form below or via my social media channels.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form><br />
          {submissionMessage && (
            <p className="submission-message" aria-live="polite">{submissionMessage}</p>
          )}
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><span class="material-symbols-outlined"> mail </span> tomi.kouvala@pm.me</p>
          <p><span className='material-symbols-outlined'> globe </span> Oulu, Finland</p>

          <div className="social-links">
            <SocialIcon url="https://www.github.com/micsno" network='github' target='_blank' />
            <SocialIcon url="https://www.linkedin.com/in/tomikouvala" network='linkedin' target='_blank' />
            <SocialIcon url="mailto:tomi.kouvala@pm.me" network="email" target='_blank' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
