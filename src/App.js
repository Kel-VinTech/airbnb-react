import React from "react";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";

// images 
import image1 from "./img/image 12.png";
import image2 from "./img/wedding-photography 1.png"

{/* <HeroContent /> */}
function App() {
  return (
    <div className="container">
      <Header />
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
        img={image2}
        rating="5.0"
        reviewCount = {30}
        country = "USA"
        title = "Learn wedding photography"
        price = {125}
      />

    </div>
  );
}

export default App;
