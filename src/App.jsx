import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import "./App.css";
import Chatbot from "./Components/ChatBot";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);

    alert("Login successful");
  };

  return <>{isLoggedIn ? <Chatbot /> : <LoginPage onLogin={handleLogin} />}</>;
};

export default App;
