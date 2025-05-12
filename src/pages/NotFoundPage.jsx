import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">404</h1>
      <h2 className="text-4xl font-bold mb-8">Page Not Found</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
