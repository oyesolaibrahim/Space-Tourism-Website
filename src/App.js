import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination'
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/destination' element={<Destination/>}/>
         <Route path='/crew' element={<Crew/>}/>
         <Route path='/technology' element={<Technology/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
