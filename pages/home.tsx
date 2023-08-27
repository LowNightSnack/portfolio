import { useEffect, useRef } from "react";
import { HeroCardsType } from "../types/HeroCardType";
import HeroCard from "../components/HeroCard";

const heroCards = [
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Nerd",
    addClasses: {
      title: "font-aqrada text-2xl md:text-5xl",
      subtitle: "font-aqrada mt-3 md:mt-10 text-lg md:text-2xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Computer Science Enthusiast",
    addClasses: {
      title:
        "font-basement bg-cl2 md:bg-transparent w-fit text-2xl md:text-7xl",
      subtitle:
        "font-basement bg-cl2 md:bg-transparent w-fit mt-0 md:mt-3 text-lg md:text-3xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Software Engineer",
    addClasses: {
      title: "font-c059 bg-cl3 w-fit text-2xl md:text-7xl",
      subtitle: "font-c059 bg-cl3 w-fit mt-1 md:mt-3 text-lg md:text-3xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Gamer",
    addClasses: {
      title:
        "font-maghfirea bg-cl4 md:bg-transparent w-fit text-2xl md:text-8xl",
      subtitle:
        "font-maghfirea bg-cl4 md:bg-transparent w-fit mt-1 text-lg md:text-5xl",
    },
  },
  {
    title: "Mamoor Jaan Khan",
    subtitle: "Human",
    addClasses: {
      title:
        "font-minecraft bg-cl5 md:bg-transparent w-fit text-2xl md:text-7xl",
      subtitle:
        "font-minecraft bg-cl5 md:bg-transparent w-fit mt-0 md:mt-3 text-lg md:text-3xl",
    },
  },
];

const Home = () => {
  const scrollApi = useRef<HeroCardsType>([
    { e1: null, e2: null, e3: null, e4: null, e5: null },
    { c1: null, c2: null, c3: null, c4: null, c5: null },
    { r1: null, r2: null, r3: null, r4: null, r5: null },
  ]);

  const sameSpeed = useRef<{
    jojo1: HTMLDivElement;
    jojo2: HTMLDivElement;
    jojo3: HTMLDivElement;
    jojo4: HTMLDivElement;
    jojo5: HTMLDivElement;
  }>({ jojo1: null, jojo2: null, jojo3: null, jojo4: null, jojo5: null });
  const lock = useRef<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = window.scrollY;
      const slowFactor = 0.9;
      const translateString = `0 ${slowFactor * scrollVal}px`;

      for (let i = 1; i <= 5; i++) {
        scrollApi.current[1][`c${i}`].style.translate = translateString;
        // scrollApi.current[2][`r${i}`].style.translate = translateString;
        // sameSpeed.current[`jojo${i}`].style.translate = translateString;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="isolate text relative h-screen w-full text-cl3">
        {heroCards.map((card, i) => (
          <HeroCard
            key={`heroCard#${i}`}
            title={card.title}
            subtitle={card.subtitle}
            addClasses={card.addClasses}
            index={i}
            ref={scrollApi}
          />
        ))}
        <div
          className="fixed bottom-0 right-0 bg-cl1 w-[700px] h-[700px] rounded-tl-full"
          style={{ zIndex: `0` }}
        />
        <div
          className="fixed bottom-0 right-0 bg-cl2 w-[600px] h-[600px] rounded-tl-full"
          style={{ zIndex: `1` }}
        />
        <div
          className="fixed bottom-0 right-0 bg-cl3 w-[500px] h-[500px] rounded-tl-full"
          style={{ zIndex: `2` }}
        />
        <div
          className="fixed bottom-0 right-0 bg-cl4 w-[400px] h-[400px] rounded-tl-full"
          style={{ zIndex: `3` }}
        />
        <div
          className="fixed bottom-0 right-0 bg-cl5 w-[300px] h-[300px] rounded-tl-full"
          style={{ zIndex: `4` }}
        />
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
        <div className="text-cl1 text-cl3 row-start-1 row-start-2 row-start-3 row-start-4 row-start-5" />
      </div>
    </div>
  );
};

export default Home;
