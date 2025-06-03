import React,{useState} from 'react'
import{Link, useNavigate} from 'react-router-dom'
import'./Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
   <>
   <nav className='navbar'>
    <div className='navbar-container'>
     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
     FLINDER <i className='fab fa-typo3'/>
     </Link> 

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
        </Link>
        </li> 
        <li className='nav-item'>
        <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
        Services
        </Link>
        </li> 
        
        <li className='nav-item'>
        <Link to='/SignUp' className='nav-links' onClick={closeMobileMenu}>
        Sign Up
        </Link>
        </li> 
        
        <li className='nav-item'>
          <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
            <div className='profile-circle'></div>
          </Link>
        </li>
    </ul>
    </div>
   </nav>
   </>
  );
}

export default Navbar;
