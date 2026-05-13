import './DonateCard1.css';

const DonateCard1 = ({ amount, content }) => {
  return (
    <div className="donate-card">
      <h2 className="donate-card__amount">{amount}</h2>
      <p className="donate-card__content">{content}</p>
    </div>
  );
};

export default DonateCard1;