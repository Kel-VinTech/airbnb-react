import React from "react";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";
import CardData from "./components/CardData";


{/* <HeroContent />  */}





function App() {
  const cards = CardData.map(item => {
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
    </div>
  );
}

export default App;
