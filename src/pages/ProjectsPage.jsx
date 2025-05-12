import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 relative">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-3xl"></div>

        <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
          Explore my latest work and personal projects
        </p>
      </div>

      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            icon="fas fa-th-large"
          >
            All Projects
          </FilterButton>
          <FilterButton
            active={filter === 'ecommerce'}
            onClick={() => setFilter('ecommerce')}
            icon="fas fa-shopping-cart"
          >
            E-commerce
          </FilterButton>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`transform transition-all duration-700 max-w-2xl w-full mx-auto px-4 ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-inner">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            No projects found in this category. Try selecting a different filter.
          </p>
        </div>
      )}
    </div>
  );
};

// Project card component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-gray-900 relative overflow-hidden p-6">
        {project.image ? (
          <div className="flex justify-center items-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-[400px] object-contain transition-transform duration-700"
            />
          </div>
        ) : (
          <div className="w-full h-72 flex items-center justify-center">
            <span className="text-8xl">{project.emoji}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm">{project.shortDescription || project.description.substring(0, 80) + '...'}</p>
          </div>
        </div>

        <div className="absolute top-3 right-3 flex space-x-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200 backdrop-blur-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/80 dark:text-purple-200 backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-5">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-3 border-t border-gray-100 dark:border-gray-700">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium px-6 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30"
            >
              <i className="fas fa-external-link-alt mr-2"></i> Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter button component
const FilterButton = ({ children, active, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full transition-all duration-300 flex items-center space-x-2 ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
          : 'bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/80 shadow-sm'
      }`}
    >
      {icon && <i className={`${icon} ${active ? 'text-white' : 'text-blue-500 dark:text-blue-400'}`}></i>}
      <span>{children}</span>
    </button>
  );
};

// Project data
const projects = [
  {
    id: 1,
    title: "SaleMate E-commerce Platform",
    description: "A comprehensive e-commerce platform with product listings, shopping cart, user authentication, and payment processing. Features a clean, modern UI and responsive design for all devices.",
    shortDescription: "A modern e-commerce platform with full shopping functionality",
    emoji: "🛍️",
    image: "/images/projects/SalematePNG.png", // Updated image reference
    category: "ecommerce",
    featured: true,
    technologies: ["React", "Node.js", "Express", "Firebase", "Stripe", "JWT"],
    demoUrl: "https://salemate.netlify.app/",
    codeUrl: null // Removed code URL
  }
];

export default ProjectsPage;
