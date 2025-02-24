import React from "react";

function Projects() {
  const projects = [
    {
      title: "Battleship",
      description:
        "Full-stack Battleship game using JavaScript with dynamic DOM manipulation",
      tech: ["JavaScript", "DOM", "MVC"],
      github: "https://github.com/nicolaspatigny/Battleship",
      demo: "https://nicolaspatigny.github.io/Battleship/",
    },
    {
      title: "Restaurant Page",
      description:
        "Dynamic restaurant website using vanilla JavaScript and Webpack",
      tech: ["JavaScript", "Webpack", "CSS Grid", "Flexbox"],
      github: "https://github.com/nicolaspatigny/RestaurantPage",
      demo: "https://nicolaspatigny.github.io/RestaurantPage/",
    },
    {
      title: "Meet a Friend",
      description: "Real-time chat application in Kotlin for Android",
      tech: ["Kotlin", "Android", "UI/UX"],
      github: "https://github.com/nicolaspatigny/NewBSN",
      demo: null,
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
