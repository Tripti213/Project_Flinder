import React,{useState,useEffect} from 'react'
import{Link, useNavigate} from 'react-router-dom'
import'./Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {

        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    })
    window.addEventListener('resize', showButton);
  
    const handleSignUp = (name) => {
        setIsSignedUp(true);
        setUserName(name);
    };

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
            <div className='profile-circle'>
              {userName ? userName.charAt(0) : 'P'}
            </div>
          </Link>
        </li>
    </ul>

    
   
    </div>
   </nav>
   </>
  );
}

export default Navbar;
