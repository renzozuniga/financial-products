import { useState } from "react";
import "./components.css";

const Alert = (props) => {
  const openSelected = props.isOpen ? "open" : "close";
  const [classSelected, setClassSelected] = useState(
    `ka-alert ${props.type} ${openSelected}`
  );
  const messageSelected = props.message || "Alert";

  const handleClose = () => {
    setClassSelected(`ka-alert ${props.type} close`);
  };

  return (
    <div className="alert-container">
      <input type="checkbox" className="alert-checkbox" autocomplete="off" />
      <div className={classSelected}>
        <button className="alert-close" onClick={handleClose}>
          X
        </button>
        <span className="alert-text">
          {messageSelected}
          <br className="clear" />
        </span>
      </div>
    </div>
  );
};

export default Alert;
