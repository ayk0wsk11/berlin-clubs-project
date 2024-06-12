import React from 'react';
import pic from '../assets/image/dev1.png'

const About = () => {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    height: '100vh',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    filter: 'brightness(0.7)'
  };

  const overlayStyle = {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    display: 'inline-block'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    margin: '10px 0'
  };

  const logoStyle = {
    marginLeft: '10px'
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}>
        <h1>About Us</h1>
        <h2>
          Welcome to our website! We are a dynamic duo of aspiring developers who are passionate about creating funny, innovative, and user-friendly web solutions.
        </h2>
        <h2>Join us on LinkedIn!</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" style={linkStyle}>
              Ayoub Fariji
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={logoStyle} width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" style={linkStyle}>
              Ayko
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={logoStyle} width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" style={linkStyle}>
              Jonathan Senf
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={logoStyle} width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

