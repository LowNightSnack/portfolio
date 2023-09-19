import Visit from "../components/icons/Visit";

const Experience = ({
  title,
  company,
  link,
  desc,
  rating,
}: {
  title: string;
  company: string;
  link: string;
  desc: string;
  rating: string | number;
}) => (
  <div className="isolate relative max-w-[600px] lg:col-start-2">
    <div className="reversePullUp bg-cl4 text-cl3 w-full p-8 flex flex-col gap-5">
      <h3 className="text-2xl md:text-4xl flex justify-between">{title}</h3>
      <h4 className="text-lg md:text-2xl flex justify-between">
        {company}
        {link ? (
          <a
            className="p-1 w-fit h-fit hover:text-cl2 hover:rotate-[720deg] duration-1000 transition-transform"
            href={link}
            target="_blank"
          >
            <Visit />
          </a>
        ) : (
          <></>
        )}
      </h4>
      <p className="text-sm md:text-lg">{desc}</p>
      <p className="flex gap-2">
        <span className="text-lg md:text-xl bold">How fun was it:</span>
        <span className="text-2xl md:text-3xl">{rating}</span>
        <span className="text-lg md:text-xl">/10</span>
      </p>
    </div>
    <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-cl1 transition-transform" />
  </div>
);

export default Experience;