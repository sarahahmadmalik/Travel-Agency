import "../styles/Booking.css";
import "../styles/bookTour.css";
import { useState } from "react";
import ReactModal from "react-modal";

let element = document.getElementsByClassName("footer");

function BookTour(props) {
  return (
    <div className="Modal" id="Modal">
      <form className="credit-card-info--form" onSubmit={props.submitFunction}>
        <div className="input_container">
          <div className="inputs">
            <div>
              <label for="name" className="input_label">
                Tourist Full Name
              </label>
              <input
                id="password_field"
                className="input_field"
                type="text"
                name="userName"
                title="Inpit title"
                placeholder="Enter your full name"
                onChange={props.onChange}
              />
            </div>

            <div>
              <label for="email" className="input_label">
                Email
              </label>
              <input
                id="password_field"
                className="input_field"
                type="email"
                name="email"
                title="Inpit title"
                placeholder="user@gmail.com"
                onChange={props.onChange}
              />
            </div>

            <div>
              <label for="phone" className="input_label">
                Phone
              </label>
              <input
                id="password_field"
                className="input_field"
                type="phone"
                name="phone"
                title="Inpit title"
                placeholder="+92-000-0000"
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>

        <div className="input_container">
          <label for="desitnation" className="input_label">
            Destination
          </label>
          <div className="split">
            <input
              id="password_field"
              class="input_field"
              type="text"
              name="location"
              title="Destination"
              placeholder="Destination"
              value={props.tourInfo[0]}
              disabled
            />
            <input
              id="password_field"
              className="input_field"
              type="number"
              name="noOfPeople"
              title="number-of-persons"
              placeholder="Number of People"
              onChange={props.onChange}
            />
          </div>
          <div className="inputs">
            <div>
              <label for="departure" className="input_label">
                Departure Date
              </label>

              <input
                id="password_field"
                className="input_field"
                type="date"
                name="departure"
                title="departure-date"
                placeholder="Departure Date"
                onChange={props.onChange}
              />
            </div>
            <div>
              <label for="arrival" className="input_label">
                Return Date
              </label>

              <input
                id="password_field"
                className="input_field"
                type="date"
                name="arrival"
                title="return-date"
                placeholder="Return Date"
                onChange={props.onChange}
              />
            </div>
            <div>
              <label for="payement" className="input_label">
                Payement
              </label>

              <input
                id="password_field"
                className="input_field"
                type="number"
                name="payement"
                title="payement"
                value={props.tourInfo[1]}
                placeholder="Payement"
                disabled
              />
            </div>
          </div>
          <div className="btns">
            <button className="purchase--btn" id="confirm">
              Confirm
            </button>
            <button id="closure" onClick={props.onClick}>
              Cancel{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Booking(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    userName: "",
    email: "",
    phone: null,
    location: props.data.tour,
    departure: "",
    arrival: "",
    payment: props.selected.tours[props.index].price,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "arrival" || name === "departure") {
      setBookingData({ ...bookingData, [name]: new Date(value) });
      return;
    }
    setBookingData({ ...bookingData, [name]: value });
  }

  const submitData = (event) => {
    event.preventDefault();
    handleChange(event);
    console.log(bookingData);
    alert("Booking Successfull");
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.selected.tours[props.index].images} alt="Booking" />
        </div>

        <div className="text">
          <p className="h3">{props.data.tour}</p>
          <p className="p">{props.selected.tours[props.index].stay}</p>
          <p className="p">Rs. {props.selected.tours[props.index].price}</p>
          <div className="icon-box" onClick={() => setModalIsOpen(true)}>
            <p className="span">Book</p>
          </div>
        </div>
      </div>
      <div>
        <ReactModal
          appElement={element}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOnOverlayClick={true}
          contentLabel="Booking Form"
          style={{
            content: {
              width: "60vw",
              height: "85vh",
              transform: "translate(30%,0%)",
              zIndex: "99",
              borderRadius: "7px",
              backgroundColor: "#fff",
              paddingTop: "1.5rem",
              paddingBottom: "1rem",
            },
          }}
        >
          <h2 style={{ margin: "0rem 2rem" }}>Book Your Tour Now</h2>
          <p style={{ margin: "0.5rem 2rem" }}>
            Information we need to confirm your tour.
          </p>
          <BookTour
            submitFunction={submitData}
            tourInfo={[props.data.tour, props.data.price]}
            formData={[bookingData, setBookingData]}
            onClick={() => setModalIsOpen(false)}
            onChange={(event) => handleChange(event)}
          />
        </ReactModal>
      </div>
    </>
  );
}

export default Booking;
