import { useState, useEffect } from "react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection: string | null;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href") || "";
    scrollToHash(hash, 80);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full backdrop-blur-sm z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold text-primary" 
            onClick={handleNavClick}
          >
            Nicolas<span className="text-dark">.dev</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "transition hover:text-primary",
                  activeSection === item.href.substring(1) ? "text-primary font-semibold" : ""
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex-col space-y-4 py-4 mt-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "block py-2 hover:text-primary transition",
                    activeSection === item.href.substring(1) ? "text-primary font-semibold" : ""
                  )}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
