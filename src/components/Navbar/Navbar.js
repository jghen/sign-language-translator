import React from "react";
import { useUser } from "../../context/UserContext";
import Logo from "./Logo/Logo";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import AppContainer from "../../hoc/AppContainer";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useUser();

  return (
    <>
      {user === null && (
        <nav className="Login-Nav text-center flex">
          <h3 className="h3-header">Sign Language Translator</h3>
        </nav>
      )}
      {user !== null && (
        <nav className="Translate-Nav">
          <AppContainer>
            <div className="Translate-Nav-Inner flex-between">
              <Logo />
              <ProfileLogo userName={user.username} />
            </div>
          </AppContainer>
        </nav>
      )}
    </>
  );
};

export default Navbar;
