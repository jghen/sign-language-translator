import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/user.js";
import Keyboard from "./Keyboard.png";
import "./LoginForm.css";
import { storageSave } from "../../../utils/storage.js";
import { useUser } from "../../../context/UserContext.js";
import { STORAGE_KEY_USER } from "../../../const/storageKeys.js";

const usernameConfig = {
  required: true,
  minLength: 3,
}; //object outside the component is static. only declared once

const LoginForm = () => {
  // Hooks
  const { register, handleSubmit, formState: { errors } } = useForm();

  let navigate = useNavigate();
  const { user, setUser } = useUser();

  //Local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //Side effects
  useEffect(() => {
    if (user !== null) navigate("/translate");
  }, [user, navigate]); // rerender when user changes

  //Event handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);

    //login error:
    if (error !== null) {
      setApiError(error);
    }

    //login success:
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse); //then useEffect will rerender component.
    }
    setLoading(false);
  };
  //Render functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return (
        <section className="Errors-Wrapper">
          <span>Username is required</span>
        </section>
      );
    }
    if (errors.username.type === "minLength") {
      return (
        <section className="Errors-Wrapper">
          <span>Username too short (min. 3)</span>
        </section>
      );
    }
  })();

  return (
    <>
      <div className="Login-Form-Wrapper">
        <img className="Keyboard" src={Keyboard} alt="keyboard" />
        <p className="Line text-center flex">|</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="Login-Form flex"
          action="POST"
        >
          <input
            className="Login-Input"
            type="text"
            placeholder="What's your name?"
            {...register("username", usernameConfig)}
          />

          <button
            disabled={loading}
            className="cta-btn text-center flex"
            type="submit"
          >
            <span className="material-symbols-outlined arrow-forward">
              {"arrow_forward"}
            </span>
          </button>
        </form>
      </div>
      {apiError && (
        <div className="Errors-Wrapper">
          <span>{apiError}</span>
        </div>
      )}
      {loading && <p className="Logging-In">Logging in...</p>}
      {errorMessage}
    </>
  );
};

export default LoginForm;
