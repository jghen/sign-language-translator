import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "../../../hoc/AppContainer.js";
import "./TranslateFooter.css";

const TranslateFooter = () => {
  return (
    <>
      <nav className="Footer">
        <AppContainer>
          <div className="Footer-Inner">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                height: "fit-content",
              }}
              to={'/profile'}
            >
              <div className="Link-Profile-Wrapper flex">
                <p className="Link Link-Profile">Profile</p>
                <span className="material-symbols-outlined small-arrow">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </AppContainer>
      </nav>
    </>
  );
};

export default TranslateFooter;
