import '../styling/About.css';
import angularLogo from '../assets/angular.svg';
import sqlLogo from '../assets/sql.svg';    
import pythonLogo from '../assets/python.svg';
import reactLogo from '../assets/react.svg';
import csharpLogo from '../assets/csharp.svg';
import netLogo from '../assets/dotnet.svg';
import Langauge from './Language';

const languages = [
    { name: 'Angular', logo: angularLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'React', logo: reactLogo },
    { name: 'C#', logo: csharpLogo },
    { name: '.NET', logo: netLogo },
];

const About = () => {
    return (
        <div className="about">
            <p className="no-space">Get To Know More</p>
            <h1 className="no-space">About Me</h1>
            <p className="description-spacing">
                Hi! I'm Malik, a Senior Computer Science student at <strong>North Carolina State University</strong> in Raleigh, NC.<br /> 
                My passion to create impactful solutions has led me to be a <strong>Full-Stack Software Intern</strong> at a startup<br /> 
                where I build <a href="https://axiomworkspace.com/" target="_blank" rel="noopener noreferrer">Axiom Workspace</a>, 
                an easy-to-use affordable CRM for small businesses.
            </p>

            <h2>Languages I Know</h2>
            <div className="language-container">
                {languages.map((lang) => (
                    <div key={lang.name}>
                        <Langauge name={lang.name} logo={lang.logo} />
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default About;