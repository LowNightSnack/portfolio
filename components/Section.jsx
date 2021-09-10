const Section = ({ id, title, className, children }) => {
  return (
    <div className="mb-3">
      <h4 id={id} className="text-xl mb-3 text-center md:text-left">
        {title}
      </h4>
      <div className={className ? className : "flex flex-col justify-start"}>
        {children}
      </div>
    </div>
  );
};

export default Section;
