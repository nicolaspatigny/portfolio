import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

export default function SkillsSection() {
  const [showProgress, setShowProgress] = useState(false);

  const frontendSkills: Skill[] = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
  ];

  const backendSkills: Skill[] = [
    { name: "Python", percentage: 75, color: "bg-accent" },
    { name: "Kotlin", percentage: 70, color: "bg-accent" },
    { name: "Node.js", percentage: 65, color: "bg-accent" },
    { name: "MySQL", percentage: 70, color: "bg-accent" },
  ];

  const methodologies: Skill[] = [
    { name: "Agile Methodology", percentage: 75, color: "bg-secondary" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowProgress(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center max-w-3xl text-gray-600">
            I've developed proficiency in various technologies through academic studies, personal projects, and continuous learning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
            
            {frontendSkills.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.percentage}%</span>
                </div>
                <Progress 
                  value={showProgress ? skill.percentage : 0} 
                  indicatorColor={skill.color}
                  className="h-2 transition-all duration-1000 ease-out" 
                />
              </div>
            ))}
            
            <h3 className="text-2xl font-semibold mb-6 mt-10">Methodologies</h3>
            
            {methodologies.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.percentage}%</span>
                </div>
                <Progress 
                  value={showProgress ? skill.percentage : 0} 
                  indicatorColor={skill.color}
                  className="h-2 transition-all duration-1000 ease-out" 
                />
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
            
            {backendSkills.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.percentage}%</span>
                </div>
                <Progress 
                  value={showProgress ? skill.percentage : 0} 
                  indicatorColor={skill.color}
                  className="h-2 transition-all duration-1000 ease-out" 
                />
              </div>
            ))}
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">TailwindCSS</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">GraphQL</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
