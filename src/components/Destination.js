import Valley1 from '../assets/images/Valley1.jpg'
import Valley2 from '../assets/images/Valley2.jpg'
import Naran1 from '../assets/images/Naran1.jpg'
import Naran2 from '../assets/images/Naran2.jpg'
import '../styles/Destination.css'
import DestinationInfo from './DestinationInfo'

function Destination() {
  return (
    <div className="destination">
    <h1 className='Head'>Popular Destinations</h1>
    <p className='Head'>Tours give you the
    opportunity to see a lot, within
    a time frame.</p>
    <DestinationInfo className='first-des'heading='Neelum Valley, Azad Kashmir'
    paragraph='Neelum Valley stands with pride in the Neelum District, located in the Northern Most part of Azad Jammu and Kashmir. The Neelum valley is at the North and North East side of Muzaffarabad and runs parallel to Kaghan Valley. The Neelum district has a significant population of approximately 191,000 people. The citizens of Neelum Valley are educated.
    The charm of Neelum valley will bound you, and you would have thoughts of spending the rest of your life in the Paradise of Heaven on Earth. The charming and breath-taking scenic beauty of Neelum valley, tall and green-lush trees, beautifully-built Neelum Valley hotels and enjoyable Neelum valley weather are enough to keep you staring at natural sights and consistently giving you thoughts to be lost in the beauty of paradise.'
    img1 = {Valley1}
    img2={Valley2}/>

    <DestinationInfo className='first-des-reverse' heading='Naran-Kaghan Valley, KPK'
    paragraph='Situated in the upper Kaghan Valley of Mansehra city of KPK, this valley is one of the most famous attraction points for local and international tourists. It is located in the Himalayan mountain range and is a centre point for people visiting Hunza and Skardu. During summers, there is heavy rainfall and, in winters, there is snowfall.'
    img1 = {Naran1}
    img2={Naran2}/>
    </div>
  )
}

export default Destination