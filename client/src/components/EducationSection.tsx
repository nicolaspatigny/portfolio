import { motion } from "framer-motion";

interface Education {
  period: string;
  title: string;
  institution?: string;
  description: string;
  tags: string[];
  badgeType: "primary" | "accent" | "secondary";
}

export default function EducationSection() {
  const educationItems: Education[] = [
    {
      period: "2021 - 2024",
      title: "Bachelors de Science et Numériques",
      institution: "Université Catholique de Lyon",
      description: "Comprehensive computer science program covering fundamentals of programming, algorithms, data structures, web development, and software engineering principles.",
      tags: ["Software Development", "Data Structures", "Algorithms", "Web Technologies"],
      badgeType: "primary",
    },
    {
      period: "International",
      title: "International Educational Experiences",
      description: "Enriched my academic foundation with educational experiences across England, USA, and Malaysia, gaining diverse perspectives on technology approaches and development methodologies.",
      tags: ["Global Perspective", "Cross-cultural Collaboration", "Diverse Tech Approaches"],
      badgeType: "accent",
    },
    {
      period: "Self-study",
      title: "The Odin Project",
      description: "Completed comprehensive web development curriculum covering full-stack development with JavaScript, including front-end frameworks, back-end technologies, and database integration.",
      tags: ["Full-stack Development", "Project-based Learning", "JavaScript Ecosystem"],
      badgeType: "secondary",
    },
    {
      period: "Ongoing",
      title: "Continuous Professional Development",
      description: "Regularly engage in online courses, tutorials, and coding challenges to stay current with emerging technologies and best practices in software development.",
      tags: ["Modern Frameworks", "Industry Best Practices", "Emerging Technologies"],
      badgeType: "secondary",
    },
  ];

  const badgeClasses = {
    primary: "bg-primary text-white",
    accent: "bg-accent text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center max-w-3xl text-gray-600">
            My formal education and additional learning experiences that have shaped my development journey.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Academic Background</h3>
            
            <div className="space-y-12">
              {educationItems.slice(0, 2).map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-2">
                      <span className={`${badgeClasses[item.badgeType]} px-3 py-1 rounded text-sm font-medium`}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 relative pl-0 md:pl-12 pt-6 md:pt-0">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="hidden md:block absolute left-0 top-2 w-8 h-px bg-gray-200"></div>
                    <div className={`hidden md:flex absolute left-0 top-1.5 items-center justify-center w-6 h-6 rounded-full border-2 border-${item.badgeType === "primary" ? "primary" : item.badgeType === "accent" ? "accent" : "secondary"} bg-white`}></div>
                    
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    {item.institution && <h5 className="text-lg text-primary mb-4">{item.institution}</h5>}
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Additional Learning</h3>
            
            <div className="space-y-12">
              {educationItems.slice(2).map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-2">
                      <span className={`${badgeClasses[item.badgeType]} px-3 py-1 rounded text-sm font-medium`}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 relative pl-0 md:pl-12 pt-6 md:pt-0">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="hidden md:block absolute left-0 top-2 w-8 h-px bg-gray-200"></div>
                    <div className={`hidden md:flex absolute left-0 top-1.5 items-center justify-center w-6 h-6 rounded-full border-2 border-${item.badgeType === "primary" ? "primary" : item.badgeType === "accent" ? "accent" : "secondary"} bg-white`}></div>
                    
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    {item.institution && <h5 className="text-lg text-primary mb-4">{item.institution}</h5>}
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
