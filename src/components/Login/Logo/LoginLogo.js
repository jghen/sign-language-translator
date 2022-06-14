import React from "react";
import LogoHello from './LogoHello.png';
import Splash from './Splash.svg';
import './LoginLogo.css';

const Logo = () => {
  return (
    <div className="Login-Logo-Container">
      <img className="Login-Logo-Hello" src={LogoHello} alt="hello-robot" />
      <img className="Login-Splash" src={Splash} alt="hello-robot" />
    </div>
  );
}

export default Logo;