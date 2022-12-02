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
              item={item}      
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
