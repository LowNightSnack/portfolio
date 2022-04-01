import { useEffect, useRef, useState } from "react";

const Section = ({ id, className, callback, children }) => {
  const [threshold, setThreshold] = useState(0.85);
  const sectionRef = useRef();

  useEffect(() => {
    if (callback) {
      const observer = new IntersectionObserver(callback, {
        threshold: threshold,
      });
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }
  }, [callback, sectionRef, threshold]);

  return (
    <div ref={sectionRef} id={id} className="mb-3">
      <h4 className="text-xl mb-3 text-center md:text-left">{id}</h4>
      <div className={className ? className : "flex flex-col justify-start"}>
        {children}
      </div>
    </div>
  );
};

export default Section;
