import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import "./FormSlide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";

function PreviousNextMethods() {
  const [dataOfPage1,setDataOfPage1] = useState({projectName:"",client:"",dates:"",notes:""})
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <Page1 dataOfPage1={dataOfPage1} setDataOfPage1={setDataOfPage1}/>
        </div>
        <div key={2}>
          <Page2/>
        </div>
        <div key={3}>
          <Page3/>
        </div>
        <div key={4}>
          <Page4/>
        </div>
        <div key={5}>
          <h3>5</h3>
        </div>
        <div key={6}>
          <h3>6</h3>
        </div>
      </Slider>
      <div className="slide-btns">
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
