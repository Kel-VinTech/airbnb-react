import React from "react";
import star from "../img/Star 1.png";


const Card = ({img,openSpot,rating,reviewCount,country,title,price }) => {
   let badgeText;
   if (openSpot === 0) {
    badgeText = "SOLD OUT"
   } else if (country === "Online") {
    badgeText = "ONLINE"
   }


    return(
        <div className="card row">
            {badgeText && <div className="card_badge">{badgeText}</div>}
            <img className="card_img" src={img} alt="woman" />
            <div className="card__stat">
                <img src={star}  alt="star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) •</span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span>/ person</p>
        </div>
    )
}

export default Card;