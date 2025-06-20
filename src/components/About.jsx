import phpSvg from "../svgs/php.svg";
import htmlSvg from "../svgs/html.svg";
import jsSvg from "../svgs/javascript.svg";
import mysqlSvg from "../svgs/mysql.svg";
import mongodbSvg from "../svgs/mongodb.svg";
import expressSvg from "../svgs/express.svg";
import reactSvg from "../svgs/react.svg";
import nodeSvg from "../svgs/node.svg";
import nextSvg from "../svgs/next.svg";
import gitSvg from "../svgs/git.svg";
import pythonSvg from "../svgs/python.svg";

const About = () => {
  const skills = [
    { name: "PHP", icon: phpSvg, color: "from-purple-500 to-indigo-600" },
    { name: "HTML & CSS", icon: htmlSvg, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", icon: jsSvg, color: "from-yellow-400 to-orange-500" },
    { name: "MySQL", icon: mysqlSvg, color: "from-blue-500 to-cyan-500" },
    {
      name: "MongoDB",
      icon: mongodbSvg,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Express.js",
      icon: expressSvg,
      color: "from-gray-600 to-gray-800",
    },
    { name: "React", icon: reactSvg, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: nodeSvg, color: "from-green-400 to-emerald-600" },
    { name: "Next.js", icon: nextSvg, color: "from-gray-800 to-black" },
    { name: "Git", icon: gitSvg, color: "from-orange-500 to-red-600" },
    { name: "Python", icon: pythonSvg, color: "from-blue-400 to-yellow-400" },
  ];

  return (
    <section id="AboutSection" className="py-20 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mb-8"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary font-semibold">
                  Full Stack Developer
                </span>{" "}
                with expertise in modern web technologies. I specialize in
                creating scalable, user-friendly applications that solve
                real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Proficient in the entire development lifecycle, from
                conceptualization to deployment. I thrive on learning new
                technologies and implementing innovative solutions that drive
                business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#ContactMeSection"
                  className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 text-center"
                >
                  Let&apos;s Work Together
                </a>
                <a
                  href="https://drive.google.com/file/d/1ss9UNoQUGG4PHDIiXnO_fCDD3ktppIlM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="glass backdrop-blur-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-gray-300">
                      2+ Years of Development Experience (Not work experience)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Full Stack Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Cross Platform Mobile App Development with React Native
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-gray-300">
                      Problem Solving Enthusiast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life. (This skills
              are not updarted, to learn more about my skills, please check my
              resume)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass backdrop-blur-lg rounded-xl p-6 hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.name === "HTML & CSS" ||
                    skill.name === "PHP" ||
                    skill.name === "JavaScript" ||
                    skill.name === "MongoDB" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ filter: "" }}
                        className={`w-full h-full object-contain filter invert-0 group-hover:invert-100 transition-all duration-300`}
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ filter: "brightness(0) invert(1)" }}
                        className={`w-full h-full object-contain filter brightness-0 invert`}
                      />
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
