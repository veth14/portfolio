import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AboutPage = () => {
  // Initialize scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-active');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    setTimeout(animateOnScroll, 100);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Animated heading with gradient */}
      <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-4">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Enhanced Profile section with modern design */}
      <section className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          {/* Enhanced background decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cyan-500/5 rounded-full blur-lg animate-float animation-delay-1000"></div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
            {/* Enhanced profile image with animated border */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 animate-pulse-slow"></div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-md animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-md animate-float animation-delay-2000"></div>

              {/* Image container with hover effects */}
              <div className="absolute inset-[3px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-inner">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Ian Angelo Valmores"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced bio content with better typography and layout */}
            <div className="flex-1 relative">
              {/* Decorative element */}
              <div className="absolute -top-10 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-lg opacity-70"></div>

              {/* Name with enhanced styling */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ian Angelo Valmores</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div>
              </div>

              {/* Role badge */}
              <div className="inline-block px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-full text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                Computer Science Student
              </div>

              {/* Bio paragraphs with improved styling */}
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  I'm a passionate 2nd-year student at <span className="font-medium text-blue-600 dark:text-blue-400">Quezon City University</span> pursuing a degree in Computer Science/Information Technology.
                  My journey in web development started with HTML and CSS, and I've since expanded my skills to
                  include modern frameworks and technologies like React, Vite, and Tailwind CSS.
                </p>
                <p className="leading-relaxed">
                  I'm constantly learning and exploring new technologies to improve my skills and create better web experiences.
                  I enjoy solving problems and building intuitive, user-friendly interfaces that provide great user experiences.
                </p>

                {/* Enhanced social links with better styling */}
                <div className="flex gap-4 pt-3 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="https://github.com/veth14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <i className="fab fa-github text-lg"></i>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://ph.linkedin.com/in/ian-angelo-valmores-89aa8423a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:vianangelo.14@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <i className="fas fa-envelope text-lg"></i>
                    <span className="text-sm font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education section with timeline design */}
      <section className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
        <div className="flex items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          <i className="fas fa-graduation-cap text-blue-500 text-xl"></i>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          {/* Enhanced background decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse-slow animation-delay-2000"></div>

          <div className="relative z-10">
            {/* Timeline design for education */}
            <div className="relative border-l-2 border-blue-500 pl-8 pb-8 ml-4">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md shadow-blue-500/20 animate-pulse-slow"></div>

              {/* University card with enhanced design */}
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-white/10 group relative overflow-hidden">
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-university text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                    <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-500 transition-colors duration-300">Bachelor's Degree in Computer Science</h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Quezon City University</p>
                    <div className="flex items-center mt-1 sm:mt-0">
                      <i className="far fa-calendar-alt text-blue-500 mr-2"></i>
                      <p className="text-gray-500 dark:text-gray-400">2023 - Present (2nd Year)</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 border-l-4 border-blue-500/50 pl-3 italic bg-blue-50/30 dark:bg-blue-900/10 py-2 rounded-r-md">
                    Focusing on web development, programming fundamentals, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Coursework section with enhanced design */}
            <div className="mt-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-book text-blue-500 mr-3 text-xl"></i>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">Relevant Coursework</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-300 group border border-white/10 hover:border-blue-500/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills section with modern cards and tabs */}
      <section className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
        <div className="flex items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          <i className="fas fa-code text-blue-500 text-xl"></i>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          {/* Enhanced background decorative elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-20 left-1/2 w-20 h-20 bg-blue-500/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-1/4 w-16 h-16 bg-cyan-500/5 rounded-full blur-lg animate-float animation-delay-1000"></div>

          {/* Skills introduction */}
          <div className="relative z-10 mb-8">
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              I'm constantly developing my skills in various technologies and tools. Here's a snapshot of my current proficiency levels in different areas.
            </p>
          </div>

          <div className="relative z-10 space-y-12">
            {/* Programming Languages with enhanced design */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg mr-4">
                  <i className="fas fa-laptop-code text-lg"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                  Programming Languages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {programmingLanguages.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            {/* Frontend Technologies with enhanced design */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg mr-4">
                  <i className="fas fa-paint-brush text-lg"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                  Frontend Technologies
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            {/* Tools & Others with enhanced design */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg mr-4">
                  <i className="fas fa-tools text-lg"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                  Tools & Others
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            {/* Skill summary */}
            <div className="mt-8 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-start">
                <div className="text-blue-500 mr-3 mt-1">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Continuous Learning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    I believe in continuous improvement and am always learning new technologies. Currently, I'm focusing on deepening my knowledge of React and exploring backend technologies to become a more well-rounded developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Learning Journey section with timeline */}
      <section className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
        <div className="flex items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Learning Journey</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          <i className="fas fa-road text-blue-500 text-xl"></i>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          {/* Enhanced background decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-500/5 rounded-full blur-lg animate-float animation-delay-1000"></div>

          <div className="relative z-10">
            {/* Journey introduction */}
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-r-4 border-blue-500/30 px-6 py-3 bg-blue-50/30 dark:bg-blue-900/10 rounded-lg">
                "The beautiful thing about learning is that nobody can take it away from you." — B.B. King
              </p>
            </div>

            {/* Journey timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Beginning */}
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-white/10 group relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-code text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors duration-300">The Beginning</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Started with the basics of HTML, CSS, and JavaScript, building simple static websites and learning the fundamentals of web development.
                  </p>
                </div>
              </div>

              {/* Growth */}
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-white/10 group relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-chart-line text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors duration-300">Growth & Exploration</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Expanded into modern frameworks like React, learned about responsive design principles, and started building more complex interactive applications.
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-white/10 group relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors duration-300">Current Focus</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Mastering React and modern frontend technologies while exploring backend development to become a more well-rounded full-stack developer.
                  </p>
                </div>
              </div>
            </div>

            {/* Future goals */}
            <div className="mt-10 p-5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-200/30 dark:border-blue-800/30">
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1">
                  <i className="fas fa-binoculars text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Looking Ahead</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    I'm particularly interested in frontend development and creating intuitive, responsive user interfaces.
                    I enjoy the challenge of turning designs into functional websites and applications.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    My goal is to continue growing as a developer, contribute to meaningful projects, and eventually specialize in creating exceptional user experiences with modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Button */}
      <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">
        <div className="relative inline-block group">
          {/* Animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>

          <Link
            to="/projects"
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] inline-flex items-center gap-3"
          >
            <span className="text-lg">View My Projects</span>
            <i className="fas fa-arrow-right text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Enhanced skill card component with animations, icons and better visual design
const SkillCard = ({ name, level, delay = 0, icon }) => {
  return (
    <div
      className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-white/10 group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Enhanced background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/5 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500/5 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">{name}</h4>
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md">
            <i className={`${icon} text-xl`}></i>
          </div>
        </div>

        {/* Enhanced skill level indicator with animation */}
        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            style={{ width: `${level}%`, transition: 'width 1.5s ease-in-out' }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-20 bg-white/20 skew-x-30 animate-shine"></div>
            </div>
          </div>
        </div>

        {/* Level indicator with better styling */}
        <div className="mt-2 flex justify-between items-center text-sm">
          <div className="text-gray-500 dark:text-gray-400 font-medium">
            {level < 40 ? 'Beginner' : level < 70 ? 'Intermediate' : 'Advanced'}
          </div>
          <div className="text-blue-500 dark:text-blue-400 font-semibold">{level}%</div>
        </div>
      </div>
    </div>
  );
};

// Sample data with icons
const programmingLanguages = [
  { name: "JavaScript", level: 85, icon: "fab fa-js" },
  { name: "HTML", level: 90, icon: "fab fa-html5" },
  { name: "CSS", level: 85, icon: "fab fa-css3-alt" },
  { name: "Python", level: 60, icon: "fab fa-python" },
];

const frontendSkills = [
  { name: "React", level: 80, icon: "fab fa-react" },
  { name: "Tailwind CSS", level: 85, icon: "fas fa-wind" },
  { name: "Responsive Design", level: 80, icon: "fas fa-mobile-alt" },
  { name: "Vite", level: 75, icon: "fas fa-bolt" },
];

const toolsSkills = [
  { name: "Git", level: 75, icon: "fab fa-git-alt" },
  { name: "VS Code", level: 90, icon: "fas fa-code" },
  { name: "npm", level: 80, icon: "fab fa-npm" },
  { name: "Figma", level: 65, icon: "fab fa-figma" },
];

// Coursework data
const coursework = [
  "Web Development",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Computer Networks",
  "Software Engineering",
  "Mobile App Development",
  "UI/UX Design Principles"
];

export default AboutPage;
