import "./Crew.scss";
import { useState } from "react";
import Douglas from "../../assets/crew/image-douglas-hurley.png"
import Mark from "../../assets/crew/image-mark-shuttleworth.png"
import Victor from "../../assets/crew/image-victor-glover.png"
import Flight from "../../assets/crew/image-anousheh-ansari.png"
import Header from "../Header/Header";
//import Destination_Header from "../Destination-mini-Header/Destination_mini-header";
import data from "../../data.json"



const crewsData = data.crew



const Crew = () => {
    const [homeBorderBottom, setHomeBorderBottom] = useState(false);
    const [destinationBorderBottom, setDestinationBorderBottom] = useState(false)
    const [crewBorderBottom, setCrewBorderBottom] = useState(true);
    const [technologyBorderBottom, setTechnologyBorderBottom] = useState(false)
    const [image, setImage] = useState(Douglas)
    const [name, setName] = useState(crewsData[0].name)
    const [role, setRole] = useState(crewsData[0].role)
    const [bio, setBio] = useState(crewsData[0].bio)

const douglas = (e) => {
    setName(crewsData[0].name);
    setRole(crewsData[0].role);
    setBio(crewsData[0].bio);
    setImage(Douglas);
    const div = e.currentTarget;
    const buttons = document.querySelectorAll('.round-selection');
    buttons.forEach(button => {
        button.classList.remove('one');
    });

    div.classList.add("one");
    div.classList.remove("not-one");
}

const mark = (e) => {
    setName(crewsData[1].name);
    setRole(crewsData[1].role);
    setBio(crewsData[1].bio);
    setImage(Mark);
    const div = e.currentTarget;
    const buttons = document.querySelectorAll('.round-selection');
    buttons.forEach(button => {
        button.classList.remove('one');
    });

    div.classList.add("one");
    div.classList.remove("not-one");
}

const victor = (e) => {
    setName(crewsData[2].name);
    setRole(crewsData[2].role);
    setBio(crewsData[2].bio);
    setImage(Victor);
    const div = e.currentTarget;
    const buttons = document.querySelectorAll('.round-selection');
    buttons.forEach(button => {
        button.classList.remove('one');
    });

    div.classList.add("one");
    div.classList.remove("not-one");
}

const flight = (e) => {
    setName(crewsData[3].name);
    setRole(crewsData[3].role);
    setBio(crewsData[3].bio);
    setImage(Flight);
    const div = e.currentTarget;
    const buttons = document.querySelectorAll('.round-selection');
    buttons.forEach(button => {
        button.classList.remove('one');
    });

    div.classList.add("one");
    div.classList.remove("not-one");
}

 console.log(data)
 console.log(crewsData)
    return (
        <div className="crew">
            <Header/>
            <main>
                <h3 className="meet"><span>02</span> Meet your crew</h3>
                <div className="flex">
                <div>
                    <div>
                        <div className="commander">
                            <div>
                                <h3>{role}</h3>
                                <h1>{name}</h1>
                            </div>
                            <div>
                                <p>
                                    {bio}
                                </p>
                            </div>
                        </div>
                        <div className="selection flex">
                            <div className="round-selection one" onClick={douglas}></div>
                            <div className="round-selection not-one" onClick={mark}></div>
                            <div className="round-selection not-one" onClick={victor}></div>
                            <div className="round-selection not-one" onClick={flight}></div>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img className="crew-img" src={image} alt=""/>
                </div>

                </div>
    
            </main>
        </div>
    )
 }


 export default Crew;

  
  
