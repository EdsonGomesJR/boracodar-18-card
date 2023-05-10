import Image from "next/image";
import React from "react";

export default function Swiper() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index :number) => setSelectedIndex(index);
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 ">
            <button onClick={checkNext}>{"<"}</button>
          </div>
        </div>
        <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
          <section
            id="slider"
            className="w-[40vw] h-[30vh] preserve-3d perspective-1000 relative inline-flex items-center justify-center mb-5 left-[-10%] "
          >
            <input
              className="peer/s1 bg-slate-500"
              type="radio"
              name="slider"
              id="s1"
              readOnly
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input
              className="peer/s2"
              type="radio"
              name="slider"
              readOnly
              id="s2"
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              className="peer/s3"
              type="radio"
              name="slider"
              readOnly
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />

            <label
              htmlFor="s1"
              id="slide1"
              className="peer-checked/s2:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s2:-translate-z-[100px] peer-checked/s2:-translate-x-[50%]
              peer-checked/s3:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s1:shadow-[0_13px_25px_0_rgba(0,0,0,0.3),0_11px_7px_0_rgba(0,0,0,0.19)]
              peer-checked/s3:-translate-z-[100px] peer-checked/s3:translate-x-[50%]
              peer-checked/s1:-translate-x-[0px] 
              peer-checked/s1:-translate-y-[0px] 
              peer-checked/s1:-translate-z-[0px] 

              "
            >
              <img
                className="fea "
                src="https://picsum.photos/200/200"
                height="100%"
                width="100%"
              />
              <div>Slide 1</div>
            </label>
            <label
              htmlFor="s2"
              id="slide2"
              className="peer-checked/s3:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s3:-translate-z-[100px] peer-checked/s3:-translate-x-[50%]
              peer-checked/s1:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s2:shadow-[0_13px_25px_0_rgba(0,0,0,0.3),0_11px_7px_0_rgba(0,0,0,0.19)]
              peer-checked/s1:-translate-z-[100px] peer-checked/s1:translate-x-[50%]
              peer-checked/s2:-translate-x-[0px] 
              peer-checked/s2:-translate-y-[0px] 
              peer-checked/s2:-translate-z-[0px] 
              "
            >
              <img
                alt="Imagem 2"
                className="fea w-full"
                src="https://picsum.photos/400/400"
                width={400}
                height={400}
              />
              <div>Slide 2</div>
            </label>
            <label
              htmlFor="s3"
              id="slide3"
              className="peer-checked/s1:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s2:shadow-[0_6px_10px_0_rgba(0,0,0,0.3),0_2px_2px_0_rgba(0,0,0,0.2)]
              peer-checked/s1:-translate-z-[100px] peer-checked/s1:-translate-x-[50%]
              peer-checked/s2:-translate-z-[100px] peer-checked/s2:translate-x-[50%]
              peer-checked/s3:shadow-[0_13px_25px_0_rgba(0,0,0,0.3),0_11px_7px_0_rgba(0,0,0,0.19)]
              peer-checked/s3:-translate-x-[0px] 
              peer-checked/s3:-translate-y-[0px] 
              peer-checked/s3:-translate-z-[0px] "
            >
              <img
                className="fea"
                src="https://picsum.photos/300/300"
                height="100%"
                width="100%"
              />
              <div>Slide 3</div>
            </label>
          </section>
        </div>
        <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
            <button onClick={checkNext}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
