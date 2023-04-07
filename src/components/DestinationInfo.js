
const DestinationInfo =(props) => {

    const {className,heading,paragraph,img1,img2} = props;
  return (
    <div className={className}>
    <div  className="des-text">
    <h2>{heading}</h2>
    <p>{paragraph}</p>
    </div>
    <div className="image">
        <img alt="img" src={img1}/>
        <img alt="img" src={img2}/>
</div>
    </div>
  )
}

export default DestinationInfo