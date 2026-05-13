import { useState } from 'react';
import DonateCard1 from '../../components/Cards/DonateCard1';
import DonateCard2 from '../../components/Cards/DonateCard2';
import './Donate.css';

const slides = [
  "/assets/donate/slide1.jpg",
  "/assets/donate/slide2.jpg",
  "/assets/donate/slide3.jpg",
  "/assets/donate/slide4.jpg",
  "/assets/donate/slide5.jpg",
];

export default function DonatePage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <main className="donate-page">

      {/* ── 1. Donate Cards ── */}
      <section className="donate-page__section">
        <h2 className="donate-page__heading">Even a Modest Donation Makes a Large Difference</h2>
        <div className="donate-card-2-grid">
          <DonateCard1 amount="$10" content="Buys seeds for a farmer in Africa to grow healthy food for their family." />
          <DonateCard1 amount="$50" content="Purchases school supplies for a young person in Cambodia to continue their education." />
          <DonateCard1 amount="$100" content="Helps women in Uganda secure access to critical healthcare services." />
          <DonateCard1 amount="$200" content="Provides care for children in the Philippines exposed to sexual abuse." />
        </div>
      </section>

      <section className="donate-page__section">
  <h2 className="donate-page__heading">Together, We've Already Touched Thousands of Lives</h2>
  <div className="stats-grid">
    <DonateCard2
      number="10"
      label="Countries"
      description="Active partnerships with community groups across the world"
      iconUrl="/assets/icons/globe.png"
    />
    <DonateCard2
      number="$40,000+"
      label="Seed Grants"
      description="Direct support for high-impact organizations worldwide"
      iconUrl="/assets/icons/grants.png"
    />
    <DonateCard2
      number="5,000+"
      label="Lives Touched"
      description="Transforming the future for people worldwide"
      iconUrl="/assets/icons/lives.png"
    />
  </div>
</section>

      {/* ── 3. Carousel ── */}
      <section className="donate-page__section">
        <h2 className="donate-page__heading">Our Partners in Action</h2>
        <p className="donate-page__subheading">
          Click through to see moments from communities Acting Globally volunteers have supported
        </p>

        <div className="carousel">
          <button className="carousel__btn carousel__btn--prev" onClick={prev}>&#8249;</button>

          <div className="carousel__track">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`slide ${i + 1}`}
                className={`carousel__slide ${i === current ? 'carousel__slide--active' : i === (current - 1 + slides.length) % slides.length ? 'carousel__slide--left' : i === (current + 1) % slides.length ? 'carousel__slide--right' : 'carousel__slide--hidden'}`}
              />
            ))}
          </div>

          <button className="carousel__btn carousel__btn--next" onClick={next}>&#8250;</button>
        </div>

        {/* Dots */}
        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

    </main>
  );
}