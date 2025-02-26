import "./Page1.css"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

import * as Yup from "yup"
const today = new Date().toISOString().split("T")[0];
console.log(today)

const Page1 = function({dataOfPage1,setDataOfPage1}){
    const {projectName,notes,sDate,eDate,client} = dataOfPage1
    const [newClient,setNewClient] = useState('')
    let endDate = sDate ?sDate:today
    useEffect(()=>{
         console.log(client)
    },[client])
    return(
        <div className="page1">
             <h1>Create Project</h1>
             <form>
                <label htmlFor="project-name">Project name</label>
                <input placeholder="Enter project name here" className="form-control" type="text" name="project-name" id="project-name" value={projectName} onChange={(e)=>setDataOfPage1({...dataOfPage1,projectName:e.target.value})} />
                <label htmlFor="project-name">Client</label>
                <Form.Select aria-label="Default select example" value={client} onChange={(e)=>setDataOfPage1({...dataOfPage1,client:e.target.value})}>
                    <option value="">Select a client</option>
                    <option value="client1">Client1</option>
                    <option value="client2">Client2</option>
                    <option value="client3">Client3</option>
                </Form.Select>
                <input type="text" name="newClient" id="newClient" value={newClient} onChange={(e)=>setNewClient(e.target.value)} />
                 <br />
                <label>Date</label>
                <input type="date" min={today} value={sDate} onChange={(e)=>setDataOfPage1({...dataOfPage1,sDate:e.target.value})} />

                <input type="date" disabled={!sDate} min={endDate} value={eDate} onChange={(e)=>setDataOfPage1({...dataOfPage1,eDate:e.target.value})}/>
                  
                <label htmlFor="note">Notes</label>
                <textarea  name="note" id="note" role={16} cols={30} value={notes} onChange={(e)=>setDataOfPage1({...dataOfPage1,notes:e.target.value})} placeholder="Optional"/>
             </form>
        </div>
    )
}
export default Page1