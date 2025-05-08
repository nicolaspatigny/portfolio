import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

export default function Footer() {
  const scrollToHash = useScrollToHash();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href") || "";
    scrollToHash(hash, 80);
  };
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#hero" 
              onClick={handleClick}
              className="text-2xl font-bold"
            >
              Nicolas<span className="text-primary">.dev</span>
            </a>
            <p className="text-gray-400 mt-2">Junior Developer specializing in web technologies</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#hero" onClick={handleClick} className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#about" onClick={handleClick} className="text-gray-400 hover:text-white transition">About</a>
            <a href="#projects" onClick={handleClick} className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#contact" onClick={handleClick} className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nicolas Patigny. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/nicolaspatigny" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/nicolas-patigny" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://twitter.com/nicolas_patigny" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
