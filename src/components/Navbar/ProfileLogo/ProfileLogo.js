import React from "react";
import { Link } from "react-router-dom";
import "./ProfileLogo.css";

const ProfileLogo = ({ userName }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "white",
        height: "fit-content",
      }}
      to={"/profile"}
    >
      <div className="ProfileLogo-Container">
        <div className="Username-Container">
          <p className="Username">{userName}</p>
        </div>
        <div className="Manage-Account-Container flex">
          <span className="material-symbols-outlined Manage-Account">
            manage_accounts
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProfileLogo;
