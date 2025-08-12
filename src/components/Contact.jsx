import { useState } from 'react';
import '../styling/Contact.css'
import resume from '../assets/Malik Wensman - Technical Résumé.pdf';
import SocialMediaButtons from './SocialMediaButtons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const myEmail = "malik.code@outlook.com"; 

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = myEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Reach out for collaborations or inquiries.</p>

      <div className="email-section">
          <p className="email-text">{myEmail}</p>
          <button 
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopyEmail}
          >
            <span className="material-icons">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>

      <div className="buttons">
        <SocialMediaButtons />
        <div className="action-buttons">
          <button className="action-button" onClick={ViewResume}>View Resume</button>
        </div>
      </div>
      
    </div>
    
  );
};

const ViewResume = () => {
  window.open(resume, '_blank');
};

export default Contact;