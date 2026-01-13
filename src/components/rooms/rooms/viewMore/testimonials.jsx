import React, { useEffect, useRef, useState } from 'react'
import style from "./testimonials.module.css"
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Testimonials = () => {
     const testimonialsData = [
    {
      id: 1,
      name: "Robert",
      location: "kathmandu",
      image: "/images/rooms/viewMore/testimonials/aashma.webp",
      review:
        "“Clean room, warm shower, and helpful staff. Breakfast was good too.”",
    },
    {
      id: 2,
      name: "Emily",
      location: "Pokhara",
      image: "/images/rooms/viewMore/testimonials/bitisha.webp",
      review:
        "“Beautiful view from the room, very comfortable beds, and friendly service.”",
    },
    {
      id: 3,
      name: "Michael",
      location: "Lalitpur",
      image: "/images/rooms/viewMore/testimonials/sakchyam.webp",
      review:
        "“Great location, spacious rooms, and excellent amenities. Highly recommend!”",
    },
    {
      id: 4,
      name: "Robert",
      location: "kathmandu",
      image: "/images/rooms/viewMore/testimonials/aashma.webp",
      review:
        "“Clean room, warm shower, and helpful staff. Breakfast was good too.”",
    },
    {
      id: 5,
      name: "Emily",
      location: "Pokhara",
      image: "/images/rooms/viewMore/testimonials/bitisha.webp",
      review:
        "“Beautiful view from the room, very comfortable beds, and friendly service.”",
    },
    {
      id: 6,
      name: "Michael",
      location: "Lalitpur",
      image: "/images/rooms/viewMore/testimonials/sakchyam.webp",
      review:
        "“Great location, spacious rooms, and excellent amenities. Highly recommend!”",
    },
  ];
 
     const sliderRef = useRef(null);
    const cardWidth = 350; // must match CSS width
    const gap = 20;
    const visibleCards = 3;
    
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = testimonialsData.length - visibleCards;
    
    
      // arrow click handler
      const slideRight = () => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    };
    
    const slideLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
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

    {/* Left Arrow */}
    {currentIndex > 0 && (
      <button className={style.arrowLeft} onClick={slideLeft}>
        <ChevronLeft  size={40} />
      </button>
    )}

    <div className={style.viewport}>
      <div className={style.wrapper} ref={sliderRef}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={style.testimonialsCard}>
            <div className={style.all_content_wrapper}>
              <div className={style.image_content_wrapper}>
                <img className={style.testimonials_img} src={testimonial.image} alt="profile" />
                <div className={style.testimonial_heading_place_wrapper}>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.location}</p>
                </div>
              </div>

              <div className={style.testimonial_content_btn_wrapper}>
                <p>{testimonial.review}</p>
                <button className={style.btn}>see the good and the bad</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Arrow */}
    {currentIndex < maxIndex && (
      <button className={style.arrowRight} onClick={slideRight}>
        <ChevronRight size={40} />
      </button>
    )}

  </div>
</div>
  )
}

export default Testimonials
