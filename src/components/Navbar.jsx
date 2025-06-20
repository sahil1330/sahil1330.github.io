import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-lg shadow-glass" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {" "}
        <div className="text-transparent bg-clip-text bg-gradient-primary text-2xl font-bold tracking-wide animate-glow">
          Sahil&apos;s Portfolio
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#AboutSection"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
          >
            About
          </a>
          <a
            href="#ProjectsSection"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
          >
            Projects
          </a>
          <a
            href="#ContactMeSection"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1ss9UNoQUGG4PHDIiXnO_fCDD3ktppIlM/view?usp=sharing"
            target="_blank"
            className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:shadow-glow transition-all duration-300 font-medium"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass backdrop-blur-lg lg:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a
                href="/"
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#AboutSection"
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#ProjectsSection"
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
              >
                Projects
              </a>
              <a
                href="#ContactMeSection"
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary transition-all duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1BrW_nPTeH0S3CC04BHk03D3SZbqyddyD/view?usp=sharing"
                target="_blank"
                className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:shadow-glow transition-all duration-300 font-medium text-center"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
