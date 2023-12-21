import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css'
import EmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#27272a', textAlign: 'center', paddingTop: "50px" }}>
      <p>
        {' '}
        <a href="https://www.linkedin.com/in/michaeltapia01/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize='large'></LinkedInIcon>
            </a>
        {' | '}
        <a href="https://github.com/mtapia01" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize='large'></GitHubIcon>
            </a>
        {' | '}
        <a href="mailto:michaeltapia80@yahoo.com">
            <EmailIcon fontSize='large'></EmailIcon>
            </a>
      </p>
    </footer>
  );
};

export default Footer;