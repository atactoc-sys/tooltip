import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, initialPosition }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const changePosition = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="tooltip-container">
      <h2>This is a sample of tooltip position</h2>
      <div className="position-buttons">
        <button onClick={() => changePosition("top")}>Top</button>
        <button onClick={() => changePosition("bottom")}>Bottom</button>
        <button onClick={() => changePosition("right")}>Right</button>
        <button onClick={() => changePosition("left")}>Left</button>
      </div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover me for a tooltip
      </button>
      {isTooltipVisible && (
        <div className={`tooltip tooltip-${position}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
