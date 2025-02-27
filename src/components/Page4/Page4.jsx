import "./Page4.css"
const Page4 = function(){
    return(
        <div className="manage-container">
            <h2>Who can mange Projects</h2>
            <p>Don't panic -- You can also customize these permissions in settings</p>

            <div className="manage-options">

                <div className="each-option">
                    <div>

                    </div>

                    <div>
                        <h5>Everyone</h5>
                        <p>All users can how to see it,but guests connot access the projects</p>
                    </div>

                </div>

                <div className="each-option">

                    <div></div>

                    <div>
                        <h5>Only Admin's</h5>
                        <p></p>
                    </div>

                </div>

                <div className="each-option">

                </div>

            </div>

        </div>
    )
}
export default Page4