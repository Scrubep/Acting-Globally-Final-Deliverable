import './PartnerCard.css';

const PartnerCard = ({ country, orgName, tagline, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card__column card__column--text">
        <div className="card-header">
          <h2 className="card-country">{country}</h2>
          <div className="card-meta">
            <span className="card-org">{orgName}</span>
            {tagline && (
              <>
                <span className="card-divider"> | </span>
                <span className="card-tagline">{tagline}</span>
              </>
            )}
          </div>
        </div>
        <hr className="card-header-divider" />
        <div className="card-text">{description}</div>
      </div>
      {imageUrl && (
        <div className="card__column card__column--media">
          <img src={imageUrl} alt={orgName} className="card-image" />
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
