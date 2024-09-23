import React from "react";
import "./App.css";
import Footer from "./components/footerComp/Footer.js";
import Navbar from "./components/topComp/Navbar.js";
import Carousel from "./components/carouselComp/Carousel.js";
import Subscribe from "./components/subscribeComp/Subscribe.js";
import Findmore from "./components/sectionComp/Findmore.js";
import Main from "./components/mainComp/Main.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Carousel />
      <Findmore />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
