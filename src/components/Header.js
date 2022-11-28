import React from "react";
import Logo from "../img/Vector.png"

const Header = () => {
    return(
        <div className="nav">
            <nav>
            <img className="logo"  src={Logo} alt="Logo" />
            </nav>
        </div>
    )
}

export default Header