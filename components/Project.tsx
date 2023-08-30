import Visit from "../components/icons/Visit";

const Project = ({
  title,
  link,
  desc,
  rating,
}: {
  title: string;
  link: string;
  desc: string;
  rating: number;
}) => (
  <div className="isolate z-0 relative max-w-[600px] col-start-2 p-8 flex flex-col gap-5">
    <h3 className="text-4xl flex justify-between">
      {title}
      <a
        className="p-1 w-fit h-fit hover:text-cl5 hover:rotate-[720deg] duration-1000 transition-transform"
        href={link}
        target="_blank"
      >
        <Visit />
      </a>
    </h3>
    <p className="text-lg ">{desc}</p>
    <p className="flex gap-2">
      <span className="text-xl bold">Experience Rating:</span>
      <span className="text-3xl">{rating}</span>
      <span className="text-xl">/10</span>
    </p>
    <div className="absolute -z-10 top-0 left-0 w-full h-full bg-cl2" />
    <div className="absolute -z-20 top-4 -left-4 w-full h-full bg-cl1" />
  </div>
);

export default Project;
