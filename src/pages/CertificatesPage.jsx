import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Add animation keyframes for the certificate page
const animationStyles = `
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  @keyframes shimmer {
    0% { opacity: 0.4; }
    50% { opacity: 0.7; }
    100% { opacity: 0.4; }
  }

  @keyframes morph {
    0% { border-radius: 16px; }
    25% { border-radius: 20px 12px 24px 8px; }
    50% { border-radius: 14px 18px 10px 22px; }
    75% { border-radius: 22px 8px 16px 24px; }
    100% { border-radius: 16px; }
  }

  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }

  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }

  .animate-morph {
    animation: morph 8s ease-in-out infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }

  .card-hover-effect {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card-hover-effect:hover {
    transform: translateY(-15px) rotateZ(2deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }

  .scroll-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.5s ease;
  }

  .scroll-show {
    opacity: 1;
    transform: translateY(0);
  }

  .image-fallback::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #2c3e50, #4a69bd, #6a89cc);
    z-index: 15;
    opacity: 0.8;
  }
`;

const CertificatesPage = () => {
  // State for filtering certificates
  const [filter, setFilter] = useState('all');
  const [displayedCertificates, setDisplayedCertificates] = useState([]);

  // Add animation styles to head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Scroll animation
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-hidden');

    const handleScroll = () => {
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('scroll-show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view on load
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter certificates based on category
  useEffect(() => {
    const filtered = certificates.filter(certificate => {
      return filter === 'all' || certificate.category === filter;
    });

    setDisplayedCertificates(filtered);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pb-24">
      {/* Modern Page Header with Enhanced Readability */}
      <section className="w-full mb-12 sm:mb-16 md:mb-20 relative overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(59,130,246,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
          <div className="text-center">
            {/* Modern Card-Style Header */}
            <div className="inline-block mb-10 relative bg-gray-800/60 backdrop-blur-lg px-8 py-6 rounded-2xl shadow-2xl border border-blue-500/20 animate-fadeInUp">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white relative z-10">
                <span className="relative inline-block">
                  Certificates & Seminars
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 blur-lg -z-10 rounded-lg"></div>
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mt-6 font-light">
                A showcase of my professional development, courses, and achievements
              </p>
            </div>

            {/* User-Friendly Filter Controls */}
            <div className="flex justify-center mb-10 animate-fadeInUp animation-delay-500">
              <div className="bg-gray-800/60 backdrop-blur-lg p-2 rounded-xl border border-blue-500/20 shadow-lg flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`relative px-8 py-3 text-base font-medium transition-all duration-500 rounded-lg overflow-hidden group flex items-center justify-center min-w-[120px] ${
                    filter === 'all'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/80'
                  }`}
                  aria-label="Show all certificates and seminars"
                >
                  <i className="fas fa-th-large mr-2"></i>
                  <span className="relative">All</span>
                  {filter === 'all' && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white"></span>
                  )}
                </button>
                <button
                  onClick={() => setFilter('certificate')}
                  className={`relative px-8 py-3 text-base font-medium transition-all duration-500 rounded-lg overflow-hidden group flex items-center justify-center min-w-[120px] ${
                    filter === 'certificate'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/80'
                  }`}
                  aria-label="Show only certificates"
                >
                  <i className="fas fa-certificate mr-2"></i>
                  <span className="relative">Certificates</span>
                  {filter === 'certificate' && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white"></span>
                  )}
                </button>
                <button
                  onClick={() => setFilter('seminar')}
                  className={`relative px-8 py-3 text-base font-medium transition-all duration-500 rounded-lg overflow-hidden group flex items-center justify-center min-w-[120px] ${
                    filter === 'seminar'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/80'
                  }`}
                  aria-label="Show only seminars"
                >
                  <i className="fas fa-users mr-2"></i>
                  <span className="relative">Seminars</span>
                  {filter === 'seminar' && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white"></span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="w-full mb-20 sm:mb-24 md:mb-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {displayedCertificates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {displayedCertificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-blue-500/20 shadow-2xl">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-search text-5xl text-blue-400/80"></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">No certificates found</h3>
              <p className="text-gray-300 max-w-md mx-auto">
                No items match your current filter. Try selecting a different category from the options above.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center mx-auto"
              >
                <i className="fas fa-th-large mr-2"></i>
                View All Items
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal removed */}
    </div>
  );
};

// Modern Certificate Card Component with Premium Design
const CertificateCard = ({ certificate, index }) => {

  // Determine color scheme based on category
  const colorScheme = certificate.category === 'certificate'
    ? {
        primary: 'from-blue-600 to-indigo-600',
        border: 'border-blue-500/30 group-hover:border-blue-400',
        glow: 'from-blue-500 to-indigo-500',
        text: 'text-blue-400 group-hover:text-blue-300',
        badge: 'bg-blue-600 text-white',
        icon: 'fa-certificate'
      }
    : {
        primary: 'from-purple-600 to-pink-600',
        border: 'border-purple-500/30 group-hover:border-purple-400',
        glow: 'from-purple-500 to-pink-500',
        text: 'text-purple-400 group-hover:text-purple-300',
        badge: 'bg-purple-600 text-white',
        icon: 'fa-users'
      };

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500
      hover:translate-y-[-8px] scroll-hidden rounded-2xl animate-morph`}
      style={{
        animationDelay: `${index * 150}ms`,
        borderRadius: '16px'
      }}
    >
      {/* Modern glass-morphism card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-2xl border border-gray-700/50 group-hover:border-gray-600/70 backdrop-blur-sm transition-all duration-500"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-10 rounded-2xl"></div>

      {/* Animated gradient accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card shadow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-gray-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Glowing effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.glow} rounded-2xl opacity-5`}></div>
      </div>

      {/* Card Header with Image */}
      <div className="relative">
        {/* Date Badge - Top Right - Glass effect */}
        <div className="absolute top-4 right-4 z-30">
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-800/70 text-white border border-white/10 backdrop-blur-sm flex items-center shadow-sm group-hover:bg-gray-800/90 transition-all duration-300 group-hover:shadow-md">
            <i className="far fa-calendar-alt mr-1.5 text-gray-300 group-hover:text-white transition-colors duration-300"></i>
            {certificate.date}
          </span>
        </div>

        {/* Category Badge - Top Left - Glass effect */}
        <div className="absolute top-4 left-4 z-30">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center shadow-sm backdrop-blur-sm border border-white/10 ${colorScheme.badge} transition-all duration-300 group-hover:shadow-md`}>
            <i className={`fas ${colorScheme.icon} mr-1.5`}></i>
            {certificate.category === 'certificate' ? 'Certificate' : 'Seminar'}
          </span>
        </div>

        {/* Image Container - Modern design with glass effect */}
        <div className="h-52 relative overflow-hidden rounded-t-2xl">
          {/* Static background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

          {/* Image with enhanced hover effect for full quality */}
          <div className="absolute inset-0 transform transition-all duration-700">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1500 group-hover:filter-none group-hover:brightness-110"
              style={{
                filter: "brightness(0.8) contrast(0.9) saturate(1.1)",
                willChange: "transform, filter, opacity"
              }}
              onError={(e) => {
                // Replace with a fallback image instead of hiding
                e.target.src = "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                e.target.onerror = null; // Prevent infinite loop if fallback also fails
              }}
              loading="lazy"
            />
          </div>

          {/* Modern gradient overlay with color accent */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/90 z-10 group-hover:opacity-30 transition-opacity duration-700"></div>

          {/* Color accent overlay based on certificate type */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 z-20">
            <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.glow}`}></div>
          </div>

          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover:opacity-5 transition-opacity duration-700 z-30"></div>

          {/* Light beam effect on hover */}
          <div className="absolute -inset-full h-[600%] w-[150%] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 z-20 bg-gradient-to-tr from-white via-white to-transparent blur-2xl group-hover:animate-beam"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 relative z-10">
        {/* Title with gradient text effect */}
        <h3 className="text-xl font-bold mb-2 line-clamp-1 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-white group-hover:to-blue-100">
          {certificate.title}
        </h3>

        {/* Issuer with modern badge-style layout and hover effect */}
        <div className="mb-4 h-7">
          <div className="inline-flex items-center bg-gray-800/80 rounded-full px-3 py-1.5 max-w-full border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 group-hover:bg-gray-800/90 shadow-sm group-hover:shadow">
            <i className="fas fa-building text-gray-400 text-xs mr-1.5 group-hover:text-gray-300 transition-colors duration-300"></i>
            <span className="text-xs font-medium text-gray-300 mr-1.5">Issued by:</span>
            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">{certificate.issuer}</span>
          </div>
        </div>

        {/* Modern gradient divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-4 opacity-70 group-hover:via-blue-500/30 transition-colors duration-500"></div>

        {/* View Certificate Button - Direct link */}
        {certificate.url ? (
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full mt-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center bg-gradient-to-r ${colorScheme.primary} text-white backdrop-blur-sm border border-white/10`}
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}
          >
            <span>View Certificate</span>
            <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        ) : (
          <div
            className={`w-full mt-4 px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-center bg-gray-700 text-gray-300 backdrop-blur-sm border border-white/5 opacity-70`}
          >
            <span>No Certificate Link</span>
            <i className="fas fa-lock ml-2"></i>
          </div>
        )}
      </div>
    </div>
  );
};

// Sample certificate data - Replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issuer: "Quezon City University",
    date: "June 2023",
    category: "certificate",
    description: "Completed a comprehensive course on web development fundamentals, covering HTML, CSS, JavaScript, and responsive design principles.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 2,
    title: "React.js Essentials",
    issuer: "Udemy",
    date: "August 2023",
    category: "certificate",
    description: "Mastered React.js fundamentals including components, state management, hooks, and building single-page applications.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 3,
    title: "Modern Web Design Seminar",
    issuer: "Design Philippines",
    date: "October 2023",
    category: "seminar",
    description: "Attended a seminar on modern web design principles, UI/UX best practices, and current design trends in the industry.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: null
  },
  {
    id: 4,
    title: "JavaScript Advanced Concepts",
    issuer: "Coursera",
    date: "November 2023",
    category: "certificate",
    description: "Deep dive into advanced JavaScript concepts including closures, prototypes, async programming, and ES6+ features.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 5,
    title: "Tech Career Development Workshop",
    issuer: "Tech Career Philippines",
    date: "January 2024",
    category: "seminar",
    description: "Participated in a workshop focused on career development in the tech industry, including portfolio building and interview preparation.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: null
  },
  {
    id: 6,
    title: "Tailwind CSS Mastery",
    issuer: "Frontend Masters",
    date: "March 2024",
    category: "certificate",
    description: "Comprehensive course on Tailwind CSS, covering utility-first workflow, responsive design, and component creation.",
    image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 7,
    title: "Mobile App Development with React Native",
    issuer: "Pluralsight",
    date: "April 2024",
    category: "certificate",
    description: "Learned how to build cross-platform mobile applications using React Native, including navigation, state management, and native APIs.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    issuer: "CompTIA",
    date: "May 2024",
    category: "certificate",
    description: "Gained essential knowledge in network security, threat detection, encryption, and security best practices for web applications.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 9,
    title: "AI and Machine Learning Symposium",
    issuer: "Philippine AI Association",
    date: "February 2024",
    category: "seminar",
    description: "Participated in a symposium exploring the latest advancements in AI and machine learning and their applications in web development.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: null
  },
  {
    id: 10,
    title: "Database Management with MongoDB",
    issuer: "MongoDB University",
    date: "December 2023",
    category: "certificate",
    description: "Mastered NoSQL database concepts, MongoDB architecture, data modeling, and integration with modern web applications.",
    image: "https://images.pexels.com/photos/4497195/pexels-photo-4497195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 11,
    title: "DevOps and CI/CD Pipeline Workshop",
    issuer: "AWS Philippines",
    date: "March 2024",
    category: "seminar",
    description: "Hands-on workshop covering DevOps principles, continuous integration, continuous deployment, and cloud infrastructure management.",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: null
  },
  {
    id: 12,
    title: "Blockchain Technology Certification",
    issuer: "Blockchain Council",
    date: "April 2024",
    category: "certificate",
    description: "Comprehensive training on blockchain fundamentals, smart contracts, decentralized applications, and Web3 development.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 13,
    title: "UX Research Methods",
    issuer: "Nielsen Norman Group",
    date: "January 2024",
    category: "certificate",
    description: "Learned user research methodologies, usability testing, information architecture, and how to apply research insights to design decisions.",
    image: "https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  },
  {
    id: 14,
    title: "Sustainable Tech Conference",
    issuer: "Green Computing Initiative",
    date: "May 2024",
    category: "seminar",
    description: "Conference focused on sustainable and eco-friendly approaches to software development, cloud computing, and digital product design.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: null
  },
  {
    id: 15,
    title: "TypeScript Advanced Patterns",
    issuer: "Microsoft Learning",
    date: "February 2024",
    category: "certificate",
    description: "Advanced course on TypeScript covering generics, decorators, advanced types, and integration with modern frameworks.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#"
  }
];

export default CertificatesPage;
