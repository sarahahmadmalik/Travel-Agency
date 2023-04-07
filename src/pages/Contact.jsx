import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/Contact.css";
import support from '../assets/images/support.gif'
function Contact() {
  return (
    <>
      <Nav/>
      <div className="header" >
        <div className="header_title">
          <h1>Contact Us</h1>
          <p>FAQS, bug reports, and feedbacks ─ we're here for it all.</p>
        </div>
        </div>
        <div className="header-mid">
        <div className="contact-form">
          <span class="heading-title">Ask How Can We Help You</span>
          <form>
            <label for="name">Name:</label>
            <input type="text" required="" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required=""></textarea>
            <button type="submit">Get Help</button>
          </form>
        </div>
        <div className="illustration">
            <img src={`${support}`} alt="support-gif"/>
        </div>
    </div>
      <Footer />
    </>
  );
}

export default Contact;
