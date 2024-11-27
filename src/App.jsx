
import './App.css'
import  NavbarAria from "./NavbarAria";
import Allocate from './component/Allocate';
import Feedback from './component/Feedback';
import Embrace from './component/Embrace';

import Hero from "./component/Hero";
import Incredibly from './component/Incredibly';
import TrainAria from './component/TrainAria';
import Vision from './component/Vision';
import Footer from './component/Footer';


function App() {
 

  return (
    <>
      
      <NavbarAria/>
      <div>
      <Hero/>
      <Vision />
      <Incredibly />
      <TrainAria />
      <Feedback />
      < Allocate />
      <Embrace/>
      </div>
      < Footer />

      
     

    </>
  )
}

export default App
