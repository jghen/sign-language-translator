import React from "react";
import LoginPage from "./components/Login/LoginPage";
import TranslatePage from "./components/Translate/TranslatePage";
import ProfilePage from "./components/Profile/ProfilePage";
import NotFound from "./views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./hoc/style.css";
import "./App.css";
// import Login from "./views/Login";
// import Translate from "./views/Translate";
// import Profile from "./views/Profile";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage /> }/>
        <Route path="/translate" element={<TranslatePage /> }/>
        <Route path="/profile" element={<ProfilePage /> }/>
        <Route path="*" element={<NotFound /> } />
      </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
