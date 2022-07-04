import { useEffect, useState } from 'react';

type UseMediaQueryProps = {
  query: string;
};

const useMediaQuery = ({ query }: UseMediaQueryProps): { matches: boolean } => {
  const mediaQuery = window.matchMedia(query);

  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };
    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return { matches };
};

export default useMediaQuery;
