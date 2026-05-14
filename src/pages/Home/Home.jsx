import { Link } from 'react-router-dom';
import './Home.css';
import BannerPhoto from "../../components/BannerPhoto/BannerPhoto";
import Button from '../../components/Button/Button';

function Home() {
    return(
        <div>
            <main className="home">

              <BannerPhoto
                image="/images/home/Banner.jpg"
              /> 

      {/* ── 2. Intro text ── */}
      <section className="home__intro">
        <p className="home__intro-eyebrow">A Global Nonprofit Founded in 2023</p>
        <p className="home__intro-body">
          <span className="home__accent">Acting Globally</span> mobilizes volunteers and offers seed funding for
          grassroots groups around the world – Expanding access to{' '}
          <strong>education, healthcare, nutrition</strong> and <strong>economic opportunity</strong>
        </p>
      </section>

      <hr className="home__divider" />

      {/* ── 3. Support section ── */}
      <section className="home__support">
  <h2 className="home__support-heading">
    We Support <span className="home__accent">Community-Based</span> Organizations in
    Leading their Own Change Efforts
  </h2>

  <div className="home__support-grid">

    <div className="home__support-card">
      <img src="/images/home/hands.jpg" alt="Community hands" className="home__support-card-img" />
      <div className="home__support-card-text-wrap">
        <h3 className="home__support-card-title">Tailored Assistance</h3>
        <p className="home__support-card-text">
          from Acting Globally volunteers and development experts helps groups strengthen
          their capabilities and access funding to grow sustainably.
        </p>
      </div>
    </div>

    <div className="home__support-card">
      <div className="home__support-card-text-wrap">
        <h3 className="home__support-card-title">Catalytic Grants</h3>
        <p className="home__support-card-text">
          allow our local partners to expand their services, meet technology needs,
          pilot news programs, or extend their reach into additional communities
        </p>
      </div>
      <img src="/images/home/group.jpg" alt="Community gathering" className="home__support-card-img" />
    </div>

  </div>
</section>

      <hr className="home__divider" />

      {/* ── 4. Map section ── */}
      <section className="home__map">
        <h2 className="home__map-heading">
          We're supporting high-impact groups in{' '}
          <span className="home__accent">10 countries</span> across{' '}
          <span className="home__accent">Africa &amp; Asia</span>
        </h2>
        <div className="home__map-container">
          <img src="/images/home/map.png" alt="Map of Africa and Asia" className="home__map-img" />
        </div>
        <Button text={'Meet Our Partners'} color={'#2D8BBA'} path={'/Partners'}/>
      </section>

      <hr className="home__divider" />

      {/* ── 5. Rewarding Engagements ── */}
      <section className="home__engagements">
        <h2 className="home__engagements-heading">
          Rewarding Engagements for{' '}
          <span className="home__accent">Volunteers</span> and Our{' '}
          <span className="home__accent">Grassroots Partners</span>
        </h2>

        <div className="home__engagements-grid">
          <div className="engagement-card">
            <h3 className="engagement-card__title engagement-card__title--blue">Volunteers</h3>
            <ul className="engagement-card__list">
              <li>Connect remotely across cultures</li>
              <li>Help people in other countries open doors to their futures</li>
              <li>Join a community committed to a world of opportunity for all</li>
              <li>Apply your talents and learn new skills</li>
            </ul>
            <img src="/images/home/volunteer.jpeg" alt="Volunteers" className="engagement-card__image" />
          </div>

          <div className="engagement-card">
            <h3 className="engagement-card__title engagement-card__title--teal">Grassroots Groups</h3>
            <ul className="engagement-card__list">
              <li>Access volunteers who have skills that meet your needs</li>
              <li>Build on the strengths of your team</li>
              <li>Increase your visibility with partners and donors</li>
              <li>Share your successes. Learn from groups in other countries</li>
            </ul>
            <img src="/images/home/grassroots.jpg" alt="Grassroots groups" className="engagement-card__image" />
          </div>
        </div>
      </section>

      <hr className="home__divider" />

      {/* ── 6. Volunteer Opportunities ── */}
      <section className="home__opportunities">
        <h2 className="home__opportunities-heading">Upcoming Remote Volunteer Opportunities</h2>

        <div className="home__opportunities-grid">
          <div className="opportunity-card">
            <div className="opportunity-card__icon">
                <img src="/images/home/person.png" alt="Mentoring icon" className="opportunity-card__icon-img" />
            </div>
            <h3 className="opportunity-card__title">Mentoring Youth</h3>
            <p className="opportunity-card__text">
              Coach students in English and digital skills. Prepare young people to pursue
              rewarding careers and assume leadership roles in their communities.
            </p>
          </div>

          <div className="opportunity-card">
            <div className="opportunity-card__icon">
                <img src="/images/home/computer.png" alt="tech icon" className="opportunity-card__icon-img" />
            </div>
            <h3 className="opportunity-card__title">Adopting Technology</h3>
            <p className="opportunity-card__text">
              Support grassroots groups in integrating technology into their operations. Help
              our partners streamline procedures and reduce the cost of delivering their services.
            </p>
          </div>

          <div className="opportunity-card">
            <div className="opportunity-card__icon">
                <img src="/images/home/money.png" alt="funding icon" className="opportunity-card__icon-img" />
            </div>
            <h3 className="opportunity-card__title">Accessing Funding</h3>
            <p className="opportunity-card__text">
              Research potential funding sources for our grassroots partners. Help groups
              secure funding to allow them to expand their impact and build a sustainable future.
            </p>
          </div>
        </div>
      </section>

      <hr className="home__divider" />

      {/* ── 7. Sign up CTA ── */}
      <section className="home__cta">
        <h2 className="home__cta-heading">
          Sign-up to <span className="home__accent">Volunteer</span> today
        </h2>
        <p className="home__cta-sub">
          Create your own volunteer profile and get matched to community groups
        </p>
        <Button text={'Get Started'} color={'#2D8BBA'} path={'/Volunteer'}/>
      </section>

    </main>
        </div>
    );
}

export default Home;
