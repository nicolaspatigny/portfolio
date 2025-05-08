import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center max-w-3xl text-gray-600">
            I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
            My journey into software development began at Université Catholique de Lyon and has been enhanced by 
            personal projects and continuous learning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-user-graduate text-primary mr-3"></i>Background
              </h3>
              <p className="text-gray-600">
                With a degree in Computer Science from Université Catholique de Lyon, I've built a solid 
                foundation in software development principles. My academic journey has been complemented by 
                international educational experiences across England, USA, and Malaysia, giving me a global 
                perspective on technology and development practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-code text-primary mr-3"></i>Development Approach
              </h3>
              <p className="text-gray-600">
                I approach development with a focus on creating clean, maintainable code and intuitive user 
                experiences. I enjoy working with modern JavaScript frameworks like React, but also value 
                understanding the fundamentals behind them. I'm passionate about building applications that 
                are both functional and aesthetically pleasing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-globe text-primary mr-3"></i>Languages
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">English</span>
                <span className="text-sm text-primary">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">French</span>
                <span className="text-sm text-primary">Native</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
              alt="Modern coding environment with multiple screens" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
