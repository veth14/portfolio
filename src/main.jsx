import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set dark mode by default if not already set in localStorage
if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', 'true');
  document.documentElement.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
