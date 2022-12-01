import React from "react";
import img from "../src/img/image 12.png";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";
import Data from "./Data";
{/* <HeroContent />  */}



function App() {
  const cards = Data.map(item => {
    return (
        <Card 
                img={item.img}
                rating={item.rating}
                reviewCount = {item.reviewCount}
                country = {item.country}
                title = {item.title}
                price = {item.price}      
        />
    )
  })

  return (
         
    <div className="container">
      <Header />
      {cards}
      <img src={img} alt="woman"/>
    </div>
  );
}

export default App;
