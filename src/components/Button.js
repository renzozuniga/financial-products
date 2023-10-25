import React, { useEffect, useState } from "react";
import "./components.css";

const Button = (props) => {
  const { label } = props;
  const [labelSelected, setLabelSelected] = useState("");
  const [showText, setShowText] = useState(true);
  const typeSelected = props.type || "button";
  const actionSelected = props.onClick;
  const classSelected = `ka-button ${props.mode} alignment`;
  const labelsSelected = props.labels || [];
  const disabledSelected = props.disabled ? true : false;

  useEffect(() => {
    setLabelSelected(label);
  }, []);

  const handleClick = (e) => {
    actionSelected(e);
    if (labelsSelected && labelsSelected.length > 0) {
      setShowText(!showText);
      if (showText) setLabelSelected(labelsSelected[1]);
      else setLabelSelected(labelsSelected[0]);
    }
  };

  if (actionSelected)
    return (
      <button
        type={typeSelected}
        className={classSelected}
        onClick={handleClick}
        disabled={disabledSelected}
      >
        <p className="ka-button-label">{labelSelected}</p>
      </button>
    );
  else
    return (
      <>
        <button
          type={typeSelected}
          className={classSelected}
          disabled={disabledSelected}
        >
          <p className="ka-button-label">{labelSelected}</p>
        </button>
      </>
    );
};

export default Button;
