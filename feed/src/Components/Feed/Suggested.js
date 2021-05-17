import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import userImg from "../../assets/images/userImage.png";
import { Link } from "react-router-dom";

function Suggested() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      src: userImg,
      userName: "Metaqs Avagyan",
      others: "2+",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: userImg,
      userName: "Jemma Mirozoyan",
      others: "3+",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: userImg,
      userName: "Meri Movsesyan",
      others: "5+",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.altText}>
        <div className="suggested__user">
          <img
            className="suggested__userImg"
            src={item.src}
            alt={item.altText}
          />
          <Link className="link" to="/username">
            <h2 className="suggested__userName">{item.userName}</h2>
          </Link>
          <h2 className="suggested__others">
            Friends with {item.others} others
          </h2>
          <button className="suggested__button">Follow</button>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="suggested">
      <h2 className="suggested__title">Suggested for You</h2>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Suggested;
