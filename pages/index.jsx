import { Fragment } from "react";
import HeroCard from "../components/HeroCard";
import Project from "../components/Project";
import Experience from "../components/Experience";
import ProfileLink from "../components/ProfileLink";

import Head from "next/head";

const heroCards = [
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Software Engineer",
    addClasses: {
      title: "font-aqrada text-2xl md:text-5xl",
      subtitle: "font-aqrada mt-3 md:mt-10 text-lg md:text-2xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Computer Science Enthusiast",
    addClasses: {
      title: "font-basement text-2xl md:text-7xl",
      subtitle: "font-basement mt-0 md:mt-3 text-lg md:text-3xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Nerd",
    addClasses: {
      title: "font-c059 bg-cl3 text-4xl md:text-7xl",
      subtitle: "font-c059 bg-cl3 mt-1 md:mt-3 text-2xl md:text-3xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Gamer",
    addClasses: {
      title: "font-maghfirea text-5xl md:text-8xl",
      subtitle: "font-maghfirea mt-1 text-3xl md:text-5xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Human",
    addClasses: {
      title: "font-minecraft text-4xl md:text-7xl",
      subtitle: "font-minecraft mt-0 md:mt-3 text-2xl md:text-3xl",
    },
  },
];

const projects = [
  {
    title: "Franchise Pass",
    link: "https://franchisepass.virtuallymade.io",
    desc: "A web application for upgrading Virtually Made NFTs built with React, TailwindCSS, TypeScript for front end and Docker, Postgres, Python, Flask, FastAPI for back end. Was fun",
    rating: 7.5,
  },
  {
    title: "League of Ninja Warriors",
    link: "https://www.leagueofninjawarriors.com",
    desc: "A landing page for a ninja warrior NFTs launch which didn't happen. Built with React, TailwindCSS, TypeScript. Was cool",
    rating: 8.5,
  },
  {
    title: "Dramz Auction House",
    link: "https://dramzauctionhouse.com",
    desc: "An auction house to sell assets like NFTs and FTs in bundles with different creators. Live bidding, chats and memberships as well. So cool. Sad that they shut it down. Built with React, TailwindCSS, TypeScript for front end and Python, Flask, Postgres, Docker for the back end. This was super fun",
    rating: 9,
  },
  {
    title: "Dramz Auction House on Polygon",
    link: "https://polygon.dramzauctionhouse.com",
    desc: "Auction house landing and presales page to expand on the Polygon network. Was cool",
    rating: 7.5,
  },
  {
    title: "Voteaire",
    link: "https://voteaire.io",
    desc: "Decentralize voting platform with different kinds of votings and vote weights. My main work was debugging mostly because I joined right when this project was going on. Built with React, Bulma for front end and Postgres, Flask, FastAPI, Docker, DBSync for Cardano for backend",
    rating: 7,
  },
  {
    title: "'Sup?",
    link: "https://lownightsnack-sup.vercel.app",
    desc: "Was meant to be a student information system but then I lost motivation. But I wanted to create everything used in the site from scratch. I built the entire scrollbar from the ground up because it was interfering with something. I don't remember what it was but yeah, that happended. Used NextJS, TailwindCSS, Redux for the front end. The back end was to be called `Boii` btw",
    rating: 9,
  },
  {
    title: "Archivio Mario Russo clone",
    link: "https://archiviomariorusso-clone.vercel.app/",
    desc: "Someone told me to clone the original so I did whatever I could in a day and told them to check it out. Honeslty, turned out pretty good for a day's work. There is an easter egg. When you click the text `Archivio Mario Russo` at the start, there is a payment gateway integration. Just to see if I can do it. Built with NextJS, TailwindCSS",
    rating: 8,
  },
  {
    title: "Github old UI clone",
    link: "http://github-profile-clone-bulma.vercel.app/",
    desc: "People will forget the old UI but I won't. Because I cloned it. Looked pretty good too. The new is also good. But they silently released it and now I just feel like they should have atleast given it a proper farewell. Built with NextJS, Bulma",
    rating: 8,
  },
  {
    title: "CPUS website",
    link: "https://www.cpus.co.in",
    desc: "The first buck I made was building this for my friend's parents' business. Was awesome. Built with NextJS, Bulma",
    rating: "∞",
  },
  {
    title: "Vulcanzy 2023",
    link: "https://vulcanzy-2023.vercel.app/",
    desc: "Website for our annual techno-cultural fest Vulcanzy 2023. Built with my friend Riyaz. Were super fun times. The event was super fun too. Built with NextJS, TailwindCSS.",
    rating: 9,
  },
  {
    title: "Misc",
    link: null,
    desc: "There are probably several more. I might have lost the links",
    rating: "idk",
  },
];

const experience = [
  {
    title: "Front End Developer",
    company: "MSVN Distributed Systems Ltd.",
    link: "https://msvn.ca",
    desc: "Created client applications with React on the Cardano blockchain. Also contribute to the back end of applications. Built several NFT launches, NFT upgrades and an auction house with live chat and memberships.",
    rating: 8.7,
  },
];

const links = [
  {
    index: "fa-solid fa-envelope",
    name: "me@mamoor.dev",
    url: "mailto:me@mamoor.dev",
  },
  {
    index: "fa-brands fa-linkedin",
    name: "Mamoor Jaan Khan",
    url: "https://www.linkedin.com/in/mamoor-jaan-khan/",
  },
  {
    index: "fa-brands fa-github",
    name: "LowNightSnack",
    url: "https://github.com/LowNightSnack",
  },
  {
    index: "fa-brands fa-instagram",
    name: "Mamoor",
    url: "https://www.instagram.com/lownightsnack/",
  },
  {
    index: "fa-brands fa-x-twitter",
    name: "MamoorJaanKhan",
    url: "https://twitter.com/MamoorJaanKhan",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Mamoor Jaan Khan</title>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      {heroCards.map((card, i) => (
        <Fragment key={`heroCard#${i}`}>
          <HeroCard
            title={card.title}
            subtitle={card.subtitle}
            addClasses={card.addClasses}
            index={i}
          />
          <div
            className={`fixed bottom-0 right-0 bg-cl${
              i + 1
            } rounded-tl-full h-${5 - i}00px w-${5 - i}00px md:h-700px md:h-${
              7 - i
            }00px  md:w-${7 - i}00px`}
            style={{
              zIndex: `${i}`,
            }}
          />
        </Fragment>
      ))}
      <h3
        className="fixed bottom-0 left-0 text-cl3 font-wavefont max-w-full overflow-hidden whitespace-nowrap"
        style={{ zIndex: 5 }}
      >
        we're no strangers to love you know the rules and so do i a full
        commitment's what i'm thinking of you wouldn't get this from any other
        guy i just wanna tell you how i'm feeling gotta make you understand
        never gonna give you up never gonna let you down never gonna run around
        and desert you never gonna make you cry never gonna say goodbye never
        gonna tell a lie and hurt you we've known each other for so long your
        heart's been aching, but you're too shy to say it inside, we both know
        what's been going on we know the game and we're gonna play it and if you
        ask me how i'm feeling don't tell me you're too blind to see never gonna
        give you up never gonna let you down never gonna run around and desert
        you never gonna make you cry never gonna say goodbye never gonna tell a
        lie and hurt you never gonna give you up never gonna let you down never
        gonna run around and desert you never gonna make you cry never gonna say
        goodbye never gonna tell a lie and hurt you (ooh, give you up) (ooh,
        give you up) never gonna give, never gonna give (give you up) never
        gonna give, never gonna give (give you up) we've known each other for so
        long your heart's been aching, but you're too shy to say it inside, we
        both know what's been going on we know the game and we're gonna play it
        i just wanna tell you how i'm feeling gotta make you understand never
        gonna give you up never gonna let you down never gonna run around and
        desert you never gonna make you cry never gonna say goodbye never gonna
        tell a lie and hurt you never gonna give you up never gonna let you down
        never gonna run around and desert you never gonna make you cry never
        gonna say goodbye never gonna tell a lie and hurt you never gonna give
        you up never gonna let you down never gonna run around and desert you
        never gonna make you cry never gonna say goodbye never gonna tell a lie
        and hurt you
      </h3>
      <div className="relative z-10">
        <div className="sticky top-0 bg-cl1 w-full pl-4 md:pl-8 py-5">
          <h1
            className="text-cl3 text-3xl md:text-7xl font-minecraft"
            id="#experience"
          >
            Experience
          </h1>
        </div>
        <div className="bg-cl3 w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start gap-y-20 py-10 md:py-20 px-5 md:px-20">
          {experience.map((e, i) => (
            <Experience
              key={`experience#${i}`}
              title={e.title}
              company={e.company}
              link={e.link}
              desc={e.desc}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <div className="sticky top-0 bg-cl1 w-full pl-4 md:pl-8 py-5">
          <h1
            className="text-cl3 text-3xl md:text-7xl font-minecraft"
            id="#contact-me"
          >
            Contact Me
          </h1>
        </div>
        <div className="bg-cl3 w-full grid grid-cols-1 lg:grid-cols-2 justify-items-start gap-y-10 md:gap-y-20 py-10 md:py-20 px-5 md:px-20">
          {links.map((l, i) => (
            <ProfileLink
              key={`link#${i}`}
              index={l.index}
              name={l.name}
              url={l.url}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <div className="sticky top-0 bg-cl1 w-full pl-4 md:pl-8 py-5">
          <h1
            className="text-cl3 text-3xl md:text-7xl font-minecraft"
            id="#projects"
          >
            Projects
          </h1>
        </div>
        <div className="bg-cl3 w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start gap-y-20 py-10 md:py-20 px-5 md:px-20">
          {projects.map((p, i) => (
            <Project
              key={`project#${i}`}
              title={p.title}
              link={p.link}
              desc={p.desc}
              rating={p.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
