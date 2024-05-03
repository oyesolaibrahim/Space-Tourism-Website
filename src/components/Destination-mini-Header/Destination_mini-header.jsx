import { useState } from "react";
import Moon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"
import { Link } from "react-router-dom";
import "./Destination_mini_header.scss";



const Destination_Header = ({destinationsData}) => {
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
   moon.style.display = "inline-block";
}

const moonMouseLeave = () => {
    const moon = document.querySelector(".hr-moon");
    moon.style.display = "none";
 }

 const marsMouseOver = () => {
    const mars = document.querySelector(".hr-mars");
   mars.style.display = "inline-block";
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
                        <div className="flex planet">
                            <div onClick={moon} className="column">
                                <p className="moon" onMouseOver={moonMouseOver} onMouseLeave={moonMouseLeave}>Moon</p>
                                <hr className="hr-moon"></hr>
                            </div>
                            <div onClick={mars}>
                                <p className="mars" onMouseOver={marsMouseOver} onMouseLeave={marsMouseLeave}>Mars</p>
                                <hr className="hr-mars"></hr>
                            </div>
                            <div onClick={europa}>
                                <p className="europa" onMouseOver={europaMouseOver} onMouseLeave={europaMouseLeave}>Europa</p>
                                <hr className="hr-europa"></hr>
                            </div>
                            <div onClick={titan}>
                                <p className="titan" onMouseOver={titanMouseOver} onMouseLeave={titanMouseLeave}>Titan</p>
                                <hr className="hr-titan"></hr>
                            </div>
                        </div>
                    )
}

export default Destination_Header;