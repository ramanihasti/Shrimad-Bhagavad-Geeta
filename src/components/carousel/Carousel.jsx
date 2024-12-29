import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

function Carousel(props) {
  return (
    <div>
      <Slider {...settings}>
        {props.sliderData.map((value) => {
          return <Slide key={value.id} img={value.img} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
