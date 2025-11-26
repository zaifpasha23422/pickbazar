import { useState } from "react";
export function Slider() {
  const Slider = () => {
    const slides = [
      { id: 1, url: "" },
      { id: 2, url: "" },
      { id: 3, url: "" },
      { id: 4, url: "" },
      { id: 5, url: "" },
      { id: 6, url: "" },
      { id: 7, url: "" },
    ];
    const [current, setCurrent] = useState(0);
    const prevSlide = () => {
        setCurrent((c) =>(c === 0? slides.length - 1 : c - 1));
    };
    const nextSlide = () => {
        setCurrent((c) => (c === slides.length ? 0 : c + 1));
    };
  };
   return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.url}
            className="w-full "
          />
        ))}
      </div>

       <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
      ></button>
        <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
        ❯
      </button>
      </div>
      
}   
