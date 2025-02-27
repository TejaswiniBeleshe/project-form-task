
import { MdTableRows } from "react-icons/md";
import { HiViewColumns } from "react-icons/hi2";
import "./Page3.css";

const Page3 = function () {
  return (
    <div className="view-container">
      <h2 className="view-title">Select a view</h2>
      <p className="view-subtitle">You can also customize this view in settings</p>
      
      <div className="view-options">
        <div className="view-card">
          <MdTableRows size={50} className="view-icon"/>
          <p className="view-label">List</p>
        </div>

        <div className="view-card">
          <HiViewColumns size={50} className="view-icon" />
          <p className="view-label">Board</p>
        </div>
      </div>

      
    </div>
  );
};

export default Page3;
