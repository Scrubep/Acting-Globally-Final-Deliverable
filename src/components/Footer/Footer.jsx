import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Left Side */}
      <div className="footer-left">

        <div className="footer-brand">
          <img
            src="../dist/assets/red-panda.jpg"
            alt="Acting Globally Logo"
            className="footer-logo"
          />

          <h2>Acting Globally</h2>
        </div>

        <div className="footer-info">
          <p>U.S. Section 501(c)(3) nonprofit organization</p>
          <span>|</span>
          <p>@ 2026 Acting Globally</p>
        </div>

      </div>

      {/* Right Side */}
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Vision">Vision</Link></li>
        <li><Link to="/Partners">Partners</Link></li>
        <li><Link to="/Impact">Our Impact</Link></li>
        <li><Link to="/Team">Team</Link></li>
        <li><Link to="/Volunteer">Volunteer</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
      </ul>

    </footer>
  );
};

export default Footer;