// $lib/scrollReveal.js
export function scrollReveal(node, options = {}) {
  // Professor's tip: Accept delay in milliseconds for finer control
  const { delay = 0, threshold = 0.15 } = options;

  // Add the base class
  node.classList.add('reveal');
  
  // Apply dynamic delay directly to the DOM node
  if (delay) {
    // If the user passes a simple number like '2', treat it as 200ms for convenience, 
    // or just pass exact milliseconds like 300
    const delayMs = delay < 10 ? delay * 100 : delay; 
    node.style.transitionDelay = `${delayMs}ms`;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after first reveal for performance
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}