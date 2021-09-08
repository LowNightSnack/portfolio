import Head from "next/head";
import Project from "../components/Project";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mamoor J. Khan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col p-7 items-center w-full text-base">
        <div className="max-w-screen-xl">
          <div className="mb-7 p-5 bg-gray-800 text-white rounded-md">
            <h1 className="text-3xl md:text-5xl mb-3">Mamoor Jaan Khan</h1>
            <p className="text-lg">
              I am passionate about developing web applications with{" "}
              <a
                className="text-blue-500"
                href="https://nextjs.com"
                target="_blank"
              >
                NextJS
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500"
                href="https://tailwindcss.com"
                target="_blank"
              >
                TailwindCSS
              </a>
            </p>
          </div>
          <div className="mb-7 p-5 flex justify-between sticky md:hidden top-2 text-white bg-gray-500 shadow-2xl rounded-md z-10">
            <p>Hello</p>
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
          </div>
          <div className="flex">
            <Sidebar />
            <div className="w-full md:w-4/5 p-5 bg-gray-800 text-white rounded-md">
              <Section id="projects" title="Projects">
                <Project title="duh" image="/yo.jpg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean in nunc metus. Nam laoreet vitae elit malesuada
                  consequat. Pellentesque placerat ut quam sit amet accumsan.
                </Project>
              </Section>
              <Section id="education" title="Education">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean in nunc metus. Nam laoreet vitae elit malesuada
                  consequat. Pellentesque placerat ut quam sit amet accumsan.
                  Curabitur euismod elit lobortis, lacinia dolor vitae, blandit
                  magna. Mauris sapien odio, iaculis pellentesque feugiat eget,
                  rutrum at turpis. Duis malesuada sapien velit, vel maximus
                  metus semper nec. Aenean quis sapien justo. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Aenean in nunc metus.
                  Nam laoreet vitae elit malesuada consequat. Pellentesque
                  placerat ut quam sit amet accumsan. Curabitur euismod elit
                  lobortis, lacinia dolor vitae, blandit magna. Mauris sapien
                  odio, iaculis pellentesque feugiat eget, rutrum at turpis.
                  Duis malesuada sapien velit, vel maximus metus semper nec.
                  Aenean quis sapien justo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean in nunc metus. Nam laoreet
                  vitae elit malesuada consequat. Pellentesque placerat ut quam
                  sit amet accumsan. Curabitur euismod elit lobortis, lacinia
                  dolor vitae, blandit magna. Mauris sapien odio, iaculis
                  pellentesque feugiat eget, rutrum at turpis. Duis malesuada
                  sapien velit, vel maximus metus semper nec. Aenean quis sapien
                  justo. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean in nunc metus. Nam laoreet vitae elit malesuada
                  consequat. Pellentesque placerat ut quam sit amet accumsan.
                  Curabitur euismod elit lobortis, lacinia dolor vitae, blandit
                  magna. Mauris sapien odio, iaculis pellentesque feugiat eget,
                  rutrum at turpis. Duis malesuada sapien velit, vel maximus
                  metus semper nec. Aenean quis sapien justo. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Aenean in nunc metus.
                  Nam laoreet vitae elit malesuada consequat. Pellentesque
                  placerat ut quam sit amet accumsan. Curabitur euismod elit
                  lobortis, lacinia dolor vitae, blandit magna. Mauris sapien
                  odio, iaculis pellentesque feugiat eget, rutrum at turpis.
                  Duis malesuada sapien velit, vel maximus metus semper nec.
                  Aenean quis sapien justo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean in nunc metus. Nam laoreet
                  vitae elit malesuada consequat. Pellentesque placerat ut quam
                  sit amet accumsan. Curabitur euismod elit lobortis, lacinia
                  dolor vitae, blandit magna. Mauris sapien odio, iaculis
                  pellentesque feugiat eget, rutrum at turpis. Duis malesuada
                  sapien velit, vel maximus metus semper nec. Aenean quis sapien
                  justo.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}