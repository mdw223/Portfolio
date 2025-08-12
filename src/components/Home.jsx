import '../styling/Home.css'
import resume from '../assets/Malik Wensman - Technical Résumé.pdf';
import SocialMediaButtons from './SocialMediaButtons';
import myPicture from '../assets/my-picture.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="my-picture">
        <img src={myPicture} alt="My Picture" />
      </div>
      <div className="text-container">
        <p className="no-space">Hello, I'm</p>
        <h1 className="no-space">Malik Wensman</h1>
        <SocialMediaButtons />
        <div className="action-buttons">
          <button className="action-button" onClick={ViewResume}>View Resume</button>
          <button className="action-button" onClick={() => scrollToContact()}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

const ViewResume = () => {
  window.open(resume, '_blank');
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Home;