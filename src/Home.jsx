import Nav from './components/Nav'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection';
import Destination from './components/Destination';
import TripsCard from './components/TripsCard';
import PreFooter from './components/PreFooter';
function Home() {
  return (
    <div>
    <Nav/>
    <HeroSection/>
    <Destination/>
    <TripsCard/>
    <PreFooter/>
    <Footer/>
    </div>
  )
}

export default Home