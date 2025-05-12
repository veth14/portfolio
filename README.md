# My Modern React Portfolio

## About Me
Hello! I'm Ian Angelo Valmores, a passionate 2nd-year student pursuing a degree in Computer Science/Information Technology. This portfolio showcases my journey in web development, featuring projects I've created using React and other modern technologies.

## Education
- Currently enrolled as a 2nd-year student
- Focusing on web development, programming, and software engineering

## Tech Stack
### Core Technologies
- HTML5, CSS3, JavaScript (ES6+)
- TypeScript
- React.js with SWC (faster compilation)
- Vite (Fast build tool and development server)
- Tailwind CSS (Utility-first CSS framework)
- Node.js

### Modern Frontend Frameworks & Libraries
- React Router (For client-side routing)
- Redux Toolkit / React Context API (State management)
- Framer Motion (Animation library)
- React Query / SWR (Data fetching and caching)

### UI Component Libraries
- Material UI
- Chakra UI
- Shadcn UI
- Radix UI (Headless components)

### Styling Solutions
- Tailwind CSS (Primary styling approach)
- CSS Modules
- Styled Components
- SASS/SCSS

### Backend & API
- Express.js
- RESTful APIs
- GraphQL with Apollo Client
- Supabase / Firebase (Backend-as-a-Service)

### Testing
- Jest
- React Testing Library
- Cypress (E2E testing)

### Development Tools
- Git & GitHub
- VS Code with ESLint and Prettier
- Chrome DevTools
- Storybook (Component documentation)
- Figma (Design collaboration)

### Deployment & Hosting
- Vercel
- Netlify
- GitHub Pages

## Projects
*This section will be updated as I complete more projects*

### Project 1: Modern React Portfolio
- Description: A personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS
- Technologies: React, Vite, TypeScript, Tailwind CSS, Framer Motion
- Features: Responsive design, dark/light mode, animations, contact form
- [Link to live demo](#)
- [Link to GitHub repository](#)

### Project 2: Interactive Dashboard
- Description: A data visualization dashboard with authentication and real-time updates
- Technologies: React, Redux Toolkit, Material UI, Chart.js, Firebase
- Features: User authentication, real-time data, interactive charts
- [Link to live demo](#)
- [Link to GitHub repository](#)

### Project 3: E-commerce Store
- Description: A full-featured e-commerce platform with product catalog and cart functionality
- Technologies: React, TypeScript, Stripe, Supabase
- Features: Product listings, shopping cart, checkout process, user accounts
- [Link to live demo](#)
- [Link to GitHub repository](#)

## Academic Work
- Relevant coursework: Web Development, Data Structures, Algorithms
- Class projects and assignments

## Learning Journey
As a 2nd-year student, I'm constantly learning and improving my skills. This portfolio will grow as I progress through my academic journey and personal projects.

## Contact Information
- Email: [vianangelo.14@gmail.com](mailto:vianangelo.14@gmail.com)
- LinkedIn: [Ian Angelo Valmores](https://ph.linkedin.com/in/ian-angelo-valmores-89aa8423a)
- GitHub: [veth14](https://github.com/veth14)

## Future Goals
- Master modern React patterns and best practices
- Explore server components and React Server Side Rendering
- Learn mobile development with React Native
- Gain experience with headless CMS solutions (Contentful, Sanity)
- Implement CI/CD pipelines for automated testing and deployment
- Contribute to open-source React projects
- Secure an internship focused on modern frontend development

## Learning Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Dev Simplified YouTube Channel](https://www.youtube.com/c/WebDevSimplified)
- [Fireship YouTube Channel](https://www.youtube.com/c/Fireship)
- [Frontend Masters](https://frontendmasters.com/)

## Project Setup Instructions

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

### Tailwind CSS Setup
This project uses Tailwind CSS for styling. Here's how it was set up:

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind configuration files
npx tailwindcss init -p
```

Configure Tailwind CSS by updating the `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to your CSS in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Additional Packages
```bash
# Routing
npm install react-router-dom

# Animations
npm install framer-motion

# Icons
npm install react-icons

# Form handling
npm install react-hook-form

# Data fetching
npm install @tanstack/react-query
```

---

*This portfolio is built with React, Vite, TypeScript, and Tailwind CSS, and will be regularly updated with new projects and skills as I continue my education.*
