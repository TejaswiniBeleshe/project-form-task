
import { useEffect, useState } from 'react';
import './App.css'
import FormSlide from './components/FormSlide/FormSlide.jsx'
import Home from './components/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoEllipseSharp } from 'react-icons/io5';


// console.log(data)
function App() {
   const [allData,setAllData] = useState({})
   const [state,setState] = useState(true)
  //  const [reload,setReload] = useState(true)
  // let [exist,setExist] = useState(res)
   
  

   useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('Data'))
    // console.log(data)
    if(data && data.projectName){
      setAllData(data)
      setState(true)
    }else{
      setAllData({})
      setState(false)
    }
   },[])

  return (
    <div className='App'>
    {state?<Home allData={allData} setAllData={setAllData} />:<FormSlide allData={allData} setAllData={setAllData} />}
    </div>
  )
}

export default App
