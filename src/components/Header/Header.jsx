import logo from "../../assets/shared/logo.svg"
import { Link } from 'react-router-dom';
import "./Header.scss";
import { useState } from "react";
import { useNavBorderBottom } from "../HederContext";

    
const Header = () => {

const { navBorderBottom, changeNavBorderBottom } = useNavBorderBottom();

const [menuOpen, setMenuOpen] = useState(false);
const [barClose, setBarClose] = useState(false);
const [timesOpen, setTimesOpen] = useState(false);
 
const barClick = () => {
    setMenuOpen(true)
    setTimesOpen(true);
    setBarClose(true);
}
const timesClick = () => {
    setMenuOpen(false); 
    setTimesOpen(false) 
    setBarClose(false)
}

const homeMouseOver = () => {
    const home = document.querySelector(".hr-home");
    home.classList.add ("display");
    home.classList.remove ("no-display");
}
 
 const homeMouseLeave = () => {
     const home = document.querySelector(".hr-home");
     home.classList.remove ("display");
     home.classList.add ("no-display");
  }
  const destinationMouseOver = () => {
     const destination = document.querySelector(".hr-destination");
     
     destination.classList.add ("display");
     destination.classList.remove ("no-display");
  }
  
  const destinationMouseLeave = () => {
      const destination = document.querySelector(".hr-destination");
      
      destination.classList.remove ("display");
      destination.classList.add ("no-display");
   }
   const crewMouseOver = () => {
      const crew = document.querySelector(".hr-crew");
      
      crew.classList.add ("display");
      crew.classList.remove ("no-display");
   }
   
   const crewMouseLeave = () => {
       const crew = document.querySelector(".hr-crew");
       crew.classList.remove ("display");
       crew.classList.add ("no-display");
    }
    const technologyMouseOver = () => {
       const technology = document.querySelector(".hr-technology");
       technology.classList.add ("display");
       technology.classList.remove ("no-display");
    }
    
    const technologyMouseLeave = () => {
        const technology = document.querySelector(".hr-technology");
        technology.classList.remove ("display");
        technology.classList.add ("no-display");
     }
    
    const crewClicked = () => {
        changeNavBorderBottom({

            homeBorderBottom: false,
            destinationBorderBottom: false,
            crewBorderBottom: true,
            technologyBorderBottom: false        })
    }
    
    const technologyClicked = () => {
        changeNavBorderBottom({
            homeBorderBottom: false,
            destinationBorderBottom: false,
            crewBorderBottom: false,
            technologyBorderBottom: true
        })
     }
     const homeClicked = () => {
        changeNavBorderBottom({
            
            homeBorderBottom: true,
            destinationBorderBottom: false,
            crewBorderBottom: false,
            technologyBorderBottom: false
        })
      }
      const destinationClicked = () => {
        changeNavBorderBottom({
            homeBorderBottom: false,
            destinationBorderBottom: true,
            crewBorderBottom: false,
            technologyBorderBottom: false
        })
       }
    return (
        
    <header className="flex">
        <div className="logo">
            <img src={logo} alt="logo-image"/>
        </div>
      
        <div className="horizontal-line"></div>
      
       <div className="flex menu right" id={menuOpen && "slide"}>
            
        <Link style={{color: "white", textDecoration: "none"}} to="/">
            <div>
                <p className="p-home" onMouseOver={homeMouseOver} onMouseLeave={homeMouseLeave} onClick={homeClicked}><span>00</span> Home</p>
                <hr className={`hr-home ${navBorderBottom.homeBorderBottom ? "home-display" : "no-display"}`}></hr>
            </div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} to="/destination">
            <div>
                <p className="p-destination" onMouseOver={destinationMouseOver} onMouseLeave={destinationMouseLeave} onClick={destinationClicked}><span>01</span> Destination</p>
                <hr className="hr-destination no-display" id={navBorderBottom.destinationBorderBottom && "destination-display"}></hr>
            </div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} to="/crew">
            <div>
                <p className="p-crew" onMouseOver={crewMouseOver} onMouseLeave={crewMouseLeave} onClick={crewClicked}><span>02</span> Crew</p>
                <hr className= "hr-crew no-display" id={navBorderBottom.crewBorderBottom && "crew-display"}></hr>
            </div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} to="/technology">
            <div>
                <p className="p-technology" onClick={technologyClicked} onMouseOver={technologyMouseOver} onMouseLeave={technologyMouseLeave}><span>03</span> Technology</p>
                <hr className="hr-technology no-display" id={navBorderBottom.technologyBorderBottom && "technology-display"}></hr>
            </div>
         </Link>
        </div>
        <i id={barClose && "close"} className="fa fa-bars" aria-hidden="true" onClick={barClick}></i>
        <i id={timesOpen && "open"} className="fa fa-times" aria-hidden="true" onClick={timesClick}></i>
  </header>
    )
}

export default Header;