import React, { useEffect, useState } from "react"

const Home = ({allData,setAllData})=>{
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

    const handleClear = function(){
      localStorage.removeItem("Data")
       
       setAllData({})
      window.location.reload()
    }

    
    return(
      <div>
        <h5>ProjectName:{allData.projectName}</h5>
        <h5>Client:{allData.client?allData.client:allData.newClient}</h5>
        <h5>Date:{allData.sDate} to {allData.eDate}</h5>
    
        <h5>Hourly Rate: {allData.hourlyRate}</h5>
        <h5>Budget: {allData.budgetType}</h5>
        <h5>Reset every month : {allData.resetEveryMonth?"Yes":"No"}</h5>
        <h5>Send mail: when preject exceed {allData.budgetPercent} % of Budget</h5>
        <h5>Preferred view : {allData.selectedView}</h5>
        <h5>Access of Preject : {allData.projectAccess}</h5>

        <button className="p2" onClick={handleClear}>Clear Data</button>
      </div>
    )
}
export default Home