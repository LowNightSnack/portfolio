import Image from "next/image";

const Project = ({ title, image, children }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between mb-7">
        <div className="max-w-lg md:mr-7">
          <h4 className="text-lg">{title}</h4>
          <p>{children}</p>
        </div>
        <div className="max-w-lg rounded-md hover:scale-[1.03] transition-transform">
          <Image width="1600" height="900" src={image} alt="Project Image" />
        </div>
      </div>
    </>
  );
};

export default Project;
