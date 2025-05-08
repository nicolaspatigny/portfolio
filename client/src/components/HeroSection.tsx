import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-12 md:py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Nicolas Patigny
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-primary mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Junior Developer
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bilingual Software Developer with a Computer Science degree from France, enriched by international educational experiences across England, USA, and Malaysia. Proficient in JavaScript, Python, and Kotlin, with additional expertise gained through The Odin Project curriculum.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition shadow-md"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
              >
                View My Work
              </a>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="mailto:nick.patigny@gmail.com" 
                className="text-gray-600 hover:text-primary transition" 
                aria-label="Email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a 
                href="https://github.com/nicolaspatigny" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/nicolas-patigny" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=700" 
              alt="Developer workspace showcasing coding environment" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
