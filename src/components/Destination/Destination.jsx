import "./Destination.scss";
import { useState } from "react";
import Header from "../Header/Header";
import Destination_Header from "../Destination-mini-Header/Destination_mini-header";
import data from "../../data.json"
import Moon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"



const destinationsData = data.destinations



const Destination = () => {
    const [moonBorder, setMoonBorder] = useState(true)
    const [marsBorder, setMarsBorder] = useState(false)
    const [europaBorder, setEuropaBorder] = useState(false)
    const [titanBorder, setTitanBotrder] = useState(false)
    const [image, setImage] = useState(Moon)
    const [name, setName] = useState(destinationsData[0].name)
    const [description, setDescription] = useState(destinationsData[0].description)
    const [travel, setTravel] = useState(destinationsData[0].travel)
    const [distance, setDistance] = useState(destinationsData[0].distance)
    
      
    const moon = () => {
        setImage(Moon);
        setName(destinationsData[0].name);
        setDescription(destinationsData[0].description);
        setTravel(destinationsData[0].travel);
        setDistance(destinationsData[0].distance);
     }
    
     const mars = () => {
        setImage(Mars);
        setName(destinationsData[1].name);
        setDescription(destinationsData[1].description);
        setTravel(destinationsData[1].travel);
        setDistance(destinationsData[1].distance);
        setMarsBorder(true);
        setMoonBorder(false);
     }
    
     const europa = () => {
        setImage(Europa);
        setName(destinationsData[2].name);
        setDescription(destinationsData[2].description);
        setTravel(destinationsData[2].travel);
        setDistance(destinationsData[2].distance);
     }
     const titan = () => {
        setImage(Titan);
        setName(destinationsData[3].name);
        setDescription(destinationsData[3].description);
        setTravel(destinationsData[3].travel);
        setDistance(destinationsData[3].distance);
     }
    const moonMouseOver = () => {
        const moon = document.querySelector(".hr-moon");
       moon.classList.add("display");
       moon.classList.remove("no-display");
    }
    
    const moonMouseLeave = () => {
        const moon = document.querySelector(".hr-moon");
        moon.classList.remove("display");
        moon.classList.add("no-display");
     }
    
     const marsMouseOver = () => {
        const mars = document.querySelector(".hr-mars");
        mars.classList.remove("display");
        mars.classList.add("no-display");
    }
    
    const marsMouseLeave = () => {
        const mars = document.querySelector(".hr-mars");
        mars.style.display = "none";
     }
     const europaMouseOver = () => {
         const europa = document.querySelector(".hr-europa");
        europa.style.display = "inline-block";
     }
     
     const europaMouseLeave = () => {
         const europa = document.querySelector(".hr-europa");
         europa.style.display = "none";
      }
      const titanMouseOver = () => {
          const titan = document.querySelector(".hr-titan");
         titan.style.display = "inline-block";
      }
      
      const titanMouseLeave = () => {
          const titan = document.querySelector(".hr-titan");
          titan.style.display = "none";
       }
    
        
    return (
        <div className="destination">
            <Header/>
            <main>
                <h3 className="pick">01 Pick your destination</h3>
                <div className="flex">
                    <div>
                        <img src={image}/>
                    </div>
                    <div className="description column">
                 
                        <div className="flex planet">
                            <div onClick={moon} className="column">
                                <p className="moon" onMouseOver={moonMouseOver} onMouseLeave={moonMouseLeave}>Moon</p>
                                <hr className="hr-moon display"></hr>
                            </div>
                            <div onClick={mars}>
                                <p className="mars" onMouseOver={marsMouseOver} onMouseLeave={marsMouseLeave}>Mars</p>
                                <hr className="hr-mars display" /*id="mars-display"*/></hr>
                            </div>
                            <div onClick={europa}>
                                <p className="europa" onMouseOver={europaMouseOver} onMouseLeave={europaMouseLeave}>Europa</p>
                                <hr className="hr-europa display"></hr>
                            </div>
                            <div onClick={titan}>
                                <p className="titan" onMouseOver={titanMouseOver} onMouseLeave={titanMouseLeave}>Titan</p>
                                <hr className="hr-titan display"></hr>
                            </div>
                        </div>
                        <div className="specific-planet">
                            <h1>{name}</h1>
                        </div>
                        <div className="p-description">
                            <p className="planet-description">
                                {description}
                            </p>
                        </div>
                        <div className="desination-footer">
                            <hr className="planet-hr"></hr>
                            <div className="flex distance-time">
                                <div className="column distance">
                                    <p> Avg. distance</p>
                                    <h3>{distance}</h3>
                                </div>
                                <div className="column time">
                                    <p>Est. travel time</p>
                                    <h3>{travel}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
 }


 export default Destination;