const Footer = () => {
  return (
    <footer className="glass backdrop-blur-lg border-t border-white/10 py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
              Sahil&apos;s Portfolio
            </h3>
            <p className="text-gray-400">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#AboutSection"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#ProjectsSection"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#ContactMeSection"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1ss9UNoQUGG4PHDIiXnO_fCDD3ktppIlM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sahil1330"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 glass backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-mane-003a0924b/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 glass backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Made with{" "}
            <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary font-semibold">
              Sahil
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
