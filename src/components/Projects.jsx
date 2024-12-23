/* projects.jsx */
import React from 'react';
import './Projects.module.css'; // import styles

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
            Project 1
          </a>
        </li>
        <li>
          <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
            Project 2
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
