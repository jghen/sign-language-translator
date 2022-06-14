import React, { useState } from "react";
import { useUser } from "../../context/UserContext.js";
import withAuth from "../../hoc/withAuth.js";
import AppContainer from "../../hoc/AppContainer.js";
import TranslateForm from "./TranslateForm/TranslateForm.js";
import TranslateFooter from "./TranslateFooter/TranslateFooter.js";
import TranslateOutput from "./TranslateOutput/TranslateOutput.js";
import "./TranslatePage.css";
import { translationAdd } from "../../api/translation.js";
import { storageSave } from "../../utils/storage.js";
import { STORAGE_KEY_USER } from "../../const/storageKeys.js";

const TranslatePage = () => {
  const [inputValue, setInputValue] = useState([]);
  const { user, setUser } = useUser();

  const getInputValue = (input) => {
    if (input.length > 0) {
      const inputArray = input.split(" ");
      const spaceArray = inputArray.map((word) => word + " ");
      return setInputValue(spaceArray);
    }
    return setInputValue([""]);
  };

  const handleTranslationClick = async (translation) => {
    if (translation.length === 0) {
      alert("Please type some letters first!");
      return;
    }

    const [error, updatedUser] = await translationAdd(user, translation);
    if (error !== null) {
      alert("sorry, unable to delete records :/");
      return;
    }

    getInputValue(
      updatedUser.translations[updatedUser.translations.length - 1]
    );

    //Keep UI state and Seerver state in sync
    storageSave(STORAGE_KEY_USER, updatedUser);
    //update context state
    setUser(updatedUser);
  };

  return (
    <div className="Translate-Page">
      <AppContainer>
        <header className="Translate-Header text-center flex-column-evenly">
          <h4 className="Translate-h4-header">Translate to sign language:</h4>
          <TranslateForm onTranslation={handleTranslationClick} />
        </header>
        <main className="Translate-Main text-center">
          <TranslateOutput inputArray={inputValue} />
        </main>
      </AppContainer>
      <TranslateFooter />
    </div>
  );
};

export default withAuth(TranslatePage);
