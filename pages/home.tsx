import { Fragment } from "react";
import HeroCard from "../components/HeroCard";

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

const Home = () => {
  return (
    <div>
      <div className="isolate text relative h-screen w-full text-cl3">
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
              } rounded-tl-full h-${5 - i}00px w-${5 - i}00px md:h-${
                7 - i
              }00px  md:w-${7 - i}00px`}
              style={{
                zIndex: `${i}`,
              }}
            />
          </Fragment>
        ))}
        <h3
          className={`fixed bottom-0 left-0 text-cl3 font-wavefont max-w-full overflow-hidden whitespace-nowrap`}
          style={{ zIndex: 5 }}
        >
          we're no strangers to love you know the rules and so do i a full
          commitment's what i'm thinking of you wouldn't get this from any other
          guy i just wanna tell you how i'm feeling gotta make you understand
          never gonna give you up never gonna let you down never gonna run
          around and desert you never gonna make you cry never gonna say goodbye
          never gonna tell a lie and hurt you we've known each other for so long
          your heart's been aching, but you're too shy to say it inside, we both
          know what's been going on we know the game and we're gonna play it and
          if you ask me how i'm feeling don't tell me you're too blind to see
          never gonna give you up never gonna let you down never gonna run
          around and desert you never gonna make you cry never gonna say goodbye
          never gonna tell a lie and hurt you never gonna give you up never
          gonna let you down never gonna run around and desert you never gonna
          make you cry never gonna say goodbye never gonna tell a lie and hurt
          you (ooh, give you up) (ooh, give you up) never gonna give, never
          gonna give (give you up) never gonna give, never gonna give (give you
          up) we've known each other for so long your heart's been aching, but
          you're too shy to say it inside, we both know what's been going on we
          know the game and we're gonna play it i just wanna tell you how i'm
          feeling gotta make you understand never gonna give you up never gonna
          let you down never gonna run around and desert you never gonna make
          you cry never gonna say goodbye never gonna tell a lie and hurt you
          never gonna give you up never gonna let you down never gonna run
          around and desert you never gonna make you cry never gonna say goodbye
          never gonna tell a lie and hurt you never gonna give you up never
          gonna let you down never gonna run around and desert you never gonna
          make you cry never gonna say goodbye never gonna tell a lie and hurt
          you
        </h3>
        {/* load classes here */}
        <div
          className="text-cl1 text-cl3 row-start-1 row-start-2 row-start-3 row-start-4 row-start-5 w-700px w-600px w-500px w-400px w-300px w-200px w-100px h-700px h-600px h-500px h-400px h-300px h-200px h-100px"
          style={{ width: 0, height: 0 }}
        />
      </div>
    </div>
  );
};

export default Home;
