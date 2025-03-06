import { useEffect } from "react";

type OnIntersectionCallback = (
  isIntersecting: boolean,
  target: Element,
  index?: number
) => void;

const useIntersectionObserver = (
  cardRef: React.RefObject<HTMLDivElement>,
  onIntersection: OnIntersectionCallback,
  index?: number
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        const target = entry.target;

        onIntersection(isIntersecting, target, index);
      });
    });

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [cardRef, onIntersection]);
};

export default useIntersectionObserver;
