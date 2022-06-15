import React from "react";
import "./TranslateOutput.css";
import AppContainer from "../../../hoc/AppContainer";
import Scroll from "../../../hoc/Scroll";

const TranslateOutput = ({ inputArray }) => {

  const insertTranslation = (() => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return inputArray.map((word, i) => 
      <div key={i + word} className="Word-Wrapper">
        {[...word].map((char, j) => 
          <div key={word + i + j} className="Sign-Wrapper">
            <img
              key={`${char}-${j}-${i}`}
              className={`Sign Sign-${char}`}
              alt={`${char}`}
              src={require(`./Signs/${
                alphabet.includes(char.toLowerCase())
                  ? char.toLowerCase()
                  : "space"
              }.png`)}
            />
            <p key={j + i} className="Char">
              {char}
            </p>
          </div>
        )}
      </div>
    );
  })();

  return (
    <AppContainer>
      <section id="TranslateOutput" className="Translate-Output">
        <Scroll>
          <div className="Words-Wrapper">
            {inputArray.length > 0 && insertTranslation}
          </div>
        </Scroll>
        <div className="Translate-Paragraph-Wrapper flex">
          <p className="Translate-Paragraph">Translation</p>
        </div>
      </section>
    </AppContainer>
  );
};

export default TranslateOutput;
