import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import "./FormSlide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";



function FormSlide() {
  const [dataOfPage1,setDataOfPage1] = useState({projectName:" ",client:"",sDate:"",eDate:"",notes:"",newClient:""});
  const [errorOfPage1,setErrorOfPage1] = useState({nameErr:"",clientErr:"",dateErr:"",})
  const [dataOfPage2,setDataOfPage2] = useState({hourlyRate:"",budgetType:"",resetEveryMonth:false,sendMail:false,budgetPercent:""})
  const [currentpage,setCurrentPage] = useState(0)
  let sliderRef = useRef(null);

  const validateData = (data)=>{
    const {projectName,client,sDate,eDate,newClient} = data ;
    // console.log(projectName)
    let nameErr = '';
    if(!projectName.trim()){
      nameErr = "Please add project name"
    }

    let clientErr = '';
    if(!client && !newClient){
      clientErr = "client can't be empty please select client"
    }
    let dateErr = '';
    if(!sDate){
      dateErr = 'please select starting date of project'
    }
    if(sDate && !eDate){
      dateErr = 'Enter end date to proceed with'
    }
    setErrorOfPage1({nameErr,dateErr,clientErr})
    console.log(nameErr,dateErr,clientErr)
    return {nameErr,dateErr,clientErr}
  }

  const next = () => {

    // if(currentpage === 0){
    //   let errors = validateData(dataOfPage1)
    //   if(errors.nameErr || errors.clientErr || errors.dateErr){
    //     return
    //  }
    // }
    
    
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
    slidesToScroll: 1,
    afterChange:(index)=>setCurrentPage(index)
  };

  useEffect(()=>{
       console.log(currentpage)
  },[currentpage])
  return (
    <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <Page1 dataOfPage1={dataOfPage1} setDataOfPage1={setDataOfPage1} errorOfPage1={errorOfPage1} setErrorOfPage1={setErrorOfPage1}/>
        </div>
        <div key={2}>
          <Page2 dataOfPage2={dataOfPage2} setDataOfPage2={setDataOfPage2} />
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

export default FormSlide;
