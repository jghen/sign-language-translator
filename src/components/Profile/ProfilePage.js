import React from "react";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import withAuth from "../../hoc/withAuth";
import AppContainer from "../../hoc/AppContainer.js";
import ProfileTranslations from "./ProfileTranslations/ProfileTranslations.js";
import ProfileFooter from "./ProfileFooter/ProfileFooter.js";
import Scroll from "../../hoc/Scroll.js";
import { translationClearHistory } from "../../api/translation";

import "./ProfilePage.css";

const ProfilePage = () => {
  const { user, setUser } = useUser();

  const handleClearHistory = async (userWithTranslations) => {
    if (!window.confirm("Are you sure?\nThis can not be undone!")) {
      return;
    }

    const [clearError /* , updatedUser */] = await translationClearHistory(
      userWithTranslations
    );

    if (clearError !== null) {
      alert("omg, so sorry, something went wrong!");
      return;
    }

    const updatedUser = {
      ...userWithTranslations,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };

  return (
    <div className="Profile-Page">
      <AppContainer>
        <header className="Profile-Header text-center flex">
          <h1>Hello, {user.username}!</h1>
        </header>

        <main className="Profile-Main text-center">
          <AppContainer>
            <Scroll>
              <h4 className="h4-header">Translation history:</h4>
              <ProfileTranslations translations={user.translations} />
            </Scroll>
          </AppContainer>
        </main>
      </AppContainer>
      <ProfileFooter clearHistory={handleClearHistory} />
    </div>
  );
};

export default withAuth(ProfilePage);
