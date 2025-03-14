import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import "./FormSlide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Home from "../Home/Home";



function FormSlide({allData,setAllData}) {
  const [dataOfPage1,setDataOfPage1] = useState({projectName:" ",client:"",sDate:"",eDate:"",notes:"",newClient:""});
  const [errorOfPage1,setErrorOfPage1] = useState({nameErr:"",clientErr:"",dateErr:"",})
  const [dataOfPage2,setDataOfPage2] = useState({hourlyRate:"",budgetType:"",resetEveryMonth:false,sendMail:false,budgetPercent:""})
  const [errorOfPage2,setErrorOfPage2] = useState({hourlyRateErr:"",budgetTypeErr:"",budgetPercentErr:""})
  const [dataOfPage3,setDataOfPage3] = useState({selectedView:"",errorOfSelectedView:""});
  const [dataOfPage4,setDataOfPage4] = useState({projectAccess:"",errorOfProjectAccess:""})
 
  const [currentpage,setCurrentPage] = useState(0)
  let sliderRef = useRef(null);

  const validateDataOfPage1 = (data)=>{
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

  const validateDataOfPage2 = (data)=>{
    const {hourlyRate,budgetType,resetEveryMonth,budgetPercent,sendMail} = data
    //  hourlyRateErr:"",budgetTypeErr:"",budgetPercentErr:""}
    let hourlyRateErr = ''
    if(!hourlyRate.trim()){
      hourlyRateErr = 'please add charge per hour'
    }

    let budgetTypeErr = ''
    if(!budgetType){
      budgetTypeErr = 'select how you calculate budget'
    }

    let budgetPercentErr = '';
    
    if(sendMail){
      if(!Number(budgetPercent)){
        budgetPercentErr = 'add appropriate burget percent to track'
      }
    }


    setErrorOfPage2({hourlyRateErr,budgetPercentErr,budgetTypeErr})
    return {hourlyRateErr,budgetPercentErr,budgetTypeErr}

  }



  const next = () => {

    if(currentpage === 0){
      let errors = validateDataOfPage1(dataOfPage1)
      if(errors.nameErr || errors.clientErr || errors.dateErr){
        return
     }
    }

    if(currentpage == 1){
      let errors = validateDataOfPage2(dataOfPage2);
      if(errors.hourlyRateErr || errors.budgetTypeErr || errors.budgetPercentErr){
        return
      }
    }

    if(currentpage == 2){
      if(!dataOfPage3.selectedView){
        setDataOfPage3({...dataOfPage3,errorOfSelectedView:"Please select a view"})
        return
        
      }
      // return
    }

    if(currentpage == 3){
      if(!dataOfPage4.projectAccess){
        setDataOfPage4({dataOfPage4,errorOfProjectAccess:"Please selected who all can access"})
        return
      }
    }
    let all_data = {...dataOfPage1, ...dataOfPage2, ...dataOfPage3, ...dataOfPage4}
    setAllData(all_data)
    localStorage.setItem("Data",JSON.stringify(all_data))
    
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
          <Page2 dataOfPage2={dataOfPage2} setDataOfPage2={setDataOfPage2} errorOfPage2={errorOfPage2} setErrorOfPage2={setErrorOfPage2}/>
        </div>
        <div key={3}>
          <Page3 dataOfPage3={dataOfPage3} setDataOfPage3={setDataOfPage3}/>
        </div>
        <div key={4}>
          <Page4 dataOfPage4={dataOfPage4} setDataOfPage4={setDataOfPage4}/>
        </div>
        <div key={5}>
          <Home allData={allData} setAllData={setAllData}/>
        </div>

      </Slider>
      <div className="slide-btns">
        {currentpage === 4?"":<button className="button" onClick={previous}>
          Previous
        </button>}
        {currentpage === 4?"":<button className="button" onClick={next}>
          {currentpage === 3?"Create":"Next"}
        </button>}
      </div>
    </div>
  );
}

export default FormSlide;
