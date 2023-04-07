function Card(props) {
  return (
      <div className="t-card">
        <div className="t-image">
          <img src={props.pic} alt='Sites' />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
  );
}
export default Card;
