import { Link } from 'react-router-dom';
import ImpactCard from "../../components/Cards/ImpactCard";
import BannerPhoto from "../../components/BannerPhoto/BannerPhoto";
import './Impact.css';

/* ── Stat data ── */
const stats = [
  {
    text: ["Partnered with ", "10", " high-impact grassroots groups"],
    highlight: "10",
    icon: '/images/ImpactPics/handHeart.png',
    alt: "Handshake heart icon",
  },
  {
    text: ["Touched the lives of ", "5,000+", " people across Africa and Asia"],
    highlight: "5,000+",
    icon: '/images/ImpactPics/world.png',
    alt: "Globe icon",
  },
  {
    text: ["Mobilized ", "50+", " volunteers to help our partners"],
    highlight: "50+",
    icon: '/images/ImpactPics/people.png',
    alt: "Volunteer icon",
  },
];
 
/* ── Renders text with the highlight number in blue ── */
const StatText = ({ parts, highlight }) => (
  <p className="is-stat__text">
    {parts.map((part, i) =>
      part === highlight
        ? <span key={i} className="is-stat__highlight">{part}</span>
        : part
    )}
  </p>
);
 
/* ── Component ── */
const ImpactStats = () => (
  <section className="is-section">
    <div className="is-grid">
      {stats.map(({ text, highlight, icon, alt }) => (
        <div key={highlight} className="is-stat">
          <StatText parts={text} highlight={highlight} />
          <img src={icon} alt={alt} className="is-icon" />
        </div>
      ))}
    </div>
  </section>
);

/* ── intro ── */
const Intro = () => (
  <section className="impact-intro" id="impact">
    <h1 className="headers-White">Our Impact</h1>
	<p className="is-subtitle">Since our founding in 2023, Acting Globally has:</p>
    <ImpactStats />
  </section>
);

const ImpactCards = [
	{
		country: "Democratic Republic of Congo",
		title: "Enhancing Nutrition",
		description: `Congo Peace Academy used an Acting Globally grant to 
		train more than 3,000 family farmers in sustainable agriculture 
		practices – boosting crop yields by 75 percent, strengthening food 
		security, and building trust across communities.`,
		imageUrl: "/images/ImpactPics/Congo.jpg"
	},
	{
		country: "The Phillippines",
		title: "Healing Children",
		description: `An Acting Globally grant financed trauma-informed 
				therapy for Balik Kaanyag clinicians – bringing healing for child 
				survivors of sexual abuse and supporting caregivers in previously-unserved 
				communities.`,
		imageUrl: "/images/ImpactPics/Philippines.jpg"
	},
	{
		country: "Uganda",
		title: "Supporting Survivors",
		description: `An Acting Globally grant allowed Islamic Women’s Initiative 
				for Justice, Law and peace to offer counseling and community education 
				reaching 200 survivors and women threatened by gender-based violence.`,
		imageUrl: "/images/ImpactPics/Uganda.jpeg"
	},
	{
		country: "Iraq",
		title: "Rebuilding Communities",
		description: `Nadia’s Initiative applied an Acting Globally grant to 
				expand literacy and digital-skills training for 150 women and girls 
				at a Women’s Center in Sinjar – helping survivors of a 2014 genocide 
				targeting Yazidis rebuild their lives.`,
		imageUrl: "/images/ImpactPics/Iraq.jpeg"
	},
	{
		country: "DRC and Rwanda",
		title: "Accessing Education",
		description: `Partnering with Congo Peace Academy, Acting Globally mobilized 
				volunteers who coached students applying to international 
				universities – opening opportunities for young people committed to 
				using their education to drive change in their countries.`,
		imageUrl: "/images/ImpactPics/Rwanda.jpg"
	},
	{
		country: "Cambodia",
		title: "Preparing Young Leaders",
		description: `Journeys Within Our Community used an Acting Globally grant 
				to upgrade computers and other tools in its education center – 
				strengthening language skills and offering training for hundreds 
				of young people pursuing careers.`,
		imageUrl: "/images/ImpactPics/Cambodia.jpg"
	},
	{
		country: "India",
		title: "Strengthening Skills Training",
		description: `Acting Globally is crafting a grant for Ek Tara to 
				incorporate AI and digital awareness into the education and training 
				it provides to more than 1,000 marginalized children through its Learning 
				Centre in Kolkata.`,
		imageUrl: "/images/ImpactPics/India.jpg"
	},
	{
		country: "Cameroon",
		title: "Advancing Climate Justice",
		description: `Acting Globally volunteers are supporting Association des 
				Acteurs de Développement (ADEV) in preparing a strategic plan to engage 
				young people in initiatives that advance climate justice.`,
		imageUrl: "/images/ImpactPics/Cameroon.JPG"
	},
];

const PartnerSection = () => (
  <section className="" id="impact">
    <h1 className="headers-White">Transforming Lives Around the World</h1>
    <div className="ov-beliefs__grid">
      {ImpactCards.map((card) => (
        <ImpactCard key={card.country} {...card} />
      ))}
    </div>
  </section>
);

function Impact() {
    return(
        <div className="impact-page">

			<BannerPhoto image="/images/ImpactPics/Banner.jpeg"/> 
			<Intro />
            <PartnerSection />
      </div>
    );
}

export default Impact;