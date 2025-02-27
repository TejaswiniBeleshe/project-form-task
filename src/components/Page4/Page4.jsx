import "./Page4.css"
import { SlPeople } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
const Page4 = function(){
    return(
        <div className="manage-container">
            <h2>Who can mange Projects</h2>
            <p>Don't panic -- You can also customize these permissions in settings</p>

            <div className="manage-options">

                <div className="each-option">
                       <div className="opt-img">
                    <FaPeopleGroup size={50}/>

                    </div>

                    <div className="opt-discription">
                        <h5>Everyone</h5>
                        <p>All users can how to see it,but guests connot access the projects</p>
                    </div>

                </div>

                <div className="each-option">

                    <div className="opt-img">
                    <IoPersonCircleOutline size={50}/>
                    </div>

                    <div className="opt-discription">
                        <h5>Only Admin's</h5>
                        <p>Only admins can manage everything</p>
                    </div>

                </div>

                <div className="each-option">
                <div className="opt-img">
                    <SlPeople size={50}/>

                    </div>

                    <div className="opt-discription">
                        <h5>Only to Specigic people</h5>
                        <p>Only some people can able to see it</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Page4