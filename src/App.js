import React from "react";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";

{/* <HeroContent /> */}
function App() {
  return (
    <div className="container">
      <Header />
      <Card 
        img="./img/image 12.png"
        rating="5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life lesson from Katie"
        price = {136}
      />
      <Card 
        img="./img/wedding-photography 1.png"
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
