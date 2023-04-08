import "../styles/Footer.css";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1 style={{cursor: "pointer"}}>Traveled</h1>
          </div>
          <div></div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <Link to="/">Changelog</Link>
            <Link to="/">Status</Link>
            <Link to="/">License</Link>
            <Link to="/">All Versions</Link>
          </div>
          <div>
            <h4>Community</h4>
            <Link to="/">GitHub</Link>
            <Link to="/">Issues</Link>
            <Link to="/">Project</Link>
            <Link to="/"> Twitter</Link>
          </div>
          <div>
            <h4>Help</h4>
            <Link to="/">Support</Link>
            <Link to="/">Troubleshooting</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div>
            <h4>Others</h4>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">License</Link>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>Made by Sara Ahmad</p>
        <p>All rights reserved</p>
      </div>
    </>
  );
};
export default Footer;
