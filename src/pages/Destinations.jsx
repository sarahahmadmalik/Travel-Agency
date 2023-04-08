import TourCard from "../components/TourCard";
import Nav from "../components/Nav";
import ImageBanner from "../components/ImageBanner";
import banner1 from "../assets/images/banner1.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import Booking from "../components/Booking";

function Destinations() {
  let Data = require("./Tour.json");


  const [email, setEmail] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    alert("Subscribed Sucessfully!");
    setEmail("");
  };

  const handleCardClick = (card) => {
    console.log(card);
    setSelectedCard(card);
  };

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
          <h1>{selectedCard ? `${selectedCard.title}` : "Explore Top Destinations"}</h1>
        </div>
        <div className="cards">
          <div id="card">
          {!selectedCard &&
            Data.map((each) => {
              return (
                <article className="each-card" key={each.id} onClick={() => handleCardClick(each)}>
                  <TourCard data={each} />
                </article>
              );
            })}

          {selectedCard &&
            selectedCard.tours.map((tour,index) => {
              return <Booking data={tour} selected={selectedCard} index={index} />;
            })}

          </div>
        
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Subscribe And Get Special Discounts.</span>
          <p className="description">
            Subscribe to our Newsletter and get special discouts on your tours
          </p>
          <div>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email-address"
              value={email}
              onChange={(event) =>
                setEmail((prevEmail) => (prevEmail = event.target.value))
              }
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
