import { useEffect } from 'react';

/**
 * Custom hook to handle scroll animations using Intersection Observer API
 * @param {string} hiddenClass - The class to apply when element is not visible
 * @param {string} visibleClass - The class to apply when element is visible
 * @param {Object} options - Intersection Observer options
 */
const useScrollAnimation = (
  hiddenClass = 'scroll-hidden',
  visibleClass = 'scroll-show',
  options = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
) => {
  useEffect(() => {
    // Get all elements with the hidden class
    const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
    
    // Create an observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the element is intersecting (visible)
        if (entry.isIntersecting) {
          // Add the visible class
          entry.target.classList.add(visibleClass);
          // Stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observe all hidden elements
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [hiddenClass, visibleClass, options]);
};

export default useScrollAnimation;
