import Header from "../Header/Header";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <main>
                <h3>So, you want to travel to</h3>
                <div className="flex">
                    <div className="space">
                        <h1>Space</h1>
                        <p>
                          Let’s face it; if you want to go to space, you might as well genuinely go to 
                          outer space and not hover kind of on the edge of it. Well sit back, and relax 
                          because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                     <div>
                        <h3 className="explore">Explore</h3>
                    </div>
                </div>
                    
            </main>
        </div>
    )
 }


 export default Home;