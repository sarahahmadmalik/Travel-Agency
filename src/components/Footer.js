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
            <Link href="/">Changelog</Link>
            <Link href="/">Status</Link>
            <Link href="/">License</Link>
            <Link href="/">All Versions</Link>
          </div>
          <div>
            <h4>Community</h4>
            <Link href="/">GitHub</Link>
            <Link href="/">Issues</Link>
            <Link href="/">Project</Link>
            <Link href="/"> Twitter</Link>
          </div>
          <div>
            <h4>Help</h4>
            <Link href="/">Support</Link>
            <Link href="/">Troubleshooting</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div>
            <h4>Others</h4>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">License</Link>
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
