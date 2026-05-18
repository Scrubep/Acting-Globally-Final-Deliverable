import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
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
  { number: "10", icon: "/images/donate/world.png", iconAlt: "globe", label: "Countries", desc: "Active partnerships with community groups across the world" },
  { number: "$40,000+", icon: "/images/donate/peopleBook.png", iconAlt: "grants", label: "Seed Grants", desc: "Direct support for high-impact organizations worldwide" },
  { number: "5,000+", icon: "/images/donate/hand.png", iconAlt: "lives", label: "Lives Touched", desc: "Transforming the future for people worldwide" },
];

// ── Carousel images data ──
const carouselImages = [
  { src: "/images/donate/donate1.jpg", alt: "partner 1" },
  { src: "/images/donate/donate2.png", alt: "partner 2" },
  { src: "/images/donate/donate3.JPG", alt: "partner 3" },
  { src: "/images/donate/donate4.jpeg", alt: "partner 4" },
  { src: "/images/donate/donate5.jpg", alt: "partner 5" },
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
    // you can add an iframe here for donorbox 
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
  const n = carouselImages.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const maskRef = useRef(null);
  const shouldTransitionRef = useRef(true);
  const [metrics, setMetrics] = useState({
    viewW: 732,
    mainW: 460,
    gap: 16,
    step: 476,
    base: 136,
  });

  const extendedSlides = useMemo(() => {
    if (n === 0) return [];
    return [
      { img: carouselImages[n - 1], key: "clone-prev", trackIndex: 0 },
      ...carouselImages.map((img, i) => ({
        img,
        key: img.src,
        trackIndex: i + 1,
      })),
      { img: carouselImages[0], key: "clone-next", trackIndex: n + 1 },
    ];
  }, [n]);

  useLayoutEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    const update = () => {
      const viewW = mask.clientWidth;
      if (viewW < 80) return;
      const gap = 16;
      const peekMin = 72;
      const mainW = Math.min(460, Math.max(200, viewW - 2 * peekMin - 2 * gap));
      const step = mainW + gap;
      const base = (viewW - mainW) / 2;
      setMetrics({ viewW, mainW, gap, step, base });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(mask);
    return () => ro.disconnect();
  }, []);

  const { step, base, mainW } = metrics;
  const centerTrackIndex = activeIndex + 1;
  const translateX = base - centerTrackIndex * step;

  const goPrev = () => {
    setActiveIndex((i) => {
      const ni = i === 0 ? n - 1 : i - 1;
      shouldTransitionRef.current = Math.abs(ni - i) === 1;
      return ni;
    });
  };

  const goNext = () => {
    setActiveIndex((i) => {
      const ni = i === n - 1 ? 0 : i + 1;
      shouldTransitionRef.current = Math.abs(ni - i) === 1;
      return ni;
    });
  };

  const goTo = (index) => {
    setActiveIndex((cur) => {
      shouldTransitionRef.current = Math.abs(index - cur) === 1;
      return index;
    });
  };

  const trackInstant = !shouldTransitionRef.current;

  return (
    <section className="donate-page__section">
      <h2 className="donate-page__heading">Our Partners in Action</h2>
      <p className="donate-page__subheading">
        Click through to see moments from communities Acting Globally volunteers have supported!
      </p>
      <div className="carousel">
        <button type="button" className="carousel__btn" onClick={goPrev} aria-label="Previous slide">
          &#8249;
        </button>
        <div className="carousel__mask" ref={maskRef}>
          <div
            className={`carousel__track${trackInstant ? " carousel__track--instant" : ""}`}
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {extendedSlides.map((item) => {
              const ti = item.trackIndex;
              const isActive = ti === centerTrackIndex;
              const isAdjacent = ti === centerTrackIndex - 1 || ti === centerTrackIndex + 1;
              let cellClass = "carousel__cell";
              if (isActive) cellClass += " carousel__cell--active";
              else if (isAdjacent) cellClass += " carousel__cell--adjacent";

              return (
                <div
                  key={item.key}
                  className={cellClass}
                  style={{
                    flex: `0 0 ${step}px`,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    className="carousel__img"
                    src={item.img.src}
                    alt={item.img.alt}
                    style={{ width: mainW, maxWidth: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" className="carousel__btn" onClick={goNext} aria-label="Next slide">
          &#8250;
        </button>
      </div>
      <div className="carousel__dots">
        {carouselImages.map((img, index) => (
          <button
            type="button"
            key={img.src}
            className={`carousel__dot ${index === activeIndex ? "carousel__dot--active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
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