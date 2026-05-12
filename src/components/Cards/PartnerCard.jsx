import './PartnerCard.css';

const PartnerCard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default PartnerCard;