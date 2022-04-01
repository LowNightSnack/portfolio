import { useState, useEffect, useRef } from "react";

const Sidebar = ({ links, highlights }) => {
  const [scrollText, setScrollText] = useState("Hello");
  const [extendSidebar, setExtendSidebar] = useState(false);
  const sidebar = useRef();

  useEffect(() => {
    if (sidebar.current) {
      highlights.forEach((highlight) => {
        links.find((link) => link === highlight) && console.log(highlight);
      });
    }
  }, [sidebar, highlights]);

  return (
    <div className="min-w-[20%] sticky top-2 z-10 pb-7 md:self-start">
      <div className="mb-7 p-5 scale-105 flex justify-between md:hidden text-white bg-gray-600 shadow-2xl rounded-md">
        <p>{scrollText}</p>
        <button onClick={() => setExtendSidebar(!extendSidebar)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-col md:mr-7 scale-[1.03] md:scale-100 bg-gray-600 shadow-2xl md:shadow-none text-lg text-white rounded-md transition-all md:opacity-100 md:pointer-events-auto md:h-auto ${
          !extendSidebar
            ? "opacity-0 pointer-events-none h-0"
            : "opacity-100 pointer-events-auto"
        }`}
        ref={sidebar}
      >
        <div className="flex flex-col p-5">
          {links.map((link) => (
            <a key={link} href={"#" + link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
