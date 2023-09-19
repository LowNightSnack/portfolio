import Visit from "../components/icons/Visit";

const Experience = ({
  title,
  company,
  link,
  joinDate,
  leaveDate,
  monthsWorked,
  desc,
  rating,
}: {
  title: string;
  company: string;
  link: string;
  joinDate: string;
  leaveDate: string | null;
  monthsWorked: number | null;
  desc: string;
  rating: string | number;
}) => (
  <div className="isolate relative max-w-[600px] h-fit">
    <div className="reversePullUp bg-cl2 text-cl1 w-full p-8 flex flex-col gap-5">
      <h3 className="text-2xl md:text-4xl flex justify-between">{title}</h3>
      <h4 className="text-lg md:text-2xl flex justify-between">
        {company}
        {link ? (
          <a
            className="p-1 w-fit h-fit hover:text-cl5 hover:rotate-[720deg] duration-1000 transition-transform"
            href={link}
            target="_blank"
          >
            <Visit />
          </a>
        ) : (
          <></>
        )}
      </h4>
      <div className="flex justify-between text-sm md:text-lg font-bold">
        <div className="flex gap-1">
          <p>{joinDate}</p>
          {leaveDate ? (
            <>
              {" "}
              - <p>{leaveDate}</p>
            </>
          ) : (
            <></>
          )}
        </div>
        {monthsWorked ? <p>{monthsWorked} months</p> : <></>}
      </div>
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
