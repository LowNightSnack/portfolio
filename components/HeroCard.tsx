import { forwardRef } from "react";
import { HeroCardsRefType } from "../types/HeroCardType";

const HeroCard = forwardRef(
  (
    {
      title,
      subtitle,
      addClasses,
      index,
    }: {
      title: string;
      subtitle: string;
      addClasses: { title: string; subtitle: string };
      index: number;
    },
    ref: HeroCardsRefType
  ) => (
    <div className={`h-screen w-full`}>
      <div className="absolute top-0 left-0 w-full h-full grid grid-rows-5 grid-cols-1 items-center pointer-events-none">
        <div
          className={`pl-8 pointer-events-auto row-start-${index + 1} text-cl${
            index === 2 ? "1" : "3"
          }`}
          style={{ zIndex: `${index + 1}` }}
          ref={(e) => {
            ref.current[1][`c${index + 1}`] = e;
          }}
        >
          <h1 className={`${addClasses.title}`}>{title}</h1>
          <h2 className={`${addClasses.subtitle}`}>{subtitle}</h2>
        </div>
      </div>
      <div
        className={`relative w-full h-full bg-cl${index + 1}`}
        style={{ zIndex: `${index}` }}
      />
    </div>
  )
);

export default HeroCard;
