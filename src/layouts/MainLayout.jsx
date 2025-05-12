import { useState, useEffect, useContext, createContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Create ThemeContext to share dark mode state
const ThemeContext = createContext({ darkMode: true });

const MainLayout = ({ children }) => {
  // Always default to dark mode unless explicitly set to false in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    // Default to dark mode if not set, otherwise use the stored value
    return savedMode === null ? true : savedMode === 'true';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Initialize and update dark mode whenever darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode)); // Store as string 'true' or 'false'

    // Add or remove dark class from html element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    // Close mobile menu
    setIsMenuOpen(false);

    // Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for navigation
    });
  }, [location.pathname]);

  // Handle scroll effect for header with debounce to prevent glitching
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }, 10);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div className={`min-h-screen font-sans ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        {/* Animated Header Design with Light/Dark Mode Support */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-blue-500/10 py-2'
              : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-500/10 py-2'
            : darkMode
              ? 'bg-gray-900/80 py-2'
              : 'bg-white/80 py-2'
        }`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse-slow animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="flex justify-between items-center animate-fadeIn">
              {/* Logo with enhanced square design - Made wider */}
              <Link to="/" className="flex items-center group relative cursor-pointer">
                <div className="relative w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 mr-3 xs:mr-4 transition-all duration-300 group-hover:scale-105">
                  {/* Gradient background with subtle animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-md shadow-md"></div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x opacity-70"></div>
                  </div>

                  {/* Inner border */}
                  <div className="absolute inset-[1px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-md"></div>

                  {/* Image container */}
                  <div className="absolute inset-[2px] overflow-hidden rounded-[3px]">
                    <img
                      src="/images/profile/profile.jpg"
                      alt="Ian Angelo Valmores"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="relative">
                  <span className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    Ian's Portfolio
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 group-hover:w-full transition-all duration-300"></span>
                </div>
              </Link>

              {/* Desktop Navigation - Only visible on large screens */}
              <nav className="hidden lg:flex items-center animate-fadeIn">
                <div className="flex space-x-1 xs:space-x-2 sm:space-x-3 mr-3 xs:mr-4 relative">
                  {/* Simplified nav items - Made wider */}
                  <NavLink to="/" exact className="px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-lg flex items-center font-medium text-sm xs:text-base nav-item-animation" style={{ animationDelay: '100ms' }}>
                    <i className="fas fa-home mr-2 xs:mr-2.5 transition-transform duration-300"></i> Home
                  </NavLink>
                  <NavLink to="/about" className="px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-lg flex items-center font-medium text-sm xs:text-base nav-item-animation" style={{ animationDelay: '200ms' }}>
                    <i className="fas fa-user mr-2 xs:mr-2.5 transition-transform duration-300"></i> About
                  </NavLink>
                  <NavLink to="/projects" className="px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-lg flex items-center font-medium text-sm xs:text-base nav-item-animation" style={{ animationDelay: '300ms' }}>
                    <i className="fas fa-code mr-2 xs:mr-2.5 transition-transform duration-300"></i> Projects
                  </NavLink>
                  <NavLink to="/contact" className="px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-lg flex items-center font-medium text-sm xs:text-base nav-item-animation" style={{ animationDelay: '400ms' }}>
                    <i className="fas fa-envelope mr-2 xs:mr-2.5 transition-transform duration-300"></i> Contact
                  </NavLink>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 xs:p-2.5 rounded-lg bg-white/5 hover:bg-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-md border border-white/5 animate-fadeIn nav-item-animation"
                  style={{ animationDelay: '500ms' }}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <i className="fas fa-sun text-yellow-400 animate-spin-slow text-sm xs:text-base"></i>
                  ) : (
                    <i className="fas fa-moon text-blue-400 hover:rotate-12 transition-transform duration-300 text-sm xs:text-base"></i>
                  )}
                </button>
              </nav>

              {/* Mobile Menu Button - Visible on mobile and tablet */}
              <div className="flex items-center lg:hidden animate-fadeIn">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 xs:p-2.5 rounded-lg bg-white/5 hover:bg-blue-500/20 mr-2 xs:mr-3 transition-all duration-300 border border-white/5 shadow-lg nav-item-animation relative overflow-hidden"
                  style={{ animationDelay: '200ms' }}
                  aria-label="Toggle dark mode"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {darkMode ? (
                      <i className="fas fa-sun text-yellow-400 animate-spin-slow text-sm xs:text-base"></i>
                    ) : (
                      <i className="fas fa-moon text-blue-400 hover:rotate-12 transition-transform duration-300 text-sm xs:text-base"></i>
                    )}
                  </div>
                </button>
                <button
                  onClick={toggleMenu}
                  className="p-2 xs:p-2.5 rounded-lg bg-white/5 hover:bg-blue-500/20 transition-all duration-300 border border-white/5 shadow-lg nav-item-animation relative overflow-hidden"
                  style={{ animationDelay: '300ms' }}
                  aria-label="Toggle menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-5 h-5 xs:w-6 xs:h-6 flex flex-col justify-center items-center relative z-10">
                    <span className={`bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-5 xs:w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-5 xs:w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-5 xs:w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation - Enhanced Animated Dropdown */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out relative ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {/* Animated background elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl transition-all duration-700 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`} style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-xl transition-all duration-700 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                }`} style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}></div>
              </div>

              <nav className="py-3 xs:py-4 sm:py-5 flex flex-col space-y-2 xs:space-y-3 border-t border-white/5 mt-3 xs:mt-4 relative">
                <NavLink
                  to="/"
                  exact
                  className={`px-4 xs:px-5 py-3 xs:py-4 rounded-lg flex items-center transform transition-all duration-500 hover:translate-x-2 bg-white/5 backdrop-blur-sm ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
                >
                  <i className="fas fa-home mr-2 xs:mr-3 text-blue-400 text-base xs:text-lg"></i>
                  <span className="font-medium text-sm xs:text-base">Home</span>
                </NavLink>
                <NavLink
                  to="/about"
                  className={`px-4 xs:px-5 py-3 xs:py-4 rounded-lg flex items-center transform transition-all duration-500 hover:translate-x-2 bg-white/5 backdrop-blur-sm ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
                >
                  <i className="fas fa-user mr-2 xs:mr-3 text-blue-400 text-base xs:text-lg"></i>
                  <span className="font-medium text-sm xs:text-base">About</span>
                </NavLink>
                <NavLink
                  to="/projects"
                  className={`px-4 xs:px-5 py-3 xs:py-4 rounded-lg flex items-center transform transition-all duration-500 hover:translate-x-2 bg-white/5 backdrop-blur-sm ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
                >
                  <i className="fas fa-code mr-2 xs:mr-3 text-blue-400 text-base xs:text-lg"></i>
                  <span className="font-medium text-sm xs:text-base">Projects</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={`px-4 xs:px-5 py-3 xs:py-4 rounded-lg flex items-center transform transition-all duration-500 hover:translate-x-2 bg-white/5 backdrop-blur-sm ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
                >
                  <i className="fas fa-envelope mr-2 xs:mr-3 text-blue-400 text-base xs:text-lg"></i>
                  <span className="font-medium text-sm xs:text-base">Contact</span>
                </NavLink>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Content with enhanced background and animations - Optimized for tablet portrait */}
        <main className="container mx-auto px-3 xs:px-4 py-6 xs:py-8 pb-0 relative overflow-hidden flex-grow">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none animate-fadeIn"></div>

          {/* Animated background elements - Adjusted for better tablet portrait display */}
          <div className="absolute -top-20 xs:-top-30 sm:-top-40 -right-20 xs:-right-30 sm:-right-40 w-60 xs:w-70 sm:w-80 h-60 xs:h-70 sm:h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 xs:-bottom-30 sm:-bottom-40 -left-20 xs:-left-30 sm:-left-40 w-60 xs:w-70 sm:w-80 h-60 xs:h-70 sm:h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

          {/* Additional floating elements - Adjusted for better tablet portrait display */}
          <div className="absolute top-1/4 left-5 xs:left-8 sm:left-10 w-12 xs:w-16 sm:w-20 h-12 xs:h-16 sm:h-20 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full filter blur-xl animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-5 xs:right-8 sm:right-10 w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16 bg-pink-500/10 dark:bg-pink-500/20 rounded-full filter blur-xl animate-float animation-delay-3000"></div>

          {/* Content with page transition */}
          <div className="relative z-10 animate-fadeInUp">
            {children}
          </div>
        </main>

        {/* Modern Minimalist Footer with Light/Dark Mode Support */}
        <footer className="relative mt-0 overflow-hidden border-t border-blue-500/10 dark:border-blue-500/10">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          {/* Background with subtle gradient - light/dark mode */}
          <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/95' : 'bg-gray-100/95'} backdrop-blur-lg`}></div>

          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px] animate-pulse-slow animation-delay-2000"></div>

          <div className="container mx-auto px-4 xs:px-5 sm:px-6 py-8 xs:py-10 sm:py-12 relative z-10">
            {/* Main footer content with improved tablet portrait layout */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
              {/* Logo and brand section */}
              <div className="flex flex-col items-center md:items-start col-span-2 sm:col-span-2 md:col-span-1 mb-2 sm:mb-0">
                <Link to="/" className="flex items-center cursor-pointer group mb-2 xs:mb-3 sm:mb-4">
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src="/images/profile/profile.jpg"
                      alt="Ian Angelo Valmores"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="ml-1.5 xs:ml-2 sm:ml-3 text-base xs:text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    Ian's Portfolio
                  </span>
                </Link>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm max-w-xs text-center md:text-left`}>
                  A showcase of my web development projects and skills.
                </p>
              </div>

              {/* Quick links */}
              <div className="flex flex-col items-center sm:items-start">
                <h3 className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 xs:mb-2 sm:mb-4`}>Navigation</h3>
                <div className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-2">
                  <Link to="/" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-xs xs:text-xs sm:text-sm`}>Home</Link>
                  <Link to="/about" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-xs xs:text-xs sm:text-sm`}>About</Link>
                  <Link to="/projects" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-xs xs:text-xs sm:text-sm`}>Projects</Link>
                  <Link to="/contact" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-xs xs:text-xs sm:text-sm`}>Contact</Link>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-col items-center sm:items-start">
                <h3 className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 xs:mb-2 sm:mb-4`}>Technologies</h3>
                <div className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-2">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm`}>React</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm`}>JavaScript</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm`}>Tailwind CSS</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm`}>Vite</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-center sm:items-start col-span-2 sm:col-span-2 md:col-span-1 mt-1 xs:mt-2 sm:mt-0">
                <h3 className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 xs:mb-2 sm:mb-4`}>Contact</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs xs:text-xs sm:text-sm max-w-xs text-center sm:text-left mb-2 xs:mb-3 sm:mb-4`}>
                  Looking for a developer? Let's connect!
                </p>
                <Link
                  to="/contact"
                  className="px-3 xs:px-4 sm:px-5 py-1 xs:py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs xs:text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Bottom section with copyright and back to top */}
            <div className={`pt-3 xs:pt-4 sm:pt-6 border-t ${darkMode ? 'border-white/5' : 'border-gray-300/20'} flex flex-col items-center`}>
              {/* Back to top button with improved styling and tablet portrait optimization */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-3 xs:px-4 sm:px-5 py-1 xs:py-1.5 sm:py-2 rounded-full mb-3 xs:mb-4 sm:mb-6 ${darkMode ? 'bg-white/5 text-gray-300 hover:text-white' : 'bg-gray-800/5 text-gray-600 hover:text-gray-900'} hover:bg-blue-500/20 text-xs xs:text-xs sm:text-sm flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md`}
              >
                <span>Back to top</span>
                <i className="fas fa-arrow-up text-xs ml-1.5 xs:ml-2"></i>
              </button>

              {/* Centered copyright text - responsive sizing */}
              <p className="text-xs xs:text-xs sm:text-sm text-gray-500 text-center px-3 xs:px-4">
                © {new Date().getFullYear()} Ian Angelo Valmores. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      </div>
    </ThemeContext.Provider>
  );
};

// Enhanced NavLink with cleaner hover and active states - Adjusted for wider navbar
const NavLink = ({ children, to, exact, className = '', style = {} }) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="px-0.5 py-0.5">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced active background with gradient */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-90 shadow-md"></div>
        )}

        <Link
          to={to}
          style={style}
          className={`
            block rounded-lg relative z-10
            ${className}
            ${isActive
              ? 'text-white font-medium'
              : darkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-blue-600'
            }
            transition-colors duration-300
          `}
        >
          {/* Link content */}
          <span className="flex items-center">
            {children}
          </span>
        </Link>

        {/* Enhanced hover underline */}
        {!isActive && (
          <span
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              isHovered ? 'w-3/4' : 'w-0'
            }`}
          ></span>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
