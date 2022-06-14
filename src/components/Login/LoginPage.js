import React from "react";
import AppContainer from "../../hoc/AppContainer.js";
import LoginForm from "./LoginForm/LoginForm.js";
import Logo from "./Logo/LoginLogo.js";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="Login-Page">
      <AppContainer>
        <main className="Login-Main text-center flex-column-evenly">
          <h1 className="Login-h1">Welcome!</h1>
          <Logo />
          <h3 className="h3-get-started">Get Started:</h3>
          <LoginForm />
        </main>
      </AppContainer>
    </div>
  );
};

export default LoginPage;
