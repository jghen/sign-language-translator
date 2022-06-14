import React from "react";
import { useForm } from "react-hook-form";
import Keyboard from "./Keyboard.png";
import "./TranslateForm.css";

const TranslateForm = ({ onTranslation }) => {
  
  const { register, handleSubmit } = useForm();

  const onSubmitForm = ({translation}) => {
    onTranslation(translation);
  };

  return (
    <div className="Translate-Form-Wrapper">
      <img className="Keyboard" src={Keyboard} alt="keyboard" />
      <p className="Line text-center flex">|</p>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="Translate-Form flex"
      >
        <input
          {...register("translation")}
          className="Translate-Input"
          id="translateInput"
          type="text"
          placeholder="Hello"
          maxLength={30}
        />
        <button
          className="cta-btn text-center flex"
          type="submit"
        >
          <span className="material-symbols-outlined arrow-forward">
            arrow_forward
          </span>
        </button>
      </form>
    </div>
  );
};

export default TranslateForm;
