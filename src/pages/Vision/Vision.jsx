import React from "react";
import VisionCard from "../../components/Cards/VisionCard";
import BannerPhoto from "../../components/BannerPhoto/BannerPhoto";
import "./Vision.css";
 
/* ── Our Vision intro ── */
const VisionIntro = () => (
  <section className="ov-vision-intro" id="vision">
    <h1 className="headers-White">Our Vision</h1>
    <p className="ov-vision-intro__body">
      A <strong>Global Community</strong> engaged with the world. Working together for a future where all
      people enjoy lives of dignity and opportunity.
    </p>
    <div className="ov-photo-grid">
      <img src="/images/vision/vision1.jpg" alt="Community scene 1" className="ov-photo-grid__img" />
      <img src="/images/vision/vision2.jpg" alt="Community scene 2" className="ov-photo-grid__img" />
      <img src="/images/vision/vision3.jpg" alt="Community scene 3" className="ov-photo-grid__img" />
    </div>
  </section>
);
 
/* ── What We Believe ── */
const beliefCards = [
  {
    headtext: "Sustainable Change",
    subtext: "must be driven by those closest to the needs they address.",
    icon: "/images/red-panda.jpg",
  },
  {
    headtext: "Committed Individuals",
    subtext: "worldwide are eager to contribute their talents.",
    icon: "/images/red-panda.jpg",
  },
  {
    headtext: "Connecting People",
    subtext: "around shared goals can achieve extraordinary results.",
    icon: "/images/red-panda.jpg",
  },
];
 
const WhatWeBelieve = () => (
  <section className="ov-beliefs" id="beliefs">
    <h2 className="ov-section-title">What We Believe</h2>
    <div className="ov-beliefs__grid">
      {beliefCards.map((card) => (
        <VisionCard key={card.headtext} {...card} />
      ))}
    </div>
  </section>
);
 
/* ── Banner ── */
const Banner = () => (
  <section className="ov-banner">
    <h2 className="ov-banner__title">
      Acting Globally is Building a Sustainable Future<br />
      for Global Development
    </h2>
  </section>
);
 
/* ── Pillars ── */
const pillars = [
  {
    num: 1,
    title: "Locally-Led Solutions",
    body: `"Localization" can no longer be an afterthought, grafted onto a top-down paradigm that too frequently discounted the knowledge, priorities, and leadership of communities themselves. An emerging development model must center trusted grassroots groups in setting their agenda for change and crafting solutions that meet local needs. Funding should be directed to organizations that are deeply rooted in their communities and are able to engage local stakeholders who can amplify their impact. When local organizations and leaders guide decision-making, development efforts are more relevant, trusted and sustainable.`,
  },
  {
    num: 2,
    title: "Volunteer-Powered Impact",
    body: `In the face of diminished public funding, the talents and energy of committed individuals around the world can serve as a force multiplier for community-based organizations. With appropriate guidance and support, skilled volunteers – working either remotely or on-site – can contribute knowledge, mentorship, training and technical expertise to strengthen local institutions without creating long-term dependency. International NGOs can play a vital role, identifying people with skills that match the needs of a local group, and assisting both volunteers and local partners to ensure that engagements are thoughtful, respectful and impactful.`,
  },
  {
    num: 3,
    title: "Active Collaboration",
    body: `In meeting this moment, it is more important than ever that development stakeholders actively collaborate – deploying available financial resources and expertise to complement each other. As public funding shrinks, effective solutions increasingly depend on partnerships that could include donors, international NGOs, grassroots organizations, universities and businesses. For example, a youth employment initiative might combine a local community-based partner, with remote volunteer mentors, technical training by a university, and internships offered by a private company. By working together, institutions can pool resources, contribute their complementary skills, avoid duplication, and achieve lasting results.`,
  },
];
 
const PillarsSection = () => (
  <section className="ov-pillars">
    <p className="ov-pillars__intro">
      As governments around the world retreat from global assistance, it's widely recognized that a new model is
      needed to drive sustainable change. Facing dramatically reduced government funding, global development
      stakeholders must devise effective strategies that mobilize financial resources, channel support to
      organizations that are closest to the needs they address, and assist local partners to achieve lasting impact
      at scale.
    </p>
    <p className="ov-pillars__intro">
      The unique moment we're confronting calls for an approach that is locally-led, taps into the power of
      volunteers, and is purposefully collaborative.
    </p>
    <ol className="ov-pillars__list">
      {pillars.map(({ num, title, body }) => (
        <li key={num} className="ov-pillar">
          <div className="ov-pillar__num">{num}</div>
          <div className="ov-pillar__content">
            <h3 className="ov-pillar__title">{title}</h3>
            <p className="ov-pillar__body">{body}</p>
          </div>
        </li>
      ))}
    </ol>
    <p className="ov-pillars__closing">
      A locally-led, volunteer-supported and collaborative development model offers an inclusive path forward
      that prioritizes partnership and can yield long-term impact for the people whose lives all of us seek to lift up.
    </p>
  </section>
);
 
/* ── Contact CTA ── */
const ContactCTA = () => (
  <section className="ov-contact">
    <h2 className="ov-contact__heading">Share your thoughts and ways to collaborate!</h2>
    <a href="mailto:contact@acting-globally.org" className="ov-contact__email">
      contact@acting-globally.org
    </a>
  </section>
);
 
/* ── Page ── */
const OurVision = () => (
  <main className="ov-page">
    <BannerPhoto
      image="/images/vision/Banner.jpg"
    /> 
    <VisionIntro />
    <WhatWeBelieve />
    <Banner />
    <PillarsSection />
    <ContactCTA />
  </main>
);
 
export default OurVision;