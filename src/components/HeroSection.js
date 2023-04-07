import ReactPlayer from 'react-player';
import Travel from '../assets/images/travel.mp4';
import '../styles/HeroSection.css';
import '../styles/navbar.css'
import {Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
        <div className="hero">
        <ReactPlayer className='hero-banner' url={Travel} playing loop muted width='100%' height='80%'/>
        <div className='hero-text'>
            <h1>Your Journey Your Story</h1>
            <p>Choose your favourite desitination</p>
            <button id='btn' className='hero-btn'><Link to={'/Destinations'}>See Destinations</Link></button>
        </div>
    </div>
    </>
  )
}

export default HeroSection