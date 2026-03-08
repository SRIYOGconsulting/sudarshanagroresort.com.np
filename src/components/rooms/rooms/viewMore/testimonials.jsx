import React, { useEffect, useRef, useState } from "react";
import style from "./testimonials.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {

  const testimonialsData = [
    {
      id: 1,
      name: "Robert",
      location: "Kathmandu",
      image: "/images/rooms/viewMore/testimonials/aashma.webp",
      review:
        "Clean room, warm shower, and helpful staff. Breakfast was good too.",
    },
    {
      id: 2,
      name: "Emily",
      location: "Pokhara",
      image: "/images/rooms/viewMore/testimonials/bitisha.webp",
      review:
        "Beautiful view from the room, very comfortable beds, and friendly service.",
    },
    {
      id: 3,
      name: "Michael",
      location: "Lalitpur",
      image: "/images/rooms/viewMore/testimonials/sakchyam.webp",
      review:
        "Great location, spacious rooms, and excellent amenities. Highly recommend!",
    },
    {
      id: 4,
      name: "Robert",
      location: "Kathmandu",
      image: "/images/rooms/viewMore/testimonials/aashma.webp",
      review:
        "Clean room, warm shower, and helpful staff. Breakfast was good too.",
    },
    {
      id: 5,
      name: "Emily",
      location: "Pokhara",
      image: "/images/rooms/viewMore/testimonials/bitisha.webp",
      review:
        "Beautiful view from the room, very comfortable beds, and friendly service.",
    },
  ];

  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const cardWidth = 350;
  const gap = 20;

  // responsive visible cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 600) {
        setVisibleCards(1);
      } else if (window.innerWidth < 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = testimonialsData.length - visibleCards;

  const slideRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * (cardWidth + gap)
      }px)`;
    }
  }, [currentIndex]);

  return (
    <div className={style.testimonialContainer}>
      <h2>Testimonials</h2>

      <div className={style.sliderContainer}>

        {currentIndex > 0 && (
          <button className={style.arrowLeft} onClick={slideLeft}>
            <ChevronLeft size={35} />
          </button>
        )}

        <div className={style.viewport}>
          <div className={style.wrapper} ref={sliderRef}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className={style.testimonialsCard}>
                <div className={style.image_content_wrapper}>
                  <img
                    className={style.testimonials_img}
                    src={testimonial.image}
                    alt="profile"
                  />

                  <div className={style.testimonial_heading_place_wrapper}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                  </div>
                </div>

                <div className={style.testimonial_content_btn_wrapper}>
                  <p>{testimonial.review}</p>
                  <button className={style.btn}>
                    see the good and the bad
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button className={style.arrowRight} onClick={slideRight}>
            <ChevronRight size={35} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;