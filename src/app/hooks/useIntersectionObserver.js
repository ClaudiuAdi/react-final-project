// could have used this instead https://github.com/thebuilder/react-intersection-observer

import { useEffect, useRef, useState } from "react";

// created a custom hook that enables me to have an animation for the first time when a component *is visible to the screen.
// * this is just a conicidence in terms of words used because there is also 'isVsibile' property entry of the observer, but i use 'isIntersecting'(there is a slight difference)
function useIntersectionObserver() {
  const ref = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasLoaded) {
        setIsIntersecting(true);
        setHasLoaded(true);
      }
    });
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, [hasLoaded]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
