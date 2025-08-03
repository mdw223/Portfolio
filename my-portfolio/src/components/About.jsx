import ContactForm from './ContactForm';
import '../styling/About.css';
const About = () => {
    return (
        <div>
            <p className="no-space">Get To Know More</p>
            <h1 className="no-space">About Me</h1>
            <p className="about-text">
                Hi! I'm Malik, a Senior Computer Science student at <strong>North Carolina State University</strong> in Raleigh, NC.<br /> 
                My passion to create impactful solutions has led me to be a <strong>Full-Stack Software Intern</strong> at a startup<br /> 
                where I build <a href="https://axiomworkspace.com/" target="_blank" rel="noopener noreferrer">Axiom Workspace</a>, 
                an easy-to-use affordable CRM for small businesses.
            </p>
            <h2>Languages I Know</h2>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
            </ul>

            <h2>Contact Me</h2>
            <ContactForm />
        </div>
    );
};

export default About;