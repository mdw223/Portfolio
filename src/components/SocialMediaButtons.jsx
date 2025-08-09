import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styling/SocialMediaButtons.css'; 

const SocialMediaButtons = () => {
  return (
    <div className="social-media-buttons">
      <a href="https://github.com/mdw223" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/malik-wensman/" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </a>
      <a href="https://www.youtube.com/@MalikDiallo223/videos" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FontAwesomeIcon icon={faYoutube} />
        </button>
      </a>
      <a href="mailto:malik.code@outlook.com">
        <button className="social-button">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </a>
    </div>
  );
};

export default SocialMediaButtons;
