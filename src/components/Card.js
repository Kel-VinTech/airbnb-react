import React from "react";
import star from "../img/Star 1.png";

const Card = (props) => {
   let badgeText;
   if (props.item.openSpot === 0) {
    badgeText = "SOLD OUT"
   } else if (props.item.country === "Online") {
    badgeText = "ONLINE"
   }


    return(
        <div className="card row">
            {badgeText && <div className="card_badge">{badgeText}</div>}
            <img className="card_img" src={props.item.img} alt="woman" />
            <div className="card__stat">
                <img src={star}  alt="star" />
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.reviewCount}) •</span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span>/ person</p>
        </div>
    )
}

export default Card;