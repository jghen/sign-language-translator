import React from "react";
import { useUser } from "../../../context/UserContext.js";
import { Link } from "react-router-dom";
import AppContainer from "../../../hoc/AppContainer.js";
import "./ProfileFooter.css";
import { storageDelete } from "../../../utils/storage";
import { STORAGE_KEY_USER } from "../../../const/storageKeys";

const ProfileFooter = ({ clearHistory }) => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  const handleClearHistoryClick = async () => {
    clearHistory(user);
  };

  return (
    <>
      <nav className="Footer">
        <AppContainer>
          <div className="Footer-Inner flex-between">
            <div className="Link-Profile-Wrapper flex">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to={"/translate"}
              >
                <span className="Link material-symbols-outlined small-arrow">
                  arrow_back
                </span>
                <p className="Link Link-Profile">Translate</p>
              </Link>
            </div>

            <button
              onClick={handleClearHistoryClick}
              className="cta-btn clear-history-btn"
              id="clearHistoryBtn"
            >
              Clear history
            </button>

            <div className="Link-Profile-Wrapper flex">
              <button
                onClick={handleLogout}
                className="Log-Out-btn flex"
                id="LogOutBtn"
              >
                <p className="Link-Profile">Log out</p>
                <span className="material-symbols-outlined small-arrow">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </AppContainer>
      </nav>
    </>
  );
};

export default ProfileFooter;
