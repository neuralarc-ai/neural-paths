import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is defined (for server-side rendering)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    
    // Update the state with the current value
    const updateMatches = () => setMatches(mediaQuery.matches);
    
    // Set the initial value
    updateMatches();
    
    // Add listener for changes
    mediaQuery.addEventListener('change', updateMatches);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
}
