import { useState } from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import Hamburger from '../assets/images/Hamburger.png'

function Nav() {
    const [isOpen, setOpen] = useState(false);

    const handleMenu = () =>{
        setOpen(prevState => prevState = !prevState);
    }

  return (
    <nav>
        <div className='container'>
            <div className='logo'>
                <h1>Traveled</h1>
            </div>
            <div className={`${isOpen ? 'menu-icon open': 'menu-icon'}`} onClick={handleMenu}>
                <img src={Hamburger} alt='button-icon'/>
            </div>
            </div>
            <div>
                <ul className={`nav-elements ${isOpen ? 'open': 'nav-elements'}`}>
                    <li className='nav-item'><Link to={'/'}>Home</Link></li>
                    <li className='nav-item'><Link to={'/Destinations'}>Destinations</Link></li>
                    <li className='nav-item'><Link to={'/'}>About</Link></li>
                    <li className='nav-item'><Link to={'/Contact'}>Contact</Link></li>
                    <li className='nav-item'><button id='btn'>Sign Up</button></li>
                </ul>
            </div>
    </nav>
    
  )
}

export default Nav;