import { useRef } from "react";

const Sidebar = () => {
  const sidebar = useRef();
  const extendSidebar = () => {
    const classList = sidebar.current.classList;
    classList.toggle("hidden");
    classList.toggle("flex");
    classList.toggle("flex-col");
  };
  return (
    <div className="min-w-[20%] sticky top-2 z-10 pb-7 md:self-start">
      <div className="mb-7 p-5 scale-105 flex justify-between md:hidden text-white bg-gray-600 shadow-2xl rounded-md">
        <p>Hello</p>
        <button onClick={extendSidebar}>
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
        className="md:mr-7 p-5 scale-[1.03] md:scale-100 hidden md:flex md:flex-col bg-gray-600 shadow-2xl md:shadow-none text-lg text-white rounded-md"
        ref={sidebar}
      >
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#links">Links</a>
      </div>
    </div>
  );
};

export default Sidebar;
