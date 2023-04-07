import "../styles/Booking.css";
import { useState } from "react";
import ReactModal from "react-modal";

function Booking(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
        >
          <h2>Popup Dialog Title</h2>
          <p>Popup Dialog Content</p>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </ReactModal>
      </div>
    </>
  );
}

export default Booking;
