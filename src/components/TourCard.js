import "../styles/DestinationCard.css";

function TourCard(props) {
  
  return (
    <>
    { props.data.map((data,index) => {
      return(
    <article class="card" key={index}>
      <div
        class="temporary_text"
        style={{ backgroundImage: `url(${data.images})`}}
      ></div>
      <div class="card_content">
        <span class="card_title">{data.title}</span>
        <span class="card_subtitle">{data.text}.</span>
        <p class="card_description">
          {data.description}
        </p>
      </div>
    </article>
)})}
    </>
  );
}

export default TourCard;