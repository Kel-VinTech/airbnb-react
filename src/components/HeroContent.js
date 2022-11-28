import React from "react";
import Img from "../img/Group 77.png";

const HeroContent = () => {
    return(
        <section className="hero row">
            <img className="hero_img" src={Img} alt="grid"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
               one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}

export default HeroContent