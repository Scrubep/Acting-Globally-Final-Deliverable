import './DonateCard2.css';

const DonateCard2 = ({ number, label, description, iconUrl }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__number">{number}</span>
        <img src={iconUrl} alt={label} className="stat-card__icon" />
      </div>
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__desc">{description}</p>
    </div>
  );
};

export default DonateCard2;