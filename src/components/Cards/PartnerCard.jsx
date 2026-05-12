import './PartnerCard.css';

const PartnerCard = ({ country, orgName, tagline, description, imageUrl}) => {
  return (
    <div className="card">
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

      <div className="card-body">
        <p className="card-text">{description}</p>
        {imageUrl && (
          <img src={imageUrl} alt={orgName} className="card-image" />
        )}
      </div>
    </div>
  );
};

export default PartnerCard;