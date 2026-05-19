import { useState } from "react";

import style from "./twinBedCards.module.css";
import {
  SquareArrowOutUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TwinBedCards = () => {
  const images = [
    { img: "images/gallery/twin_bed/twinbed1.webp" },
    { img: "images/gallery/twin_bed/twinbed2.webp" },
    { img: "images/gallery/twin_bed/twinbed3.webp" },
    { img: "images/gallery/twin_bed/twinbed4.webp" },
    { img: "images/gallery/twin_bed/twinbed5.webp" },
    { img: "images/gallery/twin_bed/twinbed6.webp" },
    { img: "images/gallery/twin_bed/twinbed7.webp" },
    { img: "images/gallery/twin_bed/twinbed8.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={style.container}>
        {images.map((img, index) => (
          <div className={style.imgcontainer} key={index}>
            <img src={img.img} alt="img" />
            <div className={style.overlay}>
              <SquareArrowOutUpRight
                className={style.bookbtn}
                color="white"
                onClick={() => openFullscreen(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && images[currentIndex] && (
        <div className={style.fullscreenOverlay}>
          <X
            className={style.closeBtn}
            color="white"
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
          />
          <ChevronLeft
            className={`${style.navBtn} ${style.leftNav}`}
            color="white"
            size={40}
            onClick={(e) => {
              e.stopPropagation(); // prevent bubbling
              prevImage();
            }}
          />
          <img
            src={images[currentIndex]}
            alt="fullscreen"
            className={style.fullscreenImg}
          />
          <ChevronRight
            className={`${style.navBtn} ${style.rightNav}`}
            color="white"
            size={40}
            onClick={(e) => {
              e.stopPropagation(); // prevent bubbling
              nextImage();
            }}
          />
        </div>
      )}
    </>
  );
};

export default TwinBedCards;
