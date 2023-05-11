import { BrowserRouter } from "react-router-dom";
import { Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover ">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
