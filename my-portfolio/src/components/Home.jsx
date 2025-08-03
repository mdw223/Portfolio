import '../styling/Home.css'
import resume from '../assets/Malik Wensman - Technical Resume.pdf';
import SocialMediaButtons from './SocialMediaButtons';
import { Link } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
    <div className="home">
      <div className="initial-display">
        <p className="no-space">Hello, I'm</p>
        <h1 className="no-space">Malik Wensman</h1>
        <SocialMediaButtons />
        <div className="action-buttons">
          <button className="action-button" onClick={ViewResume}>View Resume</button>
          <Link to="/contact">
            <button className="action-button">Contact Me</button>
          </Link>
        </div>
      </div>
      
      <About />
    </div>
  );
};

const ViewResume = () => {
  window.open(resume, '_blank');
};

export default Home;