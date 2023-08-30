import { Fragment } from "react";
import HeroCard from "../components/HeroCard";
import Project from "../components/Project";
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
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Mamoor Jaan Khan</title>
        <link rel="icon" href="/logo.png" />
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
          <h1 className="text-cl3 text-7xl font-minecraft">Projects</h1>
        </div>
        <div className="bg-cl3 w-full grid grid-cols-2 gap-y-20 py-20 px-20">
          {projects.map((i) => (
            <Project
              title={i.title}
              link={i.link}
              desc={i.desc}
              rating={i.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
