import React, { useState, ReactNode } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
const CARDS = 10;
const MAX_VISIBILITY = 3;
const cards = [
  {
    title: "Card ",
    content: "Card Content",
  },
  {
    title: "Card ",
    content: "Card Content",
  },
  {
    title: "Card ",
    content: "Card Content",
  },
  {
    title: "Card ",
    content: "Card Content",
  },
  {
    title: "Card ",
    content: "Card Content",
  },
  {
    title: "Card ",
    content: "Card Content",
  },
];
export default function Carousel() {
  const middle = Math.round(cards.length / 2);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [active, setActive] = useState(middle);
  const count = cards.length;
  console.log(count);

  const checkNextRight = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex = active === cards.length - 1 ? 0 : active + 1;
    setActive(nextIndex);
  };
  const checkNextLeft = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex = active === cards.length - 1 ? 0 : active - 1;
    setActive(nextIndex);
  };

  return (
    <div className="carousel relative w-96 h-96 perspective-500 preserve-3d ">
      {active > 0 && (
        // setActive((i) => i - 1)
        <button
          className="nav left text-black text-7xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer -translate-y-1/2 -translate-x-[205%]"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {cards.map((card, i) => {
        return (
          <div
            key={i}
            className={`card-container 
            rotate-y-[calc(${""}*20deg)]
            transition-all duration-300 ease-out 
            absolute w-full h-full`}
            style={
              {
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                pointerEvents: active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                display:
                  Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              } as React.CSSProperties
            }
          >
            <div
              className={`card  w-full h-full p-8 rounded-2xl text-[#9ca3af] 
              text-justify transition-all duration-300 ease-out 
              bg-[hsl(280deg,40%,calc(100%-var(--abs-offset)*20%))]`}
            
            >
              <h2 className="text-center text-4xl font-bold m-[0_0_0.7em] text-[#1f2937]">
                {card.title + " " + (i + 1)}
              </h2>

              <p className="transition-all duration-300 ease-out">
                {card.content + "->" + (active - i)}
              </p>
            </div>
          </div>
        );
      })}

      {active < count - 1 && (
        <button
          className=" text-black text-7xl  absolute flex items-center justify-center top-1/2 z-10 cursor-pointer right-0 translate-x-[205%] -translate-y-1/2"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
}
