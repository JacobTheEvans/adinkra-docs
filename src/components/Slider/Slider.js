import React from "react";
import Slider from "react-slick";
import { Adinkra } from "react-adinkra";
import genRandomSymbols from "../../utils/randomSymbol.js";
import "./Slider.css";

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  arrows: false
};

class SliderCustom extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {genRandomSymbols(15).map((item, index) => (
            <div className="large-symbol" key={index + item}>
              <Adinkra name={item}/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SliderCustom;
