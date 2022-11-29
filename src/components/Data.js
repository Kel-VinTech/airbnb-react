import React from "react";

// images 
import image1 from "../img/image 12.png";

const Data = () => {
    return(
        [
            {
                id:2,
                img:{image1},
                rating:"5.0",
                reviewCount :30,
                country: "USA",
                title:"Learn wedding photography",
                price: 125,
            }
        ]
    )
}

export default Data;