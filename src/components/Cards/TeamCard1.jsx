import { useState } from 'react';
import './TeamCard1.css';

const TeamCard1 = ({ name, role, imageUrl, bio }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Card ── */}
      <div className="team-card" onClick={() => setIsOpen(true)}>
        <img src={imageUrl} alt={name} className="team-card__image" />
        <div className="team-card__body">
          <h3 className="team-card__name">{name}</h3>
          <p className="team-card__role">{role}</p>
        </div>
      </div>

      {/* ── Modal ── */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt={name} className="modal__image" />
            <div className="modal__body">
              <h2 className="modal__name">{name}</h2>
              <p className="modal__role">{role}</p>
              <p className="modal__bio">{bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard1;