import React from "react";
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
                ID={item.id}
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
