import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import ChristmasTree from "./ChristmasTree/ChristmasTree.js";
import App from "./App.js";
import WriteTree from "./WriteTree.jsx";
import Chatbot from "./Chatbot.js";

const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/ChristmasTree" element={<ChristmasTree />} />
        <Route path="/App" element={<App />} />
        <Route path="/WriteTree" element={<WriteTree />} />
        <Route path="/Chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default Routing;
