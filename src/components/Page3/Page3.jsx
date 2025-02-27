
import { MdTableRows } from "react-icons/md";
import { HiViewColumns } from "react-icons/hi2";
import "./Page3.css";

const Page3 = function ({dataOfPage3,setDataOfPage3}) {
  return (
    <div className="view-container">
      <h2 className="view-title">Select a view</h2>
      <p className="view-subtitle">You can also customize this view in settings</p>
      
      <div className="view-options">
        <div className={`view-card ${dataOfPage3.selectedView === 'row'?"selected":""}`} onClick={(e)=>setDataOfPage3({...dataOfPage3,selectedView:"row"})}>
          <MdTableRows size={50} className="view-icon"/>
          <p className="view-label">List</p>
        </div>

        <div className={`view-card ${dataOfPage3.selectedView === 'column'?"selected":""}`} onClick={(e)=>setDataOfPage3({...dataOfPage3,selectedView:"column"})}>
          <HiViewColumns size={50} className="view-icon" />
          <p className="view-label">Board</p>
        </div>
      </div>
      {!dataOfPage3.selectedView?<p className="error-text">{dataOfPage3.errorOfSelectedView}</p>:""}

      
    </div>
  );
};

export default Page3;
