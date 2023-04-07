import TourCard from "./../components/TourCard";
import Nav from "../components/Nav";
import ImageBanner from "../components/ImageBanner";
import banner1 from "../assets/images/banner1.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

function Destinations() {
  const [email, setEmail] = useState('');
  
  let Data = require('../Tour.json');

  const handleSubmit =(event) =>{
    event.preventDefault();
    setEmail(event.target.value);
    alert('Subscribed Sucessfully!');
    setEmail('');
  }

  return (
    <>
      <Nav />
      <ImageBanner
        title="Find Next Place To Visit"
        imgName={`${banner1}`}
        text="Discover Amazing Destinations With Exclusive Deals"
      />
      <div className="card-area">
        <div className="pre-title">
          <h1>Explore Top Destinations</h1>
        </div>
        <div className="cards">
          <Link to={'/'}>
          <TourCard data={Data}/>
          </Link>
        </div>
          <form className="form" onSubmit={handleSubmit}>
            <span class="title">Subscribe And Get Special Discounts.</span>
            <p class="description">
              Subscribe to our Newsletter and get special discouts on your tours
            </p>
            <div>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email-address" value={email}onChange={(event) => setEmail(prevEmail => prevEmail=event.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      <Footer />
    </>
  );
}

export default Destinations;
