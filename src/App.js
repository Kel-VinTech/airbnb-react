import React from "react";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";

// images 
import image1 from "./img/image 12.png";
import image2 from "./img/wedding-photography 1.png"
import image3 from "./img/mountain-bike 1.png"


function App() {
  return (
    <div className="container">
      <Header />
      <HeroContent /> 
      <Card 
        img={image1}
        rating="5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life lesson from Katie"
        price = {136}
      />
      <Card 
        img={image2}
        rating="5.0"
        reviewCount = {30}
        country = "USA"
        title = "Learn wedding photography"
        price = {125}
      />

<Card 
        img={image3}
        rating="4.8"
        reviewCount = {2}
        country = "USA"
        title = "Group Mountain Biking"
        price = {50}
      />

    </div>
  );
}

export default App;
