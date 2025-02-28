import "./Page4.css"
import { SlPeople } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
const Page4 = function({dataOfPage4,setDataOfPage4}){
    return(
        <div className="manage-container">
            <h2>Who can manage projects</h2>
            <p>Don't panic -- You can also customize these permissions in settings</p>

            <div className="manage-options">

                <div className={`each-option ${dataOfPage4.projectAccess === 'everyone'?"selected":"" }`} onClick={()=>setDataOfPage4({...dataOfPage4,projectAccess:"everyone"})}>
                       <div className="opt-img">
                    <FaPeopleGroup size={50}/>

                    </div>

                    <div className="opt-discription" >
                        <h5>Everyone</h5>
                        <p>All users can now to see it, but guests cannot access the projects.</p>
                    </div>

                </div>

                <div className={`each-option ${dataOfPage4.projectAccess === 'admin'?"selected":"" }`} onClick={()=>setDataOfPage4({...dataOfPage4,projectAccess:"admin"})}>

                    <div className="opt-img">
                    <IoPersonCircleOutline size={50}/>
                    </div>

                    <div className="opt-discription">
                        <h5>Only Admin's</h5>
                        <p>Only admins can manage everything.</p>
                    </div>

                </div>

                <div className={`each-option ${dataOfPage4.projectAccess === 'specific people'?"selected":"" }`} onClick={()=>setDataOfPage4({...dataOfPage4,projectAccess:"specific people"})}>
                <div className="opt-img">
                    <SlPeople size={50}/>

                    </div>

                    <div className="opt-discription">
                        <h5>Only to Specific people</h5>
                        <p>Only some specific People can able to see it.</p>
                    </div>

                </div>

            </div>
            {!dataOfPage4.projectAccess?<p className="error-text">{dataOfPage4.errorOfProjectAccess}</p>:""}

        </div>
    )
}
export default Page4