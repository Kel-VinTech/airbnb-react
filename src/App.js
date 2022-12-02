import React from "react";
import Header from "./components/Header";
import HeroContent from './components/HeroContent';
import Card from "./components/Card";
import Data from "./Data";




function App() {
  const cards = Data.map(item => {
    return (
        <Card 
              {...item}      
        />
    )
  })

  return (
         
    <div className="container">
      <Header />
      <HeroContent />  
      <section className="card_container">
      {cards} 
      </section>
    </div>
  );
}

export default App;
