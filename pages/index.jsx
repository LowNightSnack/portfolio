import MetaTags from "../components/MetaTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTwitch,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Project from "../components/Project";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import Certifications from "../components/Certifications";
import { useCallback, useState } from "react";

const canonicalLink = "https://mamoorjaankhan.vercel.com";

const links = ["projects", "certificates", "skills", "education", "links"];

const certs = [
  {
    type: "Specialization",
    image: "/images/agce.jpg",
    w: 3301,
    h: 2550,
    link: "https://coursera.org/share/12f859974da7ccebf9d3256f1811cb60",
    title: "Architecting with Google Compute Engine",
    certs: [
      {
        type: "Certificate",
        image: "/images/gcfci.jpg",
        w: 3301,
        h: 2550,
        link: "https://coursera.org/share/588bd2ac335ccc83cddcb99b104a199e",
        title: "Google Cloud Fundamentals: Core Infrastructure",
      },
      {
        type: "Certificate",
        image: "/images/egcif.jpg",
        w: 3301,
        h: 2550,
        link: "https://coursera.org/share/302cd7bcaf894705a4cee92ade6d6757",
        title: "Essential Google Cloud Infrastructure: Foundation",
      },
      {
        type: "Certificate",
        image: "/images/egcics.jpg",
        w: 3301,
        h: 2550,
        link: "https://coursera.org/share/6a35802b991629014ade20a7f950c4e7",
        title: "Essential Google Cloud Infrastructure: Core Services",
      },
      {
        type: "Certificate",
        image: "/images/egcisa.jpg",
        w: 3301,
        h: 2550,
        link: "https://coursera.org/share/328cec38582f564b8ba9eb4a873f227d",
        title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
      },
      {
        type: "Certificate",
        image: "/images/rgcidp.jpg",
        w: 3301,
        h: 2550,
        link: "https://coursera.org/share/bcfeb385f06ea4641d8cdfd47012fb03",
        title: "Reliable Google Cloud Infrastructure: Design and Process",
      },
    ],
  },
];

const Home = () => {
  const [highlights, setHighlights] = useState([]);

  const callback = useCallback(
    (entries) => {
      const [element] = entries;
      if (element.isIntersecting)
        setHighlights((prevArr) => [...prevArr, element.target.id]);
      else
        setHighlights((prevArr) =>
          prevArr.filter((v) => v !== element.target.id)
        );
    },
    [setHighlights]
  );

  return (
    <>
      <MetaTags canonicalLink={canonicalLink} />
      <main className="flex flex-col p-5 md:p-7 md:pb-0 pb-0 items-center w-full text-base">
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
          <div className="flex flex-col md:flex-row">
            <Sidebar links={links} highlights={highlights} />
            <div className="mb-5 md:mb-7 w-full md:w-4/5 p-5 bg-gray-800 text-white rounded-md">
              <Section id="projects" callback={callback}>
                <Project title="duh" image="/images/yo.jpg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean in nunc metus. Nam laoreet vitae elit malesuada
                  consequat. Pellentesque placerat ut quam sit amet accumsan.
                </Project>
              </Section>
              <Section
                className="flex flex-col items-center"
                id="certificates"
                callback={callback}
              >
                <Certifications certs={certs} />
              </Section>
              <Section id="skills" callback={callback}>
                <p>Full Stack Development with NextJS, MongoDB, ExpressJS</p>
                <p>
                  Cloud Gymnastics with AWS and Google Consoles{" "}
                  <a href="https://www.qwiklabs.com/public_profiles/0957cd28-3c47-4af6-b9df-98ed3a00d0a7">
                    Profile
                  </a>
                </p>
              </Section>
              <Section id="education" callback={callback}></Section>
              <Section
                id="links"
                className="flex items-start flex-col"
                callback={callback}
              >
                <a className="flex mb-1" href="mailto:mamoorjaankhan@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  mamoorjaankhan@gmail.com
                </a>
                <a
                  className="flex mb-1"
                  href="https://linkedin.com/in/mamoor-jaan-khan/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="h-6 w-6 mr-2" icon={faLinkedin} />
                  Mamoor Jaan Khan
                </a>
                <a
                  className="flex mb-1"
                  href="https://www.qwiklabs.com/public_profiles/0957cd28-3c47-4af6-b9df-98ed3a00d0a7"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.346 18.205A6.464 6.464 0 0 0 12 5.72a6.462 6.462 0 0 0-2.346 12.485a.69.69 0 0 0 .961-.623v-5.4a1.385 1.385 0 1 1 2.77 0v5.4a.692.692 0 0 0 .961.623zm.809 5.558C20.252 22.378 24 17.718 24 12.182c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.536 3.748 10.196 8.845 11.581a.7.7 0 0 0 .049.013l.059.016l.001-.002a1.385 1.385 0 0 0 .635-2.695a9.231 9.231 0 1 1 4.824-.001a1.385 1.385 0 0 0 .635 2.695l.001.002l.059-.016l.049-.013z"
                      fill="currentColor"
                    />
                  </svg>
                  Mamoor Jaan Khan
                </a>
                <a
                  className="flex mb-1"
                  href="https://github.com/LowNightSnack/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="h-6 w-6 mr-2" icon={faGithub} />
                  LowNighSnack
                </a>
                <a
                  className="flex mb-1"
                  href="https://twitter.com/LowNightSnack"
                  target="_blank"
                >
                  <FontAwesomeIcon className="h-6 w-6 mr-2" icon={faTwitter} />
                  LowNightSnack
                </a>
                <a
                  className="flex mb-1"
                  href="https://twitch.tv/LowNightSnack"
                  target="_blank"
                >
                  <FontAwesomeIcon className="h-6 w-6 mr-2" icon={faTwitch} />
                  LowNightSnack
                </a>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
