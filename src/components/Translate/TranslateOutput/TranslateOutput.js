import React from "react";
import "./TranslateOutput.css";
import AppContainer from "../../../hoc/AppContainer";
import Scroll from "../../../hoc/Scroll";

const TranslateOutput = ({ inputArray }) => {

  const charOrSpace = (char) => {
    const alphabet = new RegExp(/[a-z]/);
    if (alphabet.test(char)) {
      return char;
    }
    return "space";
  };

  const insertImg = (char, i) => {
    return (
      <img
        key={`${char}-${i}-${i}`}
        id={`Sign-${char}`}
        className={`Sign Sign-${char}`}
        alt={`${char}`}
        src={require(`./Signs/${charOrSpace(char.toLowerCase())}.png`)}
      />
    );
  };

  const insertParagraph = (char, i) => {
    return (
      <p key={i} className="Char">
        {char}
      </p>
    );
  };

  let translation;

  if (inputArray.length > 0) {
    translation = inputArray.map((word, i) => {
      return (
        <div key={i + word} className="Word-Wrapper">
          {[...word].map((char, j) => {
            return (
              <div key={word + i + j} className="Sign-Wrapper">
                {insertImg(char, j)}
                {insertParagraph(char, j)}
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <AppContainer>
      <section id="TranslateOutput" className="Translate-Output">
        <Scroll>
          <div className="Words-Wrapper">{translation}</div>
        </Scroll>
        <div className="Translate-Paragraph-Wrapper flex">
          <p className="Translate-Paragraph">Translation</p>
        </div>
      </section>
    </AppContainer>
  );
};

export default TranslateOutput;
