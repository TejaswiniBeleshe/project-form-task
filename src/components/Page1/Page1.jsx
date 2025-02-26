import "./Page1.css"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import {Formik,Form,ErrorMessage,Field} from "formik"
import * as Yup from "yup"
const today = new Date().toISOString().split("T")[0];

const Page1 = function({dataOfPage1,setDataOfPage1}){
    const {projectName,notes,dates,client} = dataOfPage1
    const [newClient,setNewClient] = useState('')
    useEffect(()=>{
         console.log(client)
    },[client])
    return(
        <div className="page1">
            <Formik initialValues={{ startDate: "", endDate: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
                >
               {({ setFieldValue, values }) => (
             <form>
                <label htmlFor="project-name">Project name</label>
                <input className="form-control" type="text" name="project-name" id="project-name" value={projectName} onChange={(e)=>setDataOfPage1({...dataOfPage1,projectName:e.target.value})} />

                <label htmlFor="project-name">Client</label>
                <Form.Select aria-label="Default select example" value={client} onChange={(e)=>setDataOfPage1({...dataOfPage1,client:e.target.value})}>
                    <option value="">Select Client</option>
                    <option value="client1">Client1</option>
                    <option value="client2">Client2</option>
                    <option value="client3">Client3</option>
                </Form.Select>
                <input type="text" name="newClient" id="newClient" value={newClient} onChange={(e)=>setNewClient(e.target.value)} />
             </form>
              )}
            </Formik>
        </div>
    )
}
export default Page1