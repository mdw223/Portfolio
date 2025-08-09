import '../styling/Projects.css'
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
import projects from '../assets/projects.json';

const Project = ({title, image, githubLink, videoLink, description}) => {
    return (
      <div className='project-container'>
        <div className="project-card">
            <div className="card-media">
              <img 
                src={image}
                alt={`${title} project screenshot`}
                className="card-image"
              />
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
            
            <div className="card-actions">
              {githubLink && (
                <a 
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button github-button"
                >
                    GitHub
                </a>
              )}
              {videoLink && (
                <a 
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button demo-button"
                >
                    Demo
                </a>
              )}
            </div>
        </div>
      </div>
        );
    
};

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    title={project.title}
                    image={project.image}
                    githubLink={project.githubLink}
                    videoLink={project.videoLink}
                    description={project.description}
                />
            ))}
        </div>
    </div>
  );
};

export default Projects;