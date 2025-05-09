import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  demoLink: string;
  githubLink: string;
  tagColors?: Record<string, { bg: string; text: string }>;
}

export default function ProjectsSection() {
  const tagColors: Record<string, { bg: string; text: string }> = {
    "React": { bg: "bg-blue-100", text: "text-blue-800" },
    "Vite": { bg: "bg-green-100", text: "text-green-800" },
    "CSS3": { bg: "bg-purple-100", text: "text-purple-800" },
    "JavaScript": { bg: "bg-yellow-100", text: "text-yellow-800" },
    "HTML5": { bg: "bg-red-100", text: "text-red-800" },
    "Webpack": { bg: "bg-blue-100", text: "text-blue-800" },
    "MVC Architecture": { bg: "bg-gray-100", text: "text-gray-800" },
    "Kotlin": { bg: "bg-orange-100", text: "text-orange-800" },
    "Android": { bg: "bg-green-100", text: "text-green-800" },
    "Firebase": { bg: "bg-blue-100", text: "text-blue-800" },
    "UI/UX": { bg: "bg-red-100", text: "text-red-800" },
    "TailwindCSS": { bg: "bg-blue-100", text: "text-blue-800" },
    "Framer Motion": { bg: "bg-purple-100", text: "text-purple-800" },
    "TypeScript": { bg: "bg-blue-100", text: "text-blue-800" },
  };

  const projects: Project[] = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive, animated portfolio website built with React, TailwindCSS and Framer Motion. Features smooth scrolling, interactive elements, and a mobile-first responsive design approach.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
      year: "2024",
      demoLink: "https://nicolas-patigny-portfolio.netlify.app/",
      githubLink: "https://github.com/nicolaspatigny/portfolio",
      tagColors,
    },
    {
      title: "Battleship Game",
      description: "A full-stack Battleship game using JavaScript with dynamic DOM manipulation for real-time game board rendering and user interaction.",
      image: "https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["JavaScript", "HTML5", "CSS3", "MVC Architecture"],
      year: "2022",
      demoLink: "https://nicolaspatigny.github.io/battleship/",
      githubLink: "https://github.com/nicolaspatigny/battleship",
      tagColors,
    },
    {
      title: "Restaurant Page",
      description: "A dynamic restaurant website using vanilla JavaScript and Webpack, with single-page application architecture and tab-based navigation.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["JavaScript", "Webpack", "HTML5", "CSS3"],
      year: "2022",
      demoLink: "https://nicolaspatigny.github.io/restaurant-page/",
      githubLink: "https://github.com/nicolaspatigny/restaurant-page",
      tagColors,
    },
    {
      title: "Meet a Friend",
      description: "A real-time chat application in Kotlin for Android, implementing user authentication and message handling systems for anonymous conversations.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Kotlin", "Android", "Firebase", "UI/UX"],
      year: "2023",
      demoLink: "https://github.com/nicolaspatigny",
      githubLink: "https://github.com/nicolaspatigny",
      tagColors,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center max-w-3xl text-gray-600">
            Here are some of the projects I've worked on. Each one has helped me develop different skills and tackle unique challenges.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 transition duration-300 flex items-center justify-center group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                      {project.title === "Meet a Friend" ? "Learn More" : "Live Demo"}
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 ${tagColors[tag]?.bg || "bg-gray-100"} ${tagColors[tag]?.text || "text-gray-800"} rounded-full text-xs font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.year}</span>
                  <a 
                    href={project.demoLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-blue-700 transition"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
