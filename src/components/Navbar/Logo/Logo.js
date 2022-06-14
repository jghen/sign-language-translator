import React from "react";
import { Link } from "react-router-dom";
import LogoRegular from "./LogoRegular.png";
import Splash from "./Splash.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "white",
        height: "fit-content",
      }}
      to={"/translate"}
    >
      <div className="Logo-Container">
        <img className="Logo-Regular" src={LogoRegular} alt="hello-robot" />
        <img className="Splash" src={Splash} alt="hello-robot" />
      </div>
    </Link>
  );
};

export default Logo;
