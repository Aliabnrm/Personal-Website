import Header from "./container/Header/Header";
import Resume from "./container/Resume/Resume";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import Services from "./container/Services/Services";
import Portfolio from "./container/Portfolio/Portfoilo";
import Pricing from "./container/Pricing/Pricing";
import Contactus from "./container/Contactus/Contactus";
import Footer from "./container/Footer/Footer";

import "./App.css";
import "./grid.css";

const App = () => (
  <>
    <Header />
    <Home />
    <About />
    <Resume />
    <Services />
    <Portfolio />
    <Pricing />
    <Contactus />
    <Footer />
  </>
);

export default App;
