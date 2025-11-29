"use client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
  const slides = [
    { id: 1, url: "/image/first.webp" },
    { id: 2, url: "/image/second.webp" },
    { id: 3, url: "/image/third.webp" },
    { id: 4, url: "/image/fourth.webp" },
    { id: 5, url: "/image/fifth.webp" },
  ];

  // -----------------------------
  // Responsive visible slides
  // -----------------------------
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);        // Mobile
      else if (window.innerWidth < 1024) setVisible(2);  // Tablet
      else setVisible(3);                               // Desktop
    };

    handleResize(); // Run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = slides.length - visible;
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((c) => (c === 0 ? maxIndex : c - 1));
  const nextSlide = () => setCurrent((c) => (c === maxIndex ? 0 : c + 1));

  return (
    <div className="relative mx-6 overflow-hidden py-12 ">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-out gap-5"
        style={{
          transform: `translateX(-${current * (106/ visible)}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-54 shrink-0 shadow-md rounded overflow-hidden group "
            style={{ width: `${100 / visible}%` }}
          >
            <Image
              src={slide.url}
              alt="slide"
              fill
              className="object-cover group-hover:scale-120 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaAngleLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
}
