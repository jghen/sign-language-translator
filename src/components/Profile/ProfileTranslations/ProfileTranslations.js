import React from "react";
import "./ProfileTranslations.css";
import AppContainer from "../../../hoc/AppContainer";

const ProfileInput = ({ translations }) => {
  const showTranslations = translations.map((translation, i) => {
    return (
      <div key={i + "-" + translation} className="Profile-Input-Wrapper flex">
        <div className="Profile-Input-Inner-Wrapper flex">
          <p type="text" className="char">
            {`${i + 1}: ${translation}`}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <AppContainer>
        {translations.length === 0 && (
          <p className="No-Translations">You have no translations.</p>
        )}
        {showTranslations}
      </AppContainer>
    </>
  );
};

export default ProfileInput;
