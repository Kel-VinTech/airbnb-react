import React from "react";
// import img1 from "../img/image 12.png";
import star from "../img/Star 1.png";


const Card = ({img,rating,reviewCount,country,title,price }) => {
    return(
        <div className="card row">
            <img className="card_img" src={img}  alt="woman" />
            <div className="card__stat">
                <img src={star}  alt="woman" />
                <span>{rating}</span>
                <span className="gray">({reviewCount})</span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span>/ person</p>
        </div>
    )
}

export default Card;