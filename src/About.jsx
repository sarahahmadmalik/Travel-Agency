import ImageBanner from "./components/ImageBanner"
import Nav from "./components/Nav"
import AboutImage from './assets/images/12.jpg'
import './styles/About.css'
import Footer from "./components/Footer"
function About() {
  return (
    <>
    <Nav/>
    <ImageBanner title="About Us" text="Learn More About Traveled" imgName={`${AboutImage}`}/>
    <div className="about-container">
        <div>
        <h2>About Traveled</h2>
        <p>Welcome to our Traveled! We specialize in providing unforgettable travel experiences for our customers across the country.</p>
      <p>Our team of experienced travel experts is dedicated to helping you plan your dream vacation. Whether you're looking for a relaxing beach getaway, an adventurous outdoor excursion, or a cultural tour of our beautiful country, we've got you covered.</p>
      <p>Take a look at our destinations and packages to get started, and feel free to contact us if you have any questions or need assistance.</p>
      </div>
      <div>
      <h2>Our Services</h2>
      <p>At our travel agency, we offer a wide range of travel services to meet the needs of every traveler. Some of our most popular services include:</p>
      <ul>
        <li>✓ Customized travel itineraries</li>
        <li>✓ All-inclusive vacation packages</li>
        <li>✓ Cruise bookings</li>
        <li>✓ Group travel planning</li>
      </ul>
      <p>We also offer travel insurance and 24/7 customer support to ensure that your trip goes smoothly from start to finish.</p>
      </div>

      <div>
      <h2>Our Destinations</h2>
      <p>With our travel agency, you can explore some of the most breathtaking destinations in the world. Whether you're looking to relax on a tropical beach, hike through a national park, or immerse yourself in a new culture, we've got you covered.</p>
      <p>Some of our most popular destinations include:</p>
      <ul>
        <li>✓ Islamabad</li>
        <li>✓ Murree</li>
        <li>✓ Azad Kashmir</li>
        <li>✓ Northern Areas</li>
      </ul>
      <p>Visit our Destinations page to learn more about each location and to start planning your next adventure!</p>

      </div>

      <div>
      <h2>Contact Us</h2>
      <p>Have questions about our travel services? Need help planning your next vacation? We're here to help!</p>
      <p>You can reach us by phone, email, or through our online contact form. We look forward to hearing from you!</p>
      <p>Phone:  555-1234</p>
      <p>Email:  info@traveled.com</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About