import { MutableRefObject } from "react";

export type HeroCardsType = [
  {
    e1: HTMLDivElement;
    e2: HTMLDivElement;
    e3: HTMLDivElement;
    e4: HTMLDivElement;
    e5: HTMLDivElement;
  },
  {
    c1: HTMLDivElement;
    c2: HTMLDivElement;
    c3: HTMLDivElement;
    c4: HTMLDivElement;
    c5: HTMLDivElement;
  },
  {
    r1: HTMLHeadingElement;
    r2: HTMLHeadingElement;
    r3: HTMLHeadingElement;
    r4: HTMLHeadingElement;
    r5: HTMLHeadingElement;
  }
];

export type HeroCardsRefType = MutableRefObject<HeroCardsType>;
