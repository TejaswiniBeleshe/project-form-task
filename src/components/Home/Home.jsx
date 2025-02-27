import React, { useEffect, useState } from "react"

const Home = ({dataOfPage1,dataOfPage2,dataOfPage3,dataOfPage4})=>{
    // const [allData,setAllData] = useState({})
    // useEffect(()=>{
    //     let res = {...dataOfPage1, ...dataOfPage2, ...dataOfPage3, ...dataOfPage4}
    //     localStorage.setItem("Data",JSON.stringify(res))
    // },[dataOfPage1,dataOfPage2,dataOfPage3,dataOfPage4])
    // useEffect(()=>{
    //     // let data = {...dataOfPage1,dataOfPage2,dataOfPage3,dataOfPage4}
    //     let data = JSON.parse(localStorage.getItem('Data'))
    //     console.log(data)
    //     if(data.ProjectName){
    //         setAllData(data)
    //     //    localStorage.setItem("Data",JSON.stringify(data))
    //     }else{
    //         localStorage.setItem("Data",JSON.stringify({}))
    //     }
    // },[])

    

    
    return(
      <div>
        <h5>ProjectName:{dataOfPage1.projectName}</h5>
        <h5>Client:{dataOfPage1.client?dataOfPage1.client:dataOfPage1.newClient}</h5>
        <h5>Date:{dataOfPage1.sDate} to {dataOfPage1.eDate}</h5>
    
        <h5>Hourly Rate: {dataOfPage2.hourlyRate}</h5>
        <h5>Budget: {dataOfPage2.budgetType}</h5>
        <h5>Reset every month : {dataOfPage2.resetEveryMonth?"Yes":"No"}</h5>
        <h5>Send mail: when preject exceed {dataOfPage2.budgetPercent} % of Budget</h5>
        <h5>Preferred view : {dataOfPage3.selectedView}</h5>
        <h5>Access of Preject : {dataOfPage4.projectAccess}</h5>
      </div>
    )
}
export default Home