import React from "react";
import TestimonialCard from "../../components/Cards/TestimonialCard";
import "./Volunteer.css";

/* ── Hero ── */
const Hero = () => (
  <section className="vs-hero">
    <div className="vs-hero__text">
      <h1 className="headers-Blue">Transform Lives<br />Around the World</h1>
      <p className="vs-hero__body">
        We match volunteers with grassroots groups where your talents can make a real
        difference. Opportunities are remote, part-time and flexible.
      </p>
      <a href="#signup" className="vs-hero__cta">Sign Up to Volunteer</a>
    </div>
    <div className="vs-hero__image-wrap">
      <img src="/dist/assets/volunteer/volunteer1.jpeg" alt="Volunteers holding certificates" className="vs-hero__image" />
    </div>
  </section>
);

/* ── Testimonials ── */
const testimonials = [
  {
    quote: "Working with Acting Globally has been incredibly rewarding. It's allowed me to use my skills to have a positive impact on the lives of others a world away.",
    name: "Monica",
  },
  {
    quote: "I'm excited to be part of a volunteer network that's amplifying the potential of groups like the CPA. Acting Globally volunteers have a tangible impact, while building cultural connections with people who live very different lives.",
    name: "Phillipe",
  },
  {
    quote: "Volunteering with Acting Globally has let me put my time and experience to the service of others. I find purpose knowing I'm helping organizations increase the services they provide to people in need.",
    name: "Doriane",
  },
];

const Testimonials = () => (
  <section className="vs-testimonials">
    <h2 className="vs-section-title">What Our Volunteers Say</h2>
    <div className="vs-testimonials__grid">
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
      ))}
    </div>
  </section>
);

/* ── Steps ── */
const steps = [
  {
    num: 1,
    title: "Tell us About Yourself",
    body: "Share your interests, skills and how you'd like to help.",
  },
  {
    num: 2,
    title: "Get Matched",
    body: "We'll connect you with a community group that needs your talents.",
  },
  {
    num: 3,
    title: "Transform Lives",
    body: "Work on a rewarding project. We support you on your journey.",
  },
];

const Steps = () => (
  <section className="vs-steps">
    <h2 className="vs-section-title">Three Easy Steps to Get Started</h2>
    <div className="vs-steps__track">
      {steps.map((step, i) => (
        <React.Fragment key={step.num}>
          <div className="vs-step__bubble">{step.num}</div>
          {i < steps.length - 1 && <div className="vs-step__line" />}
        </React.Fragment>
      ))}
    </div>
    <div className="vs-steps__grid">
      {steps.map((step) => (
        <div key={step.num} className="vs-step">
          <h3 className="vs-step__title">{step.title}</h3>
          <p className="vs-step__body">{step.body}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ── Form ── */
const SignupForm = () => (
  <section className="vs-form-wrap" id="signup">
    <div className="vs-form-card">
      <h2 className="vs-form__title">Create Your Profile</h2>

      <div className="vs-form__layout">
        {/* Left column */}
        <div className="vs-form__col">
          <div className="vs-form__row">
            <div className="vs-field">
              <label className="vs-label" htmlFor="firstName">First name</label>
              <input id="firstName" type="text" className="vs-input" />
            </div>
            <div className="vs-field">
              <label className="vs-label" htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" className="vs-input" />
            </div>
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="email">Email address</label>
            <input id="email" type="email" className="vs-input vs-input--full" />
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="country">Country where you live most of the year</label>
            <select id="country" className="vs-select">
              <option value="">Select your Country...</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Other</option>
            </select>
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="languages">Languages you speak or understand well</label>
            <select id="languages" className="vs-select">
              <option value="">Check all that Apply...</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Portuguese</option>
              <option>Other</option>
            </select>
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="helpWhere">How or where would you like to help?</label>
            <textarea
              id="helpWhere"
              className="vs-textarea"
              placeholder="e.g. DR, in Education"
              rows={3}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="vs-form__col">
          <div className="vs-field">
            <label className="vs-label" htmlFor="background">
              Tell us briefly about your background and skills you bring. (Optional)
            </label>
            <textarea
              id="background"
              className="vs-textarea"
              placeholder="e.g. 10 years in public health, fluent in French and Spanish..."
              rows={4}
            />
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="nonprofitExp">
              Describe in a few words any experience volunteering or working with a nonprofit. (Optional)
            </label>
            <textarea
              id="nonprofitExp"
              className="vs-textarea"
              placeholder="e.g. 5 years working in the DR to help teach young kids"
              rows={3}
            />
          </div>

          <div className="vs-field">
            <label className="vs-label" htmlFor="other">
              Anything else you'd like us to know, to match you with a rewarding opportunity? (Optional)
            </label>
            <textarea
              id="other"
              className="vs-textarea"
              placeholder="e.g. I have experience in Teaching/Academics"
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="vs-form__submit-row">
        <button type="button" className="vs-submit">Submit my profile</button>
      </div>
    </div>
  </section>
);

/* ── Page ── */
const VolunteerSignup = () => (
  <main className="vs-page">
    <Hero />
    <Testimonials />
    <Steps />
    <SignupForm />
  </main>
);

export default VolunteerSignup;