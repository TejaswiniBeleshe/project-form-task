import "./Page1.css"
const Page1 = function({dataOfPage1,setDataOfPage1}){
    const {projectName,notes,dates,client} = dataOfPage1
    return(
        <div className="page1">
             <form >
                <label htmlFor="project-name">Project name</label>
                <input className="form-control" type="text" name="project-name" id="project-name" value={projectName} onChange={(e)=>} />

                <label htmlFor="project-name">Client</label>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
             </form>
        </div>
    )
}
export default Page1