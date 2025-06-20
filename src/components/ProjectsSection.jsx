import { useState, useRef } from "react";

const ProjectsSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  const projects = [
    {
      id: 1,
      title: "AI Companion",
      description:
        "A full-stack AI companion app that allows users to interact with an AI character like AI Girlfriend, Boyfriend, Teacher, etc. It features a chat interface and supports voice interactions. Soon, I'm gonna adding the feature of creating your own custom AI characters where you can define the feelings, personality, and more.",
      image: "imgs/ai-human.png",
      tech: ["NextJs", "Drizzle", "TailwindCSS", "Gemini API", "PostgreSQL"],
      gradient: "from-blue-500 to-purple-600",
      demo: "https://ai-human-beta.vercel.app/",
      code: "https://github.com/sahil1330/ai-human",
    },
    {
      id: 2,
      title: "Kookumeet",
      description:
        "A real-time audio and video conferencing app where you can talk with a stranger by creating or joining a room, featuring low-latency communication and a sleek user interface.",
      image: "imgs/kookumeet.png",
      tech: ["NextJs", "WebRTC", "TailwindCSS", "Socket.IO"],
      gradient: "from-green-500 to-blue-500",
      demo: "http://kookumeet-sndoun5ixa-el.a.run.app/",
      code: "https://github.com/sahil1330/kookumeet",
    },
    {
      id: 3,
      title: "VideoTube",
      description:
        "A video streaming platform built with React and Node.js, featuring user authentication, video uploads, and a responsive design. This app is currently facing some issues as my cloudinary account is suspended, and some cookies problem in production.",
      image: "imgs/videotube.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-red-500 to-pink-500",
      demo: "https://videotube-web.vercel.app/",
      code: [
        "https://github.com/sahil1330/VideoTube-Backend",
        "https://github.com/sahil1330/videotube-frontend",
      ],
    },
    {
      id: 4,
      title: "e-Sight",
      description:
        "A smart blind stick which contains features like obstacle detection, GPS integration and emergency SOS alerts, designed to assist visually impaired individuals in navigating their environment safely. It connects with the mobile app through BLE to send real time location and alerts to the blind person's caretaker",
      image: "imgs/e-Sight.png",
      tech: ["React Native", "Express", "ESP32 board", "Expo", "MongoDB"],
      gradient: "from-yellow-500 to-orange-500",
      demo: "https://e-sight.tech",
      code: [
        "https://github.com/sahil1330/e-sight",
        "https://github.com/sahil1330/e-sight-backend",
      ],
    },
    {
      id: 5,
      title: "Real Time Order Delivery System",
      description:
        "I did this project as an assignment for a job interview and I even got shortlisted but they weren't able to afford me😅. It contains some fake images with fake products. The main goal of this system is to show the real time status updates about the product between the customer, delivery and admin dashboards. And this was the assignment for a 2 years experience person but I was able to do it as a fresher 😎.",
      image: "imgs/real-time-order.png",
      tech: ["NextJs", "Socket.IO", "MongoDB", "TailwindCSS"],
      gradient: "from-indigo-500 to-purple-500",
      demo: "http://34.47.139.123/",
      code: "https://github.com/sahil1330/real-time-order-delivery-system",
    },
    {
      id: 6,
      title: "Vigyan Mela Website",
      description:
        "Official website for college fest Vigyan Mela 2023 with user authentication, ticket booking, and account management features.",
      image: "imgs/vigyanmela.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      gradient: "from-teal-500 to-green-500",
      demo: "https://vigyanmela.chetanacollege.in/",
      code: "https://github.com/sahil1330/Vigyan-Mela-Website",
    },
  ];

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section id="ProjectsSection" className="py-20 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover my latest work and creative solutions that showcase my
            passion for development
          </p>
        </div>{" "}
        {/* Projects Marquee */}
        <div className="relative">
          {/* Marquee Container */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={marqueeRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              className={`flex ${
                isPaused ? "" : "animate-marquee hover:animate-marquee-pause"
              }`}
              style={{
                width: `${projects.length * 2 * 352}px`, // 352px = 320px card + 32px margin
              }}
            >
              {/* First set of projects */}
              {projects.map((project) => (
                <div
                  key={`first-${project.id}`}
                  className="flex-shrink-0 w-80 mx-4"
                >
                  <div className="group relative glass backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-3 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-400 rounded-full backdrop-blur-sm border border-white/20">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-2">
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <button className="flex-1 bg-gradient-primary text-white py-2 px-3 rounded-lg font-medium text-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                            Demo
                          </button>
                        </a>
                        {Array.isArray(project.code) ? (
                          project.code.map((codeLink, index) => (
                            <a
                              key={index}
                              href={codeLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 glass backdrop-blur-lg text-white py-2 px-3 rounded-lg font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                              Code {index + 1}
                            </a>
                          ))
                        ) : (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="flex-1 glass backdrop-blur-lg text-white py-2 px-3 rounded-lg font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
                              Code
                            </button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    ></div>
                  </div>
                </div>
              ))}
              {/* Second set of projects for seamless loop */}
              {projects.map((project) => (
                <div
                  key={`second-${project.id}`}
                  className="flex-shrink-0 w-80 mx-4"
                >
                  <div className="group relative glass backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-3 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-400 rounded-full backdrop-blur-sm border border-white/20">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-2">
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <button className="flex-1 bg-gradient-primary text-white py-2 px-3 rounded-lg font-medium text-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                            Demo
                          </button>
                        </a>
                        {Array.isArray(project.code) ? (
                          project.code.map((codeLink, index) => (
                            <a
                              key={index}
                              href={codeLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 glass backdrop-blur-lg text-white py-2 px-3 rounded-lg font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                              Code {index + 1}
                            </a>
                          ))
                        ) : (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="flex-1 glass backdrop-blur-lg text-white py-2 px-3 rounded-lg font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
                              Code
                            </button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Status Indicator */}
          <div className="flex justify-center mt-6">
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Continuous scroll • Hover to pause
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/sahil1330"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
