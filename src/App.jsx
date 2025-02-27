
import { useEffect, useState } from 'react';
import './App.css'
import FormSlide from './components/FormSlide/FormSlide.jsx'
import Home from './components/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// let data = JSON.parse(localStorage.getItem('Data'))
// let res = data.projectName?true:false
// console.log(data)
function App() {
  // let [exist,setExist] = useState(res)
   
  // console.log(res)

  return (
    <div className='App'>
      <FormSlide/>
    </div>
  )
}

export default App
