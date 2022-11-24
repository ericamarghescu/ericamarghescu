import '../styles/Navbar.css';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Link } from 'react-scroll';

function Navbar({ showIcons }) {
   const showNav = {
      display: showIcons ? 'flex' : 'none'
   }

   const showIcon = {
      display: showIcons ? 'none' : 'flex'
   }

   const scrollPosition = useScrollPosition()

   return (
      <div className={scrollPosition > 0 ? "navbar-shadow" : "navbar"}>
            <Link className="logo" to="Home" smooth={true}>
               <img src={logo} className="logo"/>
            </Link>
            <div className="nav-right">
               <Link className="nav-button" style={showNav} to="About" smooth={true}>About</Link>
               <Link className="nav-button" style={showNav} to="Coursework" smooth={true}>Coursework</Link>
               <Link className="nav-button" style={showNav} to="Experience" smooth={true}>Experience</Link>
               <Link className="nav-button" style={showNav} to="Leadership" smooth={true}>Leadership</Link>
               <Link className="nav-button" style={showNav} to="Projects" smooth={true}>Projects</Link>
               <p className="resume-button" style={showNav}>Resume</p>
               <img className="menu" src={menu} style={showIcon}/>
            </div>
      </div>
   );
 }
 
 export default Navbar;