
import "../styles/DestinationCard.css";

function TourCard(props) {
  
  return (
    <>
      <div
        className="temporary_text"
        style={{ backgroundImage: `url(${props.data.images})`}}
      ></div>
      <div className="card_content">
        <span className="card_title">{props.data.title}</span>
        <span className="card_subtitle">{props.data.text}.</span>
        <p className="card_description">
          {props.data.description}
        </p>
      </div>
      </>
  );
}

export default TourCard;