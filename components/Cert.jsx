import Image from "next/image";

const Cert = ({ type, image, w, h, link, title }) => {
  return (
    <div className="flex flex-col m-1 text-center max-w-xs">
      <p className="underline text-lg mb-2">{type}</p>
      <a
        href={link}
        target="_blank"
        className="hover:scale-[1.03] transition-transform"
      >
        <Image
          className="rounded-xl"
          width={w}
          height={h}
          src={image}
          alt={title}
        />
      </a>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Cert;
