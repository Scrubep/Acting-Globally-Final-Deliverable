import React from "react";
import "./VisionCard.css";
 
const VisionCard = ({ headtext = 'text', subtext = 'text', icon = '/images/red-panda.jpg' }) => {
  return (
    <div className="vc-card">
      {/* Decorative wave layers */}
      <div className="vc-wave vc-wave--back" aria-hidden="true" />
      <div className="vc-wave vc-wave--front" aria-hidden="true" />
 
      <div className="vc-content">
        {headtext && <h2 className="vc-headtext">{headtext}</h2>}
 
        {subtext && <p className="vc-subtext">{subtext}</p>}
 
        <div className="vc-divider-line" aria-hidden="true" />
 
        {icon && (
          <div className="vc-icon-wrapper">
            <div className="vc-icon-circle">
                <img src={icon}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default VisionCard;