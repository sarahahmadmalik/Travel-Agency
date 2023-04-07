import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/Contact.css";
import support from "../assets/images/support.gif";
import { useState } from "react";

function Contact() {
  const [userData, setUserData] = useState([]);

  const submitData = (event) => {
    event.preventDefault();
    setUserData({ Name: "", Email: "", Message: "" });
  };

  const handleChange = (event) => {
    const index = event.target.selectedIndex;
    const selectedValue = event.target.value;
  
    switch (index) {
      case 0:
        setUserData([...userData, { name: selectedValue }]);
        break;
      case 1:
        setUserData([...userData, { email: selectedValue }]);
        break;
      case 2:
        setUserData([...userData, { message: selectedValue }]);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Nav />
      <div className="header">
        <div className="header_title">
          <h1>Contact Us</h1>
          <p>FAQS, bug reports, and feedbacks ─ we're here for it all.</p>
        </div>
      </div>
      <div className="header-mid">
        <div className="contact-form">
          <span class="heading-title">Ask How Can We Help You</span>
          <form onSubmit={submitData}>
            <label for="name">Name:</label>
            <input type="text" value={userData.Name} required onChange={handleChange} />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={userData.Email}required onChange={handleChange} />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required value={userData.Message} onChange={handleChange}></textarea>
            <button type="submit">Get Help</button>
          </form>
        </div>
        <div className="illustration">
          <img src={`${support}`} alt="support-gif" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
