import Card from "./Card";
import '../styles/TripCard.css';
import swatt from '../assets/images/swatt.jpg'
import Hunza from '../assets/images/Hunza.jpg'
import Taxila from '../assets/images/Taxila.jpg'
import Malam from '../assets/images/Malam.jpg'

function TripsCard() {
  return (
    <div className='trip'>
        <h1 className="head">Recent Trips</h1>
        <p className="head">Discover Destinations with Affordable Trips</p>
        <div className='trip-card'>
            <Card heading='Swat, Kalam & Malam Jabba Deluxe Tour' text='5 Days, 4 Nights' pic={swatt}/>
            <Card heading='Chitral, Kalash & Hunza Winter Tour' text='10 Days, 9 Nights' pic={Hunza}/>
            <Card heading='Taxila Museum and Khanpur Dam Tour' text='1 Day' pic={Taxila}/>
            <Card heading='Malam Jabba Swat Tour' text='3 Days, 2 Nights' pic={Malam}/>
        </div>
    </div>
  )
}

export default TripsCard