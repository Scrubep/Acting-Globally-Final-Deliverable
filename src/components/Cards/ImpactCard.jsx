import React from "react";
import "./ImpactCard.css";

const ImpactCard = ({ country, title, description, imageUrl }) => {
  return (
    <div className="impact-card">
      <img src={imageUrl} alt={title} className="impact-card__image" />
      <div className="impact-card__body">
        <span className="impact-card__country">{country}</span>
        <h2 className="impact-card__title">{title}</h2>
        <p className="impact-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ImpactCard;