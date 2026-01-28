/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const SliderSection = () => {
  const [active, setActive] = useState(0);

  const slides = [
    { id: 1, image: "/solvey/homebanner1.png", link: "/" },
    { id: 2, image: "/solvey/homebanner2.png", link: "/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="position-relative overflow-hidden"
      style={{ height: "70vh", minHeight: "400px" }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`position-absolute top-0 start-0 w-100 h-100 
            ${index === active ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "opacity 0.8s ease-in-out" }}
        >
          <a href={slide.link} className="d-block w-100 h-100">
            <img
              src={slide.image}
              alt="slide"
              className="w-100 h-100 img-fluid object-fit-cover"
            />
          </a>
        </div>
      ))}

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2 z-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`rounded-circle border-0 ${i === active ? "bg-primary" : "bg-white opacity-75"}`}
            style={{ width: "15px", height: "15px" }}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
