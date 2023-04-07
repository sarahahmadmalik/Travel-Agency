import '../styles/ImageBanner.css'

function ImageBanner(props) {
  return (
    <div className='img-banner' >
        <img src={`${props.imgName}`} alt='banner'/>
        <div className='banner-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default ImageBanner