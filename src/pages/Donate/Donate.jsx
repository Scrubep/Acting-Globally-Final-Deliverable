import React, { useState } from "react";
import "./Donate.css";

// ── Donation amounts data ──
const donationAmounts = [
  { amount: "$10", desc: "Buys seeds for a farmer in Africa to grow healthy food for their family" },
  { amount: "$50", desc: "Purchases school supplies for a young person in Cambodia to continue their education" },
  { amount: "$100", desc: "Helps women in Uganda access to critical healthcare resources" },
  { amount: "$200", desc: "Provides care for children in the Philippines exposed to sexual abuse" },
];

// ── Stats data ──
const statsData = [
  { number: "10", icon: "/dist/assets/donate/world.png", iconAlt: "globe", label: "Countries", desc: "Active partnerships with community groups across the world" },
  { number: "$40,000+", icon: "/dist/assets/donate/peopleBook.png", iconAlt: "grants", label: "Seed Grants", desc: "Direct support for high-impact organizations worldwide" },
  { number: "5,000+", icon: "/dist/assets/donate/hand.png", iconAlt: "lives", label: "Lives Touched", desc: "Transforming the future for people worldwide" },
];

// ── Carousel images data ──
const carouselImages = [
  { src: "/dist/assets/donate/donate1.jpg", alt: "partner 1" },
  { src: "/dist/assets/donate/donate2.png", alt: "partner 2" },
  { src: "/dist/assets/donate/donate3.JPG", alt: "partner 3" },
  { src: "/dist/assets/donate/donate4.jpeg", alt: "partner 4" },
  { src: "/dist/assets/donate/donate5.jpg", alt: "partner 5" },
];

// ── Hero Banner ──
const HeroBanner = () => (
  <div className="donate-hero">
    <div className="donate-hero__text">
      <h1 className="headers-Blue">
        Real Change <br /> Starts with You
      </h1>
      <p className="donate-hero__body">
        Acting Globally uses your entire donation to fund grants we provide to
        grassroots groups across Africa and Asia.
      </p>
      <p className="donate-hero__body">
        Your contribution allows trusted community organizations to expand
        access to healthcare, education, economic opportunity — Transforming
        lives for vulnerable populations around the world.
      </p>
      <p className="donate-hero__legal">
        Acting Globally is a U.S. Section 501(c)(3) nonprofit organization.
        Donations are tax-deductible to the extent allowed by law.
      </p>
    </div>
  </div>
);

// ── Single donation amount card ──
const DonationCard = ({ amount, desc }) => (
  <div className="donate-card">
    <p className="donate-card__amount">{amount}</p>
    <p className="donate-card__content">{desc}</p>
  </div>
);

// ── Donation amounts grid ──
const DonationGrid = () => (
  <section className="donate-page__section">
    <h2 className="donate-page__heading">
      Even a Modest Donation Makes a Large Difference
    </h2>
    <div className="donate-grid">
      {donationAmounts.map((item) => (
        <DonationCard key={item.amount} amount={item.amount} desc={item.desc} />
      ))}
    </div>
  </section>
);

// ── Single stat card ──
const StatCard = ({ number, icon, iconAlt, label, desc }) => (
  <div className="donate-card-2">
    <div className="donate-card-2__top">
      <span className="donate-card-2__number">{number}</span>
      <img className="donate-card-2__icon" src={icon} alt={iconAlt} />
    </div>
    <p className="donate-card-2__label">{label}</p>
    <p className="donate-card-2__desc">{desc}</p>
  </div>
);

// ── Stats grid ──
const StatsGrid = () => (
  <section className="donate-page__section">
    <h2 className="donate-page__heading">
      Together, We've Already Touched Thousands of Lives
    </h2>
    <div className="donate-card-2-grid">
      {statsData.map((item) => (
        <StatCard
          key={item.label}
          number={item.number}
          icon={item.icon}
          iconAlt={item.iconAlt}
          label={item.label}
          desc={item.desc}
        />
      ))}
    </div>
  </section>
);

// ── Carousel ──
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? carouselImages.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === carouselImages.length - 1 ? 0 : i + 1));

  const getSlideClass = (index) => {
    if (index === activeIndex) return "carousel__slide carousel__slide--active";
    if (index === (activeIndex - 1 + carouselImages.length) % carouselImages.length) return "carousel__slide carousel__slide--left";
    if (index === (activeIndex + 1) % carouselImages.length) return "carousel__slide carousel__slide--right";
    return "carousel__slide carousel__slide--hidden";
  };

  return (
    <section className="donate-page__section">
      <h2 className="donate-page__heading">Our Partners in Action</h2>
      <p className="donate-page__subheading">
        Click through to see moments from communities Acting Globally volunteers have supported!
      </p>
      <div className="carousel">
        <button className="carousel__btn" onClick={prev}>&#8249;</button>
        <div className="carousel__track">
          {carouselImages.map((img, index) => (
            <img key={img.src} className={getSlideClass(index)} src={img.src} alt={img.alt} />
          ))}
        </div>
        <button className="carousel__btn" onClick={next}>&#8250;</button>
      </div>
      <div className="carousel__dots">
        {carouselImages.map((img, index) => (
          <button
            key={img.src}
            className={`carousel__dot ${index === activeIndex ? "carousel__dot--active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

// ── Main Donation page ──
const Donation = () => (
  <div className="donate-page">
    <HeroBanner />
    <DonationGrid />
    <StatsGrid />
    <Carousel />
  </div>
);

export default Donation;