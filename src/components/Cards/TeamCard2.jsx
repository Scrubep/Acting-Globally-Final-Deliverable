import './TeamCard2.css';

const TeamCard2 = ({ name, role, imageUrl }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={name} className="team-card__image" />
      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard2;