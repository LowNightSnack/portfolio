const HeroCard = ({
  title,
  subtitle,
  addClasses,
  index,
}: {
  title: string;
  subtitle: string;
  addClasses: { title: string; subtitle: string };
  index: number;
}) => (
  <div
    className={`relative bg-cl${index + 1} h-screen flex flex-col`}
    style={{ zIndex: `${index + 1}` }}
  >
    <div className="flex-1"></div>
    <div
      className={`pl-4 md:pl-8 py-10 sticky bottom-1/2 bg-cl pointer-events-auto row-start-${
        index + 1
      } text-cl${index === 2 ? "1" : "3"}`}
      style={{ zIndex: `${index + 1}` }}
    >
      <h1 className={addClasses.title}>{title}</h1>
      <h2 className={addClasses.subtitle}>{subtitle}</h2>
    </div>
  </div>
);

export default HeroCard;
