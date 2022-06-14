import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";

const NotFound = () => {
  return (
    <>
      <h1 className="text-center flex">This page does not exist</h1>
      <p className="text-center"><Link to={<LoginPage/>}>Back to start</Link></p>
      
    </>
  );
};

export default NotFound;
