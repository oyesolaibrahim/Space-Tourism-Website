import Header from "../Header/Header";
import "./Technology.scss";
import { useEffect, useState } from "react";
import Vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import Vehicle2 from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import Spaceport from "../../assets/technology/image-spaceport-portrait.jpg"
import Spaceport2 from "../../assets/technology/image-spaceport-landscape.jpg"
import Capsule from "../../assets/technology/image-space-capsule-portrait.jpg"
import Capsule2 from "../../assets/technology/image-space-capsule-landscape.jpg"
import data from "../../data.json"
import { useNavBorderBottom } from "../HederContext";



const technologyData = data.technology


const Technology = () => {
    const [image, setImage] = useState(Vehicle)
    const [image2, setImage2] = useState(Vehicle2)
    const [name, setName] = useState(technologyData[0].name)
    const [description, setDescription] = useState(technologyData[0].description)
    const { navBorderBottom, changeNavBorderBottom } = useNavBorderBottom();
      
    useEffect(() => {
        changeNavBorderBottom({
            technologyBorderBottom: true,
        })
    }, [])
  
    const vehicle = (e) => {
        setName(technologyData[0].name);
        setDescription(technologyData[0].description);
        setImage(Vehicle);
        setImage2(Vehicle2);
        const div = e.currentTarget;
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.classList.add('not-clicked');
        });
    
        div.classList.add("clicked");
        div.classList.remove("not-clicked");
    }
    
    const spaceport = (e) => {
        console.log(e);
        setName(technologyData[1].name);
        setDescription(technologyData[1].description);
        setImage(Spaceport);
        setImage2(Spaceport2);
        const div = e.currentTarget;
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.classList.add('not-clicked');
        });
    
        div.classList.add("clicked");
        div.classList.remove("not-clicked");
    }
    
    const capsule = (e) => {
        setName(technologyData[2].name);
        setDescription(technologyData[2].description);
        setImage(Capsule);
        setImage2(Capsule2);
        const div = e.currentTarget;
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.classList.add('not-clicked');
        });
    
        div.classList.add("clicked");
        div.classList.remove("not-clicked");
    }
    
    
        return (
            <div className="technology">
                <Header/>
                <main>
                        <h3 className="space-launch"><span>03</span> Space launch 101</h3>
                <div className="flex reverse">
                    <div className="">
                        <div className="flex">
                            <div className="selection-buttons">
                                <div className="button clicked" onClick={vehicle}>1</div>
                                <div className="button not-clicked second-button" onClick={spaceport}>2</div>
                                <div className="button not-clicked" onClick={capsule}>3</div>
                            </div>
                            <div className="description">
                                <div>
                                    <h3>The terminology...</h3>
                                    <h1>{name}</h1>
                                </div>
                                <div>
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="image">
                        <img className="image1" src={image} alt=""/>
                    </div>
                 
                    <div className="image02">
                        <img className="image2" src={image2} alt=""/>
                    </div>
                 </div>
                    
                </main>
            </div>
        )
     }


 export default Technology;