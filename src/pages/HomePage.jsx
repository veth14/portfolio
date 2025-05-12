import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a 2nd-year student passionate about web development.";
  const [textIndex, setTextIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  return (
    <div className="flex flex-col items-center">
      {/* Modern Hero Section with Responsive Layout */}
      <section className="w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center py-10 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 relative overflow-hidden">
        {/* Background gradient with enhanced opacity control - responsive to light/dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-3xl"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>

        {/* Enhanced animated particles with better positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main glow elements - responsive sizing */}
          <div className="absolute top-1/4 left-1/5 w-24 sm:w-32 md:w-56 h-24 sm:h-32 md:h-56 rounded-full bg-blue-400/15 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/5 w-24 sm:w-32 md:w-56 h-24 sm:h-32 md:h-56 rounded-full bg-purple-400/15 blur-3xl animate-pulse-slow animation-delay-2000"></div>

          {/* Smaller accent particles - responsive sizing */}
          <div className="absolute top-1/2 right-1/3 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-full bg-cyan-400/20 blur-2xl animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full bg-pink-400/20 blur-2xl animate-float animation-delay-3000"></div>
        </div>

        {/* Main content with enhanced responsive layout for all devices and orientations */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Responsive layout that adapts to tablet portrait mode via CSS media query */}
          <div className="home-hero-layout flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Profile image - Circular with decorative elements */}
            <div className="profile-container w-full md:w-5/12 flex justify-center md:justify-start animate-fadeIn mb-6 md:mb-0">
              <div className="relative group">
                {/* Main profile image - Circular with border */}
                <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10">
                  <img
                    src="/images/profile/profile.jpg"
                    alt="Ian Angelo Valmores"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                </div>

                {/* Decorative elements - Responsive sizing */}
                <div className="absolute -inset-2 rounded-full border-2 border-blue-500/20 animate-spin-slow"></div>
                <div className="absolute -inset-4 rounded-full border border-purple-500/10 animate-reverse-spin-slow"></div>

                {/* Accent dots - Responsive sizing */}
                <div className="absolute top-1/4 -right-2 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 animate-float"></div>
                <div className="absolute bottom-1/4 -left-2 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500 animate-float animation-delay-1000"></div>
                <div className="absolute top-0 right-1/4 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-float animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/4 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400 animate-float animation-delay-1500"></div>
              </div>
            </div>

            {/* Text content - Responsive layout that changes on tablet portrait */}
            <div className="content-container w-full md:w-7/12 text-center md:text-left">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                Welcome to My Portfolio
              </h1>

              <div className="h-8 xs:h-10 sm:h-12 md:h-16 mb-4 sm:mb-6 md:mb-8 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                  {typedText}<span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Buttons - Responsive layout */}
              <div className="button-container flex flex-col xs:flex-row justify-center md:justify-start items-center space-y-3 xs:space-y-0 xs:space-x-4 md:space-x-6 animate-fadeInUp" style={{ animationDelay: '900ms' }}>
                <Link
                  to="/projects"
                  className="w-full xs:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
                >
                  <i className="fas fa-code-branch mr-2"></i> View Projects
                </Link>
                <Link
                  to="/contact"
                  className="w-full xs:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-200/50 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-300/70 dark:hover:bg-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-300/20 dark:border-white/10 text-center text-sm sm:text-base"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact Me
                </Link>
              </div>

              {/* Social links - Responsive layout */}
              <div className="social-links mt-6 sm:mt-8 flex justify-center md:justify-start space-x-4 animate-fadeInUp" style={{ animationDelay: '1200ms' }}>
                <a href="https://github.com/veth14" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-gray-300/20 dark:border-white/10 group">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="https://ph.linkedin.com/in/ian-angelo-valmores-89aa8423a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-gray-300/20 dark:border-white/10 group">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a href="mailto:vianangelo.14@gmail.com" className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-gray-300/20 dark:border-white/10 group">
                  <i className="fas fa-envelope text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements - Responsive sizing */}
        <div className="absolute top-[15%] right-[15%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] left-[15%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-[25%] right-[25%] w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-cyan-500/20 blur-lg animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-[25%] left-[25%] w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-pink-500/20 blur-lg animate-pulse-slow animation-delay-3000"></div>

        {/* Scroll indicator - Centered at bottom with simple design */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 mx-auto w-max flex flex-col items-center animate-bounce-slow">
          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-1 font-medium">Scroll Down</span>
          <i className="fas fa-chevron-down text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg"></i>
        </div>
      </section>

      {/* Enhanced Tech Stack Section with Scroll Animations - Improved Responsiveness */}
      <section className="w-full mb-12 sm:mb-16 md:mb-20 scroll-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Built with Modern Technologies</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-[width_1s_ease-out_forwards_0.5s]"></div>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This portfolio showcases my skills in modern web development using cutting-edge tools and frameworks.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 md:p-8 transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 scroll-hidden-container">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8">
              <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 stagger-item">
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative">
                    <img src={reactLogo} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 animate-spin-slow" alt="React logo" />
                    <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </a>
                <span className="mt-1.5 sm:mt-2 md:mt-3 font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">React</span>
              </div>

              <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 stagger-item">
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative">
                    <img src={viteLogo} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" alt="Vite logo" />
                    <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </a>
                <span className="mt-1.5 sm:mt-2 md:mt-3 font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">Vite</span>
              </div>

              <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 stagger-item">
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center">
                    <i className="fab fa-css3-alt text-3xl sm:text-4xl md:text-5xl text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110"></i>
                    <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </a>
                <span className="mt-1.5 sm:mt-2 md:mt-3 font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 stagger-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center">
                    <i className="fab fa-js-square text-3xl sm:text-4xl md:text-5xl text-yellow-500 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110"></i>
                    <div className="absolute inset-0 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </a>
                <span className="mt-1.5 sm:mt-2 md:mt-3 font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section with Scroll Animations - Improved Responsiveness */}
      <section className="w-full mb-16 sm:mb-20 md:mb-24 scroll-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-[width_1s_ease-out_forwards_0.7s]"></div>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Check out some of my recent work
            </p>
          </div>

          <div className="flex justify-center items-center scroll-hidden-container">
            {/* Enhanced project category card */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 stagger-item max-w-md w-full mx-auto">
              <div className="flex flex-col sm:flex-row">
                {/* Left side with icon */}
                <div className="w-full sm:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30 transition-all duration-500 p-6 sm:p-0">
                  <div className="relative z-10 flex flex-col items-center justify-center h-full py-6">
                    <span className="text-5xl sm:text-6xl md:text-7xl transform transition-transform duration-500 group-hover:scale-110">🛍️</span>
                    <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-800 dark:text-white text-center">E-commerce</h3>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                {/* Right side with info */}
                <div className="w-full sm:w-2/3 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200 shadow-sm">
                        1 Project
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/70 dark:text-purple-200 shadow-sm">
                        Featured
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">E-commerce Projects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Online shopping platforms with product listings, shopping carts, and secure payment processing.</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">React</span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Firebase</span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Stripe</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Link
                      to="/projects"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 relative group px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30"
                    >
                      View All Projects
                      <i className="fas fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50 dark:border-gray-700/50 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              View All Projects
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>



      {/* Enhanced Skills Section with Scroll Animations - Improved Responsiveness */}
      <section className="w-full mb-16 sm:mb-20 md:mb-24 scroll-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-[width_1s_ease-out_forwards_0.9s]"></div>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 scroll-hidden-container">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md text-center transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden stagger-item"
              >
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Skill content */}
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 text-blue-600 dark:text-blue-400 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                    <i className={getSkillIcon(skill)}></i>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{skill}</div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] sm:border-t-[20px] md:border-t-[25px] border-r-[15px] sm:border-r-[20px] md:border-r-[25px] border-t-blue-100 border-r-blue-100 dark:border-t-blue-800/30 dark:border-r-blue-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with Scroll Animations - Improved Responsiveness */}
      <section className="w-full mb-16 sm:mb-20 md:mb-24 scroll-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center text-white overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            {/* Animated background elements - Responsive sizing */}
            <div className="absolute -top-16 sm:-top-20 md:-top-24 -right-16 sm:-right-20 md:-right-24 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white/10 rounded-full blur-xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 -left-16 sm:-left-20 md:-left-24 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white/10 rounded-full blur-xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

            {/* Floating particles - Responsive sizing */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-white/30 rounded-full animate-float"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-white/20 rounded-full animate-float animation-delay-1000"></div>
              <div className="absolute top-2/3 right-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Let's Work Together</h2>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-white/90">
                I'm currently available for freelance work and open to new opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <i className="fas fa-paper-plane mr-2"></i> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get icon for skills
const getSkillIcon = (skill) => {
  const iconMap = {
    'React': 'fab fa-react',
    'JavaScript': 'fab fa-js',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'Tailwind CSS': 'fab fa-css3',
    'Vite': 'fas fa-bolt',
    'Responsive Design': 'fas fa-mobile-alt',
    'Git': 'fab fa-git-alt',
    'TypeScript': 'fab fa-js',
    'Node.js': 'fab fa-node-js',
    'Firebase': 'fas fa-fire',
    'Express': 'fab fa-node-js',
    'Stripe': 'fab fa-stripe-s',
    'JWT': 'fas fa-key'
  };

  return iconMap[skill] || 'fas fa-code';
};

// Project data
const featuredProjects = [
  {
    id: 1,
    title: "SaleMate E-commerce Platform",
    description: "A comprehensive e-commerce platform with product listings, shopping cart, user authentication, and payment processing. Features a clean, modern UI and responsive design for all devices.",
    emoji: "🛍️",
    image: "/images/projects/SalematePNG.png",
    link: "/projects",
    demoUrl: "https://salemate.netlify.app/"
  }
];

const skills = [
  "React", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Node.js", "Firebase", "Express",
  "Responsive Design", "Git", "Stripe", "JWT"
];

export default HomePage;
