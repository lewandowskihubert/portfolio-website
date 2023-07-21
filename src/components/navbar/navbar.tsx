import { BrowserRouter as Router, Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import "./navbar.css"


const Navbar: React.FC = () => {


    return (    
        <nav className="navbar-container" >
          <ul className="navbar-nav">
            <li className="nav-name"> <a href="/"> <p className="name-paragraph"> Hubert Lewandowski </p> <p> Frontend dev</p></a> </li>
            <li className="nav-item">
             <a href='#projects'>Projects</a>
              <a href="#aboutme"> About me</a> 
             </li>
        
                 
            </ul>
             </nav>
    )

}

export default Navbar