import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`}
        />
      </a>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Cert;
