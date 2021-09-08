const Section = ({ id, title, children }) => {
  return (
    <div className="mb-3">
      <h4 id={id} className="text-xl mb-3 text-center md:text-left">
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
};

export default Section;
