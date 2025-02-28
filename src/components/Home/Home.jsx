
const Home = ({allData,setAllData})=>{
   
    const handleClear = function(){
      localStorage.removeItem("Data")
       
       setAllData({})
      window.location.reload()
    }

    
    return(
      <div>
        {allData && allData.projectName ? <>
        <h2 className="text-center">Selected Data</h2>
        <h5>ProjectName:{allData.projectName}</h5>
        <h5>Client:{allData.client?allData.client:allData.newClient}</h5>
        <h5>Date:{allData.sDate} to {allData.eDate}</h5>
    
        <h5>Hourly Rate: {allData.hourlyRate}</h5>
        <h5>Budget: {allData.budgetType}</h5>
        <h5>Reset every month : {allData.resetEveryMonth?"Yes":"No"}</h5>
        <h5>Send mail: when preject exceed {allData.budgetPercent} % of Budget</h5>
        <h5>Preferred view : {allData.selectedView}</h5>
        <h5>Access of Preject : {allData.projectAccess}</h5>

        <button className="btn btn-danger" onClick={handleClear}>Clear Data</button>
        </>:<h4 className="text-center">Loading</h4>}
      </div>
    )
}
export default Home