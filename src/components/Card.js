import React from "react";
import star from "../img/Star 1.png";

const Card = (props) => {
   let badgeText;
   if (props.openSpot === 0) {
    badgeText = "SOLD OUT"
   } else if (props.country === "Online") {
    badgeText = "ONLINE"
   }


    return(
        <div className="card row">
            {badgeText && <div className="card_badge">{badgeText}</div>}
            <img className="card_img" src={props.img} alt="woman" />
            <div className="card__stat">
                <img src={star}  alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card_title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}

export default Card;